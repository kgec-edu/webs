# 🛡️ KGEC Club Logos Directory

Welcome to the **`webs`** Club Logo Repository. This folder stores official vector (SVG) and high-resolution (PNG/WebP) assets for student bodies, societies, and department clubs across Kalyani Government Engineering College.

---

## 📁 Standard Directory Structure

```text
assets/logos/clubs/
├── binary-hackathon.svg      # CSE BINARY National Hackathon
├── robochief-robotics.svg    # Robotics & Embedded Systems Club
├── les-amateurs-cultural.svg # Cultural, Drama & Music Society
├── chitrank-photography.svg  # Photography & Film Society
├── edc-entrepreneurship.svg  # Entrepreneurship Development Cell
├── sports-club.svg           # KGEC Sports & Athletics Board
└── README.md
```

---

## ➕ How to Add a New Club Logo

1. **Naming Format**:
   - Use lowercase kebab-case: `[club-name]-[category].svg`
   - Example: `gdsc-developer.svg`, `rotaract-social.svg`, `ieee-student-branch.svg`.

2. **Asset Guidelines**:
   - **Format**: Vector `.svg` preferred with `viewBox="0 0 300 300"` or square aspect ratio.
   - **Fallback PNG**: Transparent 32-bit PNG (`512x512px` minimum).
   - **Color Modes**: Maintain high contrast on both dark (`#062244`) and light (`#FFFFFF`) backgrounds.

3. **Using in Any Website or Web Component**:
   ```html
   <!-- Method 1: Custom Web Component -->
   <webs-logo variant="club" name="binary-hackathon" size="64"></webs-logo>

   <!-- Method 2: Standard HTML Image -->
   <img src="https://cdn.kgec.edu.in/webs/assets/logos/clubs/binary-hackathon.svg" alt="Binary Club Logo" width="64" height="64" />
   ```
