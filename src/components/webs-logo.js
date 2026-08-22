/**
 * <webs-logo> Web Component
 * Standard reusable vector logo component for KGEC Institutional, Ashoka Stambha, and Student Clubs.
 *
 * Usage:
 * <webs-logo variant="kgec" size="64"></webs-logo>
 * <webs-logo variant="ashoka" size="64"></webs-logo>
 * <webs-logo variant="club" name="binary-hackathon" size="64"></webs-logo>
 */
class WebsLogo extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'name', 'size', 'theme', 'class'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute('variant') || 'kgec';
    const name = this.getAttribute('name') || '';
    const size = parseInt(this.getAttribute('size') || '64', 10);
    const basePath = this.getAttribute('base-path') || '/assets/logos';

    let src = '';
    let alt = '';

    if (variant === 'kgec') {
      src = `${basePath}/institutional/kgec-logo.svg`;
      alt = 'Kalyani Government Engineering College Official Emblem';
    } else if (variant === 'ashoka') {
      src = `${basePath}/institutional/ashoka-stambha.svg`;
      alt = 'State Emblem of India (Ashoka Stambha)';
    } else if (variant === 'club') {
      src = `${basePath}/clubs/${name || 'binary-hackathon'}.svg`;
      alt = `${name} Club Logo`;
    }

    this.innerHTML = `
      <img
        src="${src}"
        alt="${alt}"
        width="${size}"
        height="${size}"
        style="width: ${size}px; height: ${size}px; object-fit: contain; display: inline-block; vertical-align: middle;"
        onerror="this.onerror=null; this.src='${basePath}/institutional/kgec-logo.png';"
      />
    `;
  }
}

if (!customElements.get('webs-logo')) {
  customElements.define('webs-logo', WebsLogo);
}
