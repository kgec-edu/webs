# 🌐 webs — The Official KGEC Design System

> **Unified Design System, Web Components & Digital Asset Hub for Kalyani Government Engineering College (KGEC)**  
> Maintained by the **Department of Computer Science & Engineering** • Hosted on `kgec-edu` Git.

---

## 🌟 Why `webs`?

`webs` is an institutional design system modeled after enterprise design systems (like Cape and Carbon). It provides a single source of truth for:
- 🎨 **5 Pluggable Themes** (`theme-1` to `theme-5`) with dynamic CSS variables.
- 🏛️ **IIT Guwahati-Inspired Navigation & Mega Menu** components.
- 🛡️ **Standardized Vector Logos**:
  - Official **KGEC Emblem** (SVG, PNG)
  - **State Emblem of India (Ashoka Stambha)** (SVG)
  - Centralized **Club & Society Logos Directory** (`assets/logos/clubs/`)
- 🚀 **Zero-Dependency Universal Usage**: Works out of the box with **GitHub Pages**, vanilla HTML, React, Next.js, and static site generators.

---

## 📦 Quick Start (Zero Config CDN)

Drop this into your HTML `<head>` or GitHub Pages layout:

```html
<!-- 1. Universal Stylesheet -->
<link rel="stylesheet" href="https://cdn.kgec.edu.in/webs/dist/webs.min.css" />

<!-- 2. Web Components Runtime (Optional) -->
<script type="module" src="https://cdn.kgec.edu.in/webs/dist/webs.js"></script>
```

---

## 🧱 Web Components (Custom Elements)

### 1. Reusable Logos (`<webs-logo>`)
```html
<!-- KGEC Emblem -->
<webs-logo variant="kgec" size="64"></webs-logo>

<!-- Ashoka Stambha National Emblem -->
<webs-logo variant="ashoka" size="64"></webs-logo>

<!-- Student Club Logo -->
<webs-logo variant="club" name="binary-hackathon" size="64"></webs-logo>
<webs-logo variant="club" name="robochief-robotics" size="64"></webs-logo>
```

### 2. Standard Header & IITG Mega Menu Navbar
```html
<webs-navbar active="departments" main-domain="https://website.kgec.edu.in"></webs-navbar>
```

### 3. Standard Footer
```html
<webs-footer main-domain="https://website.kgec.edu.in"></webs-footer>
```

---

## 🎨 5 Pluggable Institutional Themes

Change the theme anytime via the HTML `data-theme` attribute:

```html
<!-- Theme 1 (Default): Classic Navy & Amber Gold -->
<html data-theme="theme-1">

<!-- Theme 2: Forest Emerald & Warm Gold -->
<html data-theme="theme-2">

<!-- Theme 3: Oxford Royal Blue & Solar Gold -->
<html data-theme="theme-3">

<!-- Theme 4: Heritage Crimson & Amber -->
<html data-theme="theme-4">

<!-- Theme 5: Midnight Slate Minimal -->
<html data-theme="theme-5">
```

Or switch via JavaScript:
```javascript
window.Webs.setTheme('theme-2');
```

---

## 📁 Repository Structure

```text
webs/
├── assets/
│   ├── logos/
│   │   ├── institutional/       # KGEC, Ashoka Stambha & West Bengal Emblems
│   │   └── clubs/               # Student Societies & Club Vector SVGs
│   │       ├── binary-hackathon.svg
│   │       ├── robochief-robotics.svg
│   │       ├── les-amateurs-cultural.svg
│   │       └── README.md        # Guide to add new club logos
├── src/
│   ├── css/webs.css             # Universal CSS Framework
│   ├── components/              # Web Components (Custom Elements)
│   ├── tokens/                  # Design Tokens Matrix (5 Themes)
│   └── react/                   # React / Next.js Components
├── demo/index.html              # Live Interactive Documentation & Showcase
└── dist/                        # Production Distribution Bundle
```

---

## ➕ Adding a New Club Logo

1. Place your vector SVG inside `assets/logos/clubs/`.
2. Name it with lowercase kebab-case (e.g. `chitrank-photography.svg` or `gdsc-developer.svg`).
3. Commit and push to `kgec-edu/webs`.
4. The logo is immediately usable across all websites via `<webs-logo variant="club" name="chitrank-photography"></webs-logo>`.
