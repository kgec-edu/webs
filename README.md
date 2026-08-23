# 🌐 webs — The Official KGEC Design System

> **Unified Design System, Web Components & Digital Asset Hub for Kalyani Government Engineering College (KGEC)**  
> Maintained by the **Department of Computer Science & Engineering** • Hosted on `kgec-edu` Git.

---

## 🌟 Why `webs`?

`webs` is an institutional design system modeled after enterprise design systems. It provides a single source of truth for:
- 🎨 **5 Pluggable Themes** (`theme-1` to `theme-5`) with dynamic CSS variables (Default: KGEC Signature `#212331` & `#FC9928`).
- 🏛️ **KGEC Institutional Navigation & Mega Menu** components.
- 🛡️ **Standardized Vector & High-Res Logos**:
  - Official **KGEC Emblem** (SVG, PNG)
  - **State Emblem of India (Ashoka Stambha)** (PNG, SVG)
  - Centralized **14 Official Club & Society Logos Directory** (`assets/logos/clubs/`)
- 🚀 **Zero-Dependency Universal GitHub CDN**: Powered by **jsDelivr** and **Statically**, works immediately in **GitHub Pages**, vanilla HTML, React, Next.js, and static site generators.

---

## ⚡ Global GitHub CDN Integration (Zero-Config)

You can load `webs` directly from the **GitHub CDN** via [jsDelivr](https://www.jsdelivr.com/) or [Statically](https://statically.io/):

### Option A: jsDelivr GitHub CDN (Fast & Cached Globally)
```html
<!-- 1. Universal webs CSS Framework -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/dist/webs.min.css" />

<!-- 2. Web Components Runtime (Optional) -->
<script type="module" src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/dist/webs.js"></script>
```

### Option B: Statically CDN
```html
<link rel="stylesheet" href="https://cdn.statically.io/gh/kgec-edu/webs/main/dist/webs.min.css" />
<script type="module" src="https://cdn.statically.io/gh/kgec-edu/webs/main/dist/webs.js"></script>
```

---

## 🖼️ GitHub CDN Image Hotlinking (Logos & Clubs)

You can hotlink vector SVGs and logos anywhere without self-hosting:

### 1. Institutional Emblems
```html
<!-- KGEC Official Vector SVG Emblem -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/institutional/kgec-logo.svg" width="64" alt="KGEC Emblem" />

<!-- State Emblem of India (Ashoka Stambha) -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/institutional/ashok-stambh.png" width="48" alt="Ashoka Stambha" />
```

### 2. 14 Official Student Club Logos
```html
<!-- Keygencoders Coding Club -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/keygencoders.jpeg" width="64" alt="Keygencoders" />

<!-- GDSC KGEC -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/gdsc-kgec.png" width="64" alt="GDSC KGEC" />

<!-- Robotics Society -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/robotics-society.png" width="64" alt="Robotics Society" />

<!-- E-Cell (EDC) -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/ecell.png" width="64" alt="E-Cell" />

<!-- Sportix -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/sportix.png" width="64" alt="Sportix" />

<!-- Les Quizerables -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/les-quizerables.jpg" width="64" alt="Les Quizerables" />

<!-- Litmus -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/litmus.jpg" width="64" alt="Litmus" />

<!-- Chitrank -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/chitrank.png" width="64" alt="Chitrank" />

<!-- Shutterbug -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/shutterbug.png" width="64" alt="Shutterbug" />

<!-- Riyaz -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/riyaz.png" width="64" alt="Riyaz" />

<!-- Elysium -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/elysium.png" width="64" alt="Elysium" />

<!-- Infinitio -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/infinitio.jpeg" width="64" alt="Infinitio" />

<!-- Nova -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/nova.jpg" width="64" alt="Nova" />

<!-- SAC (Students' Affairs Council) -->
<img src="https://cdn.jsdelivr.net/gh/kgec-edu/webs@main/assets/logos/clubs/sac.png" width="64" alt="SAC" />
```

---

## 🧱 Web Components (Custom Elements)

```html
<!-- Reusable Vector Logo Component -->
<webs-logo variant="kgec" size="64"></webs-logo>
<webs-logo variant="ashoka" size="64"></webs-logo>
<webs-logo variant="club" name="keygencoders" size="64"></webs-logo>
<webs-logo variant="club" name="robotics-society" size="64"></webs-logo>

<!-- KGEC Institutional MegaMenu Navbar -->
<webs-navbar active="departments" main-domain="https://website.kgec.edu.in"></webs-navbar>

<!-- Standard Institutional Footer -->
<webs-footer main-domain="https://website.kgec.edu.in"></webs-footer>
```

---

## 🎨 5 Pluggable Institutional Themes

Change the theme anytime via the HTML `data-theme` attribute:

```html
<!-- Theme 1 (Default): KGEC Slate Navy & Warm Tangerine -->
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

---

## 🌐 Live Portals
- 📄 **GitHub Pages Site**: [https://kgec-edu.github.io/webs/](https://kgec-edu.github.io/webs/)
- 🏛️ **Live Institutional Portal**: [https://website.kgec.edu.in](https://website.kgec.edu.in)
- 📰 **KGEC Student Blog**: [https://blog.kgec.edu.in](https://blog.kgec.edu.in)
