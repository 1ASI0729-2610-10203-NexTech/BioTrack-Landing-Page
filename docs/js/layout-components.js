(function () {
  'use strict';

  const path = window.location.pathname.replace(/\\/g, '/');
  const isPagesPath = path.includes('/pages/');
  const basePath = isPagesPath ? '../' : '';
  const indexPath = isPagesPath ? '../index.html' : '';

  function sectionLink(id) {
    return `${indexPath}#${id}`;
  }

  function legalLink(page) {
    return isPagesPath ? page : `pages/${page}`;
  }

  function renderHeader() {
    const headerTarget = document.getElementById('site-header');
    if (!headerTarget) return;

    headerTarget.innerHTML = `
  <header class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="${sectionLink('hero')}" class="logo">
        <img src="${basePath}images/biotrack-1.png" alt="BioTrack Logo" class="logo-img">
      </a>

      <div class="nav-right">
        <nav class="nav-links" id="nav-links" aria-label="Primary navigation" data-i18n-aria-label="aria-primary-nav">
          <a href="${sectionLink('features')}"     data-i18n="nav-features">Features</a>
          <a href="${sectionLink('segments')}"     data-i18n="nav-segments">Who is it for?</a>
          <a href="${sectionLink('how')}"          data-i18n="nav-how">How it works</a>
          <a href="${sectionLink('pricing')}"      data-i18n="nav-pricing">Plans</a>
          <a href="${sectionLink('testimonials')}" data-i18n="nav-testimonials">Insights</a>
          <a href="${sectionLink('contact')}"      data-i18n="nav-contact">Contact</a>
        </nav>

        <div class="nav-cta">
          <a href="https://biotrack-app-nextech.web.app/login" class="btn-ghost"   data-i18n="nav-login">Log in</a>
          <a href="https://biotrack-app-nextech.web.app/register" class="btn-primary" data-i18n="nav-cta">Get started</a>

          <!-- Selector de Idioma -->
          <div class="lang-switcher" role="group" aria-label="Language selector" data-i18n-aria-label="aria-language-switcher">
            <button type="button" class="lang-btn" data-lang="es_419" onclick="applyLanguage('es_419')" aria-label="Switch language to Latin American Spanish" data-i18n-aria-label="aria-lang-es" aria-pressed="false">ES</button>
            <span class="lang-divider">|</span>
            <button type="button" class="lang-btn active" data-lang="en_US" onclick="applyLanguage('en_US')" aria-label="Switch language to English" data-i18n-aria-label="aria-lang-en" aria-pressed="true">EN</button>
          </div>
        </div>
      </div>

      <button type="button" class="hamburger" id="hamburger" aria-label="Toggle navigation menu" data-i18n-aria-label="aria-menu-toggle" aria-controls="nav-links" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
  }

  function renderFooter() {
    const footerTarget = document.getElementById('site-footer');
    if (!footerTarget) return;

    footerTarget.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <a href="${sectionLink('hero')}" class="logo footer-logo">
            <img src="${basePath}images/biotrack-2.png" alt="BioTrack" class="footer-logo-img"/>
          </a>
          <p data-i18n="footer-brand-desc">Academic digital platform project for nutrition follow-up, personalized plans, and progress tracking.</p>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/BioTrack" aria-label="Visit BioTrack on LinkedIn" data-i18n-aria-label="aria-social-linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/BioTrack" aria-label="Visit BioTrack on Instagram" data-i18n-aria-label="aria-social-instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.x.com/BioTrack" aria-label="Visit BioTrack on X" data-i18n-aria-label="aria-social-x">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer-col4-title">Legal</h4>
          <a href="${legalLink('terms-and-conditions.html')}" data-i18n="footer-col4-l1">Terms and Conditions</a>
          <a href="${legalLink('privacy-policy.html')}" data-i18n="footer-col4-l2">Privacy policy</a>
          <a href="${legalLink('health-data-policy.html')}" data-i18n="footer-col4-l3">Health data policy</a>
        </div>

      </div>

      <div class="footer-bottom">
        <p data-i18n="footer-copy">&copy; 2026 BioTrack &mdash; NexTech &middot; UPC academic project</p>
      </div>
    </div>
  </footer>`;
  }

  renderHeader();
  renderFooter();
})();
