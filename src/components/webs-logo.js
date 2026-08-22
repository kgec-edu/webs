/**
 * <webs-logo> Web Component
 * Standard reusable vector & high-res logo component for KGEC Institutional, Ashoka Stambha, and Student Clubs.
 *
 * Usage:
 * <webs-logo variant="kgec" size="64"></webs-logo>
 * <webs-logo variant="ashoka" size="64"></webs-logo>
 * <webs-logo variant="club" name="keygencoders" size="64"></webs-logo>
 * <webs-logo variant="club" name="robotics-society" size="64"></webs-logo>
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
      const clubMap = {
        'keygencoders': 'keygencoders.jpeg',
        'gdsc': 'gdsc-kgec.png',
        'gdsc-kgec': 'gdsc-kgec.png',
        'robotics': 'robotics-society.png',
        'robotics-society': 'robotics-society.png',
        'robochief': 'robotics-society.png',
        'ecell': 'ecell.png',
        'sportix': 'sportix.png',
        'sports': 'sportix.png',
        'les-quizerables': 'les-quizerables.jpg',
        'litmus': 'litmus.jpg',
        'chitrank': 'chitrank.png',
        'shutterbug': 'shutterbug.png',
        'riyaz': 'riyaz.png',
        'elysium': 'elysium.png',
        'infinitio': 'infinitio.jpeg',
        'nova': 'nova.jpg',
        'sac': 'sac.png',
        'binary': 'binary-hackathon.svg',
        'binary-hackathon': 'binary-hackathon.svg',
      };
      const fileName = clubMap[name.toLowerCase()] || `${name}.png`;
      src = `${basePath}/clubs/${fileName}`;
      alt = `${name} Club Logo`;
    }

    this.innerHTML = `
      <img
        src="${src}"
        alt="${alt}"
        width="${size}"
        height="${size}"
        style="width: ${size}px; height: ${size}px; object-fit: contain; display: inline-block; vertical-align: middle; border-radius: 4px;"
        onerror="this.onerror=null; this.src='${basePath}/institutional/kgec-logo.png';"
      />
    `;
  }
}

if (!customElements.get('webs-logo')) {
  customElements.define('webs-logo', WebsLogo);
}
