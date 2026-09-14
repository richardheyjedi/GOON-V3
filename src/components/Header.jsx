import { useState } from 'react';
import { useLanguage } from '../context/languageContext';

const openLeadModal = (event) => {
  event.preventDefault();
  window.dispatchEvent(new CustomEvent('open-lead-modal'));
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" aria-label="Navegação principal">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="GOON — início">
        <img src="/goon-logo-hero.png" alt="GOON" width="565" height="172" fetchPriority="high" />
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="#systems" onClick={closeMenu}>{t('nav.systems')}</a>
        <a href="#timeline" onClick={closeMenu}>{t('nav.timeline')}</a>
        <a href="#ecosystem" onClick={closeMenu}>{t('nav.ecosystem')}</a>
        <a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a>
      </nav>

      <div className="header-actions">
        <label className="language-control">
          <span className="sr-only">Idioma</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </label>
        <a className="header-cta" href="#contact" onClick={openLeadModal}>
          <span>{t('hero.talkBtn')}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
