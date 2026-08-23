/**
 * webs Design System Runtime
 * Universal JavaScript bundle for Web Components and Theme Management
 */
import './components/webs-logo.js';
import './components/webs-navbar.js';
import './components/webs-footer.js';
import './components/webs-icon.js';


export function setWebsTheme(themeName) {
  const validThemes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];
  if (validThemes.includes(themeName)) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('webs_theme', themeName);
  }
}

export function getWebsTheme() {
  return localStorage.getItem('webs_theme') || document.documentElement.getAttribute('data-theme') || 'theme-1';
}

// Auto-initialize saved theme on page load
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('webs_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  window.Webs = {
    setTheme: setWebsTheme,
    getTheme: getWebsTheme,
  };
}
