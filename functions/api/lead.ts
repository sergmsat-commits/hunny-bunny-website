// Приём заявок с сайта (Cloudflare Pages Function, адрес /api/lead).
//
// 1. Проверяет форму: ловушку для ботов, обязательные поля и Cloudflare Turnstile.
// 2. Отправляет заявку ботом в группу Telegram «Заявки Hunny Bunny».
// 3. Отправляет копию на hello@hunnybunny.by через FormSubmit (в фоне, без ожидания).
// 4. Ведёт посетителя на страницу «Спасибо» на его языке.
//
// Ничего не хранит. Если бот ещё не настроен или Telegram недоступен, форма уходит
// прежним путём через FormSubmit (редирект 307 сохраняет данные формы), поэтому заявка не теряется.
//
// Секреты задаются в Cloudflare: Workers & Pages → hunny-bunny-website → Settings → Variables and Secrets.
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — номер группы (отрицательное число)
//   TURNSTILE_SECRET   — секретный ключ Turnstile

interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  TURNSTILE_SECRET?: string;
}
interface Ctx {
  request: Request;
  env: Env;
  waitUntil: (p: Promise<unknown>) => void;
}

const EMAIL = 'hello@hunnybunny.by';
const FORMSUBMIT = `https://formsubmit.co/${EMAIL}`;
const THANKS: Record<string, string> = { RU: '/thank-you/', EN: '/en/thank-you/', PL: '/pl/thank-you/' };

const field = (f: FormData, name: string, max = 200) => String(f.get(name) ?? '').trim().slice(0, max);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const onRequestPost = async ({ request, env, waitUntil }: Ctx): Promise<Response> => {
  // Бот ещё не настроен — отправляем форму как раньше, через FormSubmit
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return Response.redirect(FORMSUBMIT, 307);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const lang = (field(form, 'Язык сайта', 2) || 'RU').toUpperCase();
  const thanks = new URL(THANKS[lang] ?? THANKS.RU, request.url).toString();

  // Ловушка: это поле видят только боты. Делаем вид, что всё прошло успешно.
  if (field(form, '_honey')) return Response.redirect(thanks, 303);

  const name = field(form, 'Имя', 80);
  const phone = field(form, 'Телефон', 40);
  const email = field(form, 'Email', 120);
  const who = field(form, 'Кто учится', 60);
  const consent = field(form, 'Согласие на обработку ПД', 10);
  if (!name || !phone || !consent) return errorPage(lang, 400);

  // Проверка Cloudflare Turnstile (если ключ задан)
  if (env.TURNSTILE_SECRET) {
    const token = field(form, 'cf-turnstile-response', 4096);
    const body = new FormData();
    body.append('secret', env.TURNSTILE_SECRET);
    body.append('response', token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) body.append('remoteip', ip);
    let ok = false;
    try {
      const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
      ok = Boolean(((await r.json()) as { success?: boolean }).success);
    } catch {
      ok = false;
    }
    if (!ok) return errorPage(lang, 403);
  }

  const time = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk', dateStyle: 'short', timeStyle: 'short' });
  const text = [
    '🐰 <b>Новая заявка с сайта</b>',
    '',
    `<b>Имя:</b> ${esc(name)}`,
    `<b>Телефон:</b> ${esc(phone)}`,
    email ? `<b>Email:</b> ${esc(email)}` : '',
    who ? `<b>Кто учится:</b> ${esc(who)}` : '',
    `<b>Версия сайта:</b> ${esc(lang)}`,
    `<b>Время (Минск):</b> ${esc(time)}`,
  ]
    .filter(Boolean)
    .join('\n');

  let sent = false;
  try {
    const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    sent = r.ok;
  } catch {
    sent = false;
  }
  // Telegram не принял — заявка уходит прежним путём на почту
  if (!sent) return Response.redirect(FORMSUBMIT, 307);

  // Копия на почту — в фоне, посетитель её не ждёт
  waitUntil(
    fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://hunnybunny.by',
        Referer: 'https://hunnybunny.by/',
      },
      body: JSON.stringify({
        _subject: field(form, '_subject', 120) || 'Заявка с сайта hunnybunny.by',
        _template: 'table',
        Имя: name,
        Телефон: phone,
        Email: email,
        'Кто учится': who,
        'Язык сайта': lang,
        'Согласие на обработку ПД': consent,
      }),
    }).catch(() => undefined),
  );

  return Response.redirect(thanks, 303);
};

// Сюда же иногда заходят браузером напрямую — отправляем на главную
export const onRequestGet = ({ request }: Ctx) => Response.redirect(new URL('/', request.url).toString(), 302);

const MSG: Record<string, { title: string; text: string; back: string }> = {
  RU: {
    title: 'Не удалось отправить заявку',
    text: 'Пожалуйста, вернитесь и попробуйте ещё раз или напишите нам напрямую — ответим быстро.',
    back: '← Вернуться на сайт',
  },
  EN: {
    title: 'We couldn’t send your request',
    text: 'Please go back and try again, or message us directly — we reply quickly.',
    back: '← Back to the website',
  },
  PL: {
    title: 'Nie udało się wysłać zgłoszenia',
    text: 'Wróć i spróbuj ponownie albo napisz do nas bezpośrednio — odpowiemy szybko.',
    back: '← Wróć na stronę',
  },
};

function errorPage(lang: string, status: number): Response {
  const m = MSG[lang] ?? MSG.RU;
  const home = lang === 'EN' ? '/en/' : lang === 'PL' ? '/pl/' : '/';
  const html = `<!doctype html><html lang="${lang.toLowerCase()}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${m.title} | Hunny Bunny English</title>
<style>body{margin:0;font:17px/1.6 system-ui,sans-serif;background:#f7f5ff;color:#231e45;display:grid;place-items:center;min-height:100vh;padding:24px;box-sizing:border-box}main{max-width:520px;background:#fff;border-radius:24px;padding:32px;box-shadow:0 16px 40px rgba(35,30,69,.12)}h1{font-size:24px;line-height:1.2;margin:0 0 12px}p{margin:0 0 20px}.links{display:flex;flex-wrap:wrap;gap:10px}a{display:inline-flex;align-items:center;min-height:48px;padding:0 18px;border-radius:14px;background:#e4e0ff;color:#231e45;font-weight:700;text-decoration:none}a.main{background:#5b4fd9;color:#fff}</style></head>
<body><main><h1>${m.title}</h1><p>${m.text}</p><div class="links">
<a class="main" href="${home}#contact">${m.back}</a>
<a href="https://t.me/hunnybunnyenglish">Telegram</a>
<a href="viber://chat?number=%2B375296256442">Viber</a>
<a href="https://wa.me/48573306598">WhatsApp</a>
<a href="tel:+375296256442">+375 29 625-64-42</a>
</div></main></body></html>`;
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
