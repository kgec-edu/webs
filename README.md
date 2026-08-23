# 🌐 webs — The Official KGEC Design System

> **Unified Design System, Typography Scale, Vector Iconography, Web Components & Digital Asset Hub for Kalyani Government Engineering College (KGEC)**  
> Maintained by the **Department of Computer Science & Engineering** • Open Source on `kgec-edu` Git.

---

## 🌟 Why `webs`?

`webs` is a production-grade institutional design system providing a single source of truth across all KGEC web properties, department portals, and student club platforms:

- 🔤 **Complete Typography System**: Rigorous 10-level mathematical type scale (`6xl` to `xs`), 5 specialized font stacks (Outfit, Plus Jakarta Sans, JetBrains Mono, Merriweather, Hind Siliguri), and semantic utilities (eyebrow, lead, blockquote, prose).
- 🎨 **70+ Vector Iconography System**: Scalable 24x24 Lucide-compatible vector icons available as Web Components (`<webs-icon>`), React components (`<WebsIcon />`), and raw SVG tokens.
- 🌈 **5 Pluggable Themes** (`theme-1` to `theme-5`) with dynamic CSS variables (Default: KGEC Signature `#212331` & `#FC9928`).
- 🏛️ **KGEC Institutional Components**: MegaMenu Navbar, Footer, and Badge/Card systems.
- 🛡️ **Centralized Logo Directory**: Official KGEC Emblem, National Emblem of India, and 14 student societies (Shutterbug, Keygencoders, Robotics Society, E-Cell, etc.) in SVG, WebP, and PNG formats.
- 🚀 **Zero-Dependency Universal GitHub CDN**: Works instantly in GitHub Pages, vanilla HTML, React, Next.js, and static site generators.

---

## ⚡ Quick Start: GitHub CDN (Zero-Config)

