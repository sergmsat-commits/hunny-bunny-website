// Единый источник контактов (NAP) для всего сайта: футер, форма, schema.org.
// Меняете телефон, адрес или часы — меняйте только здесь.

export const business = {
  name: 'Hunny Bunny English',
  // Cloudflare Turnstile (защита формы от спама): публичный ключ сайта. Пустой — проверка не показывается.
  turnstileSiteKey: '',
  legal: {
    company: 'ООО «ЮСПРО»',
    unp: '491393414',
  },
  site: 'https://hunnybunny.by',
  email: 'hello@hunnybunny.by', // пересылка через Cloudflare Email Routing на почту Юлии
  gomel: {
    street: { ru: 'ул. Крестьянская, 33', en: '33 Krestyanskaya St', pl: 'ul. Kriestjanskaja 33' },
    city: { ru: 'Гомель', en: 'Gomel', pl: 'Homel' },
    postalCode: '246003',
    country: 'BY',
    geo: { lat: 52.4345, lng: 30.9754 },
    hours: '10:00–21:00',
    openingHours: 'Mo-Su 10:00-21:00',
    yandexMaps: 'https://yandex.by/maps/155/gomel/search/Hunny%20Bunny%20%D0%9A%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2033/',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Hunny+Bunny+English+Gomel+Krestyanskaya+33',
  },
  phones: {
    by: { display: '+375 29 625-64-42', e164: '+375296256442' },
    pl: { display: '+48 573 306 598', e164: '+48573306598' },
  },
  messengers: {
    telegram: 'https://t.me/hunnybunnyenglish',
    viber: 'viber://chat?number=%2B375296256442',
    whatsapp: 'https://wa.me/48573306598',
  },
  socials: {
    instagram: 'https://www.instagram.com/hunny_bunny_english/',
    instagramDirect: 'https://ig.me/m/hunny_bunny_english',
    youtube: 'https://www.youtube.com/@hunnybunnyenglish',
    founderInstagram: 'https://www.instagram.com/julia_satyrova/',
  },
} as const;

export type Lang = 'ru' | 'en' | 'pl';
export const langs: Lang[] = ['ru', 'en', 'pl'];
export const homePath: Record<Lang, string> = { ru: '/', en: '/en/', pl: '/pl/' };
