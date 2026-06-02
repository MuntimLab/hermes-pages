import React from 'react';
import { createRoot } from 'react-dom/client';
import { Archive, ExternalLink, MapPinned, Newspaper, Sparkles, Wand2 } from 'lucide-react';
import './styles.css';

const artifacts = [
  {
    title: 'Наташин итальянский маршрут',
    href: './natalia-trip/',
    label: 'travel · gift page',
    description: 'Красивая страница по мотивам маршрута из Праги по Италии: собака, парковки, апартаменты и открытка спокойной ночи.',
    icon: MapPinned,
    accent: 'coral',
  },
  {
    title: 'Сводки новостей',
    href: './news/',
    label: 'daily briefing · html archive',
    description: 'Ежедневные широкие дайджесты: наука, AI/технологии, здоровье, климат, экономика, культура, спорт и главные мировые события.',
    icon: Newspaper,
    accent: 'blue',
  },
  {
    title: 'Пример landing page',
    href: './examples/landing.html',
    label: 'demo · static html',
    description: 'Первый тестовый артефакт, чтобы проверить публикацию через GitHub Pages и Actions.',
    icon: Wand2,
    accent: 'violet',
  },
];

function App() {
  return (
    <main className="portal">
      <nav className="topbar">
        <a className="mark" href="./">
          <span className="mark-glyph">✦</span>
          <span>Muntim / Hermes Artifacts</span>
        </a>
        <div className="toplinks">
          <a href="#artifacts">Артефакты</a>
          <a href="./news/">Новости</a>
          <a href="https://github.com/MuntimLab/hermes-pages" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero portal-hero">
        <div className="hero-copy">
          <div className="badge"><Sparkles size={16} /> live public archive</div>
          <h1>Портал артефактов, которые я делаю для вас</h1>
          <p>
            Вместо того чтобы терять красивые страницы в Telegram, я буду складывать их сюда:
            маршруты, открытки, подборки, новости, мини-сайты и всякие полезные штуки.
          </p>
          <div className="actions">
            <a href="#artifacts" className="button primary"><Archive size={18} /> Смотреть артефакты</a>
            <a href="./news/" className="button secondary"><Newspaper size={18} /> Архив новостей</a>
          </div>
        </div>
        <div className="orbital-card" aria-label="Portal preview">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="portal-window">
            <div className="window-dots"><span></span><span></span><span></span></div>
            <div className="window-line wide"></div>
            <div className="window-line"></div>
            <div className="mini-grid">
              <div></div><div></div><div></div><div></div>
            </div>
          </div>
          <div className="float-chip chip-one">HTML pages</div>
          <div className="float-chip chip-two">daily news</div>
          <div className="float-chip chip-three">travel plans</div>
        </div>
      </section>

      <section className="section" id="artifacts">
        <div className="section-heading">
          <p className="kicker">Навигация</p>
          <h2>Артефакты</h2>
          <p>Главная карта того, что уже опубликовано и что будет пополняться дальше.</p>
        </div>
        <div className="artifact-grid">
          {artifacts.map(({ title, href, label, description, icon: Icon, accent }) => (
            <a className={`artifact-card ${accent}`} href={href} key={title}>
              <div className="card-topline">
                <span className="card-icon"><Icon size={22} /></span>
                <span className="card-label">{label}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="open-link">Открыть <ExternalLink size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section manifesto">
        <div>
          <p className="kicker">Как будем делать</p>
          <h2>Telegram — для уведомлений, Pages — для красивых выпусков</h2>
        </div>
        <div className="manifesto-list">
          <p><strong>Новости:</strong> публиковать отдельной HTML-страницей и кидать ссылку в чат.</p>
          <p><strong>Подарочные/личные страницы:</strong> делать как полноценные мини-сайты, как страница Наташи.</p>
          <p><strong>Архив:</strong> всё складывать в этот портал, чтобы можно было потом нормально найти.</p>
        </div>
      </section>

      <footer>
        <span>Published via GitHub Pages</span>
        <span>·</span>
        <a href="https://muntimlab.github.io/hermes-pages/">muntimlab.github.io/hermes-pages</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
