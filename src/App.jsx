import React from 'react';
import { createRoot } from 'react-dom/client';
import { Sparkles, Rocket, Code2 } from 'lucide-react';
import './styles.css';

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="badge"><Sparkles size={16} /> Hermes generated site</div>
        <h1>Статичные страницы без сервера</h1>
        <p>
          Этот репозиторий — заготовка под страницы и небольшие фронтовые приложения,
          которые я могу генерировать, коммитить и публиковать через GitHub Pages.
        </p>
        <div className="actions">
          <a href="./examples/landing.html" className="button primary"><Rocket size={18} /> Пример страницы</a>
          <a href="https://github.com/" className="button secondary"><Code2 size={18} /> GitHub Pages</a>
        </div>
      </section>
      <section className="cards">
        <article>
          <h2>Как будет работать</h2>
          <p>Ты просишь страницу → я генерирую HTML/React → коммичу → GitHub Actions собирает → Pages публикует.</p>
        </article>
        <article>
          <h2>Безопаснее Caddy</h2>
          <p>Нет открытого сервера на VPS, нет Docker-сервиса, меньше поверхности атаки. Всё лежит в публичной репе.</p>
        </article>
        <article>
          <h2>Можно расширять</h2>
          <p>Поддержит как простые HTML-страницы, так и полноценные Vite/React мини-приложения.</p>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