Load `webs` directly in any HTML page via [jsDelivr](https://www.jsdelivr.com/):

```html
<!-- 1. Universal webs CSS Framework & Typography -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/dist/webs.min.css" />

<!-- 2. Web Components Runtime (Icons, Navbar, Logos) -->
<script type="module" src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/dist/webs.js"></script>
```

---

## 🔤 1. Typography System

`webs` provides a complete typographic hierarchy configured for high legibility on 4G networks and responsive screens:

### Font Stacks
| Token | Font Family | Recommended Usage |
|---|---|---|
| `var(--webs-font-heading)` | **Outfit**, sans-serif | Section titles, hero display text, brand headings |
| `var(--webs-font-body)` | **Plus Jakarta Sans**, sans-serif | Body copy, articles, form controls, buttons |
| `var(--webs-font-mono)` | **JetBrains Mono**, monospace | Reference IDs, NIT codes, code snippets, timestamps |
| `var(--webs-font-serif)` | **Merriweather**, Georgia, serif | Editorial narratives, formal proclamations |
| `var(--webs-font-indic)` | **Hind Siliguri**, Bengali, sans-serif | Official Bengali institutional text |

### Type Scale Classes
```html
<h1 class="webs-text-6xl webs-font-extrabold">Hero Display (60px)</h1>
<h1 class="webs-text-4xl webs-font-extrabold">Heading 1 (36px)</h1>
<h2 class="webs-text-3xl webs-font-bold">Heading 2 (30px)</h2>
<h3 class="webs-text-2xl webs-font-bold">Heading 3 (24px)</h3>
<h4 class="webs-text-xl webs-font-semibold">Heading 4 (20px)</h4>
<p class="webs-text-lg webs-lead">Lead Paragraph (18px)</p>
<p class="webs-text-base">Body Copy (16px)</p>
<span class="webs-text-sm">Body Small / Meta (14px)</span>
<span class="webs-eyebrow">CATEGORY EYEBROW (12px uppercase)</span>
```

---

## 🎨 2. Iconography System (70+ Icons)

`webs` includes an extensive library of scalable vector icons with consistent 2px strokes.

### Usage as Web Component (Vanilla HTML / Any Framework)
```html
<!-- Default 22px icon -->
<webs-icon name="academic-cap"></webs-icon>

<!-- Sizing Options: xs (14px), sm (18px), md (22px), lg (28px), xl (36px), 2xl (48px) -->
<webs-icon name="microscope" size="lg"></webs-icon>
<webs-icon name="cpu" size="xl" class="webs-icon-accent"></webs-icon>
<webs-icon name="refresh" size="md" class="webs-icon-spin"></webs-icon>
```

### Usage in React
```tsx
import { WebsIcon } from '@kgec-edu/webs';

export function Header() {
  return (
    <div className="flex items-center gap-2">
      <WebsIcon name="academic-cap" size="md" className="webs-icon-primary" />
      <span>Academics</span>
    </div>
  );
}
```

### Core Categories
- **Academic & Labs**: `academic-cap`, `book`, `building`, `beaker`, `microscope`, `atom`, `cpu`, `briefcase`, `award`, `calendar`, `newspaper`, `file-text`.
- **Navigation & Actions**: `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`, `chevron-left`, `chevron-right`, `chevron-up`, `chevron-down`, `menu`, `close`, `search`, `external-link`, `download`, `upload`, `copy`, `check`, `plus`, `minus`, `filter`, `refresh`.
- **Communication & Social**: `mail`, `phone`, `map-pin`, `globe`, `bell`, `rss`, `github`, `linkedin`, `youtube`.
- **Security & Governance**: `user`, `users`, `shield-check`, `lock`, `key`, `info`, `alert-triangle`.
- **Media & Controls**: `palette`, `sun`, `moon`, `layers`, `terminal`, `star`, `sparkles`.

---

## 🌈 3. Five Pluggable Theme Presets

Switch themes at runtime by changing the `data-theme` attribute on `<html>`:

```javascript
// Switch to Forest Emerald
Webs.setTheme('theme-2');

// Switch to Signature Slate Navy & Warm Tangerine (Default)
Webs.setTheme('theme-1');
```

| Theme ID | Name | Primary (`--webs-primary`) | Accent (`--webs-accent`) |
|---|---|---|---|
| `theme-1` | **KGEC Slate Navy & Warm Tangerine** (Default) | `#212331` | `#FC9928` |
| `theme-2` | **Lush Forest Emerald** | `#064E3B` | `#F59E0B` |
| `theme-3` | **Oxford Royal Blue & Solar Gold** | `#1E3A8A` | `#EAB308` |
| `theme-4` | **Heritage Crimson & Amber** | `#881337` | `#F59E0B` |
| `theme-5` | **Midnight Slate Minimal** | `#0F172A` | `#EAB308` |

---

## 🖼️ 4. Asset Vault Hotlinks (14 Official Societies & Emblems)

Hotlink vector SVG, transparent WebP, and PNG logos directly via jsDelivr CDN:

### Institutional Emblems
```html
<!-- KGEC Official Emblem (SVG) -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/institutional/kgec-logo.svg" width="64" alt="KGEC Emblem" />

<!-- National Emblem of India (WebP) -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/institutional/national-emblem.webp" width="48" alt="National Emblem of India" />
```

### All 14 Student Clubs & Societies Directory
| # | Club / Society | Domain / Purpose | Hotlink CDN (WebP) |
|---|---|---|---|
| 1 | **Shutterbug** | Photography & Films | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/shutterbug.webp` |
| 2 | **Keygencoders** | Coding & Open Source | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/keygencoders.webp` |
| 3 | **Robotics Society** | Hardware & AI | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/robotics-society.webp` |
| 4 | **E-Cell (EDC)** | Entrepreneurship | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/ecell.webp` |
| 5 | **GDSC KGEC** | Developer Community | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/gdsc-kgec.webp` |
| 6 | **Chitrank** | Fine Arts & Painting | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/chitrank.webp` |
| 7 | **Litmus** | Literature & Debate | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/litmus.webp` |
| 8 | **Les Quizerables** | Quizzing Society | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/les-quizerables.webp` |
| 9 | **Riyaz** | Music & Vocals | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/riyaz.webp` |
| 10 | **Elysium** | Dance Society | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/elysium.webp` |
| 11 | **Infinitio** | Astronomy & Science | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/infinitio.webp` |
| 12 | **Nova** | Fashion & Lifestyle | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/nova.webp` |
| 13 | **Sportix** | Sports & Athletics | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/sportix.webp` |
| 14 | **SAC** | Students' Affairs Council | `https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/sac.webp` |

### Web Component Usage
```html
<webs-logo variant="club" name="shutterbug" size="64"></webs-logo>
<webs-logo variant="club" name="keygencoders" size="64"></webs-logo>
<webs-logo variant="club" name="robotics-society" size="64"></webs-logo>
```

---

## 📄 License & Maintenance

Maintained with ❤️ by the **Department of Computer Science & Engineering**, Kalyani Government Engineering College.  
Licensed under the **MIT License**.

