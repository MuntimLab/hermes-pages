# Hermes Pages

Репозиторий для статичных страниц и небольших фронтовых приложений, которые Hermes может генерировать и публиковать через GitHub Pages.

## Локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Публикация

После пуша в `main` GitHub Actions собирает Vite-приложение и публикует `dist/` через GitHub Pages.

## Как добавлять страницы

- Простые статичные HTML: `public/examples/*.html`, доступны как `/examples/name.html`.
- React/Vite app: редактировать `src/App.jsx` и `src/styles.css`.
