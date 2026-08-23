# 🤝 Contributing to `webs` (KGEC Design System)

Thank you for contributing to **`webs`**, the official design system, web components library, and digital asset repository for **Kalyani Government Engineering College (KGEC)**.

---

## 🌿 Branch Naming Conventions

All branch names must follow the structured format:
```text
<type>/<short-description>
# OR with an issue number:
<type>/<issue-number>-<short-description>
```

### Allowed Branch Types:
| Prefix | Description | Example |
| :--- | :--- | :--- |
| `feat/` | New web component, CSS utility, or theme token | `feat/kgec-badge-component`<br>`feat/12-expandable-sidebar` |
| `fix/` | CSS bugfix, visual regression, or script error | `fix/megamenu-mobile-backdrop`<br>`fix/08-logo-card-padding` |
| `perf/` | Asset compression, WebP conversion, bundle optimization | `perf/club-logo-webp-transcoding` |
| `docs/` | Showcase/demo updates, README enhancements | `docs/component-usage-guide` |
| `refactor/` | CSS/JS refactoring without breaking public API | `refactor/css-custom-properties` |
| `test/` | Adding test cases or visual regression tests | `test/navbar-component-lifecycle` |
| `chore/` | Build scripts, tooling, CDN release configs | `chore/update-build-minifier` |

### Branch Rules:
- ✅ Use lowercase alphanumeric characters and hyphens (`-`).
- ❌ Do NOT use uppercase letters, spaces, or underscores.
- ❌ Do NOT push directly to `main`.

---

## 📋 Pull Request (PR) Guidelines & Checklist

1. **Pre-flight Build Verification**:
   Ensure the design system bundle compiles cleanly:
   ```bash
   npm run build
   ```
2. **Asset Budgets**:
   - All vector logos must be `.svg` ($\le 50\text{ KB}$).
   - All raster/club logos must be optimized `.webp` ($\le 120\text{ KB}$).
3. **PR Requirements**:
   - Follow [Conventional Commits](https://www.conventionalcommits.org/) for PR title (`feat(components): ...`, `fix(css): ...`).
   - Include screenshot/GIF of UI component or demo page changes.
   - Code review approval required before merging.
