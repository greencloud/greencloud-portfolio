# Site languages

- `messages/en.json`: English (fallback).
- `messages/es.json`: Spanish.
- `messages/zh.json`: Mandarin in Simplified Chinese.

On the first visit, the server reads the browser's primary `Accept-Language`
preference. Regional tags such as `es-MX`, `zh-CN`, and `zh-TW` are supported.
Unsupported primary languages fall back to English. An explicit selection in the
header takes precedence and is saved in the `portfolio-language` cookie for one
year. Content changes immediately; a router refresh updates server metadata too.

Keep dictionary keys, project order, and tool order aligned across all three
files. Project images remain in `src/app/data/projects.tsx`; text is stored only
in the dictionaries. Preserve interpolation tokens such as `{tool}`, `{index}`,
and `{total}`. Preserve `meaPERITIA` and proper names, product names, contact
addresses, and URLs.

Use `useLanguage()` in client components. The root layout resolves the initial
locale and supplies `LanguageProvider`, so initial server markup and hydration
use the same language. Keep the nonce wiring intact when editing the layout.

Run `npm test` to check browser-language resolution, fallback behavior,
dictionary completeness, localized metadata, and the existing security tests.
