# Hunny Bunny English — hunnybunny.by

Сайт школы английского языка для детей от 3 лет, подростков и взрослых: Гомель, Варшава и онлайн. Три языка: русский (`/`), английский (`/en/`) и польский (`/pl/`).

## Стек

- [Astro 6](https://astro.build) — статичная сборка, почти без JavaScript
- `astro:assets` — фото в AVIF/WebP с адаптивными размерами
- Шрифты Unbounded и Manrope (самостоятельно размещённые, кириллица и латиница с польскими буквами)
- Cloudflare Pages — хостинг и автодеплой из `main`, тестовые версии для каждой ветки
- Cloudflare Email Routing — `hello@hunnybunny.by`
- FormSubmit — отправка заявок; Google Analytics 4 — только после согласия в баннере cookies

## Структура

| Путь | Что там |
|---|---|
| `src/data/business.ts` | Единый источник контактов: название, адрес, телефоны, часы, мессенджеры, реквизиты |
| `src/i18n/translations.ts` | Все тексты сайта на трёх языках |
| `src/i18n/privacy.ts` | Политика конфиденциальности на трёх языках |
| `src/components/` | Секции главной (Hero, Courses, Team, Reviews, FAQ, Contact…), шапка, футер, баннер cookies, полноэкранный просмотр фото |
| `src/layouts/Layout.astro` | `<head>`: мета, canonical, hreflang, Open Graph, schema.org |
| `public/_redirects` | 301-редиректы со старых адресов |
| `docs/before`, `docs/after` | Замеры Lighthouse и скриншоты до и после редизайна |

## Команды

```sh
npm install
npm run dev      # локально на http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # просмотр сборки
```

## Как вносить изменения

Каждое изменение — отдельная ветка и pull request. Cloudflare собирает тестовую версию `https://<ветка>.hunny-bunny-website.pages.dev`; после проверки PR сливается в `main` и сайт обновляется автоматически.

## Результаты редизайна (Lighthouse, мобильный)

| | До | После |
|---|---|---|
| Производительность | 74 | 98–99 |
| Доступность | 86 | 100 |
| Вес главной | 11,3 МБ | 0,43 МБ |
| LCP | 6,3 с | 2,1 с |

Подробно: `docs/after/README.md`.
