# Migration Log

## Refinement Pass 0 — UX & Information Delivery

### New files
- `src/components/NavStrip.jsx` — Reusable horizontal navigation-strip component replacing the image-card grids on school intro pages.
- `src/components/NavStrip.css` — Styles for NavStrip cards, icon circles, and arrow indicators.

### Modified files

| File | Change |
|------|--------|
| `src/components/Header.jsx` | Fixed typo: `"Red Dear"` → `"Red Deer"` |
| `src/components/index.js` | Exported `NavStrip` |
| `src/components/peopleSuits.jsx` | Added `✓` checkmark span before each item text |
| `src/components/peopleSuits.module.css` | Changed box layout to `flex-row` to accommodate checkmark; added `.checkmark` style |
| `src/components/prosCons.jsx` | Added `✅` / `⚠️` prefix to Pros/Cons titles |
| `src/components/prosCons.module.css` | Added `letter-spacing: 0.02em` to list items |
| `src/components/Footer.jsx` | Wrapped flag images in `.flag-item` divs with visible text labels and `aria-label` attributes |
| `src/components/Footer.css` | Added `.flag-item` and `.flag-label` styles |
| `src/app/page.jsx` | Added country tags, taglines, and "了解更多 →" CTA to each school selection card |
| `src/app/page.module.css` | Added `transform: translateY(-2px)` hover lift; added `.school_tagline` and `.school_cta` styles |
| `src/app/COC/page.jsx` | Added breadcrumb nav, hero eyebrow label, stats callout, replaced resourcesGrid with `<NavStrip>` |
| `src/app/COC/page.module.css` | Added `.hero-eyebrow`, `.stats-callout`, `.stats-chip`; updated `.hero-section` with padding/border-bottom; reset hero h1/h2 margins |
| `src/app/UMC/page.jsx` | Same as COC: breadcrumb, eyebrow, stats callout, NavStrip |
| `src/app/UMC/page.module.css` | Same additions as COC module |
| `src/app/RedDeer/page.jsx` | Same as COC: breadcrumb, eyebrow, stats callout, NavStrip |
| `src/app/RedDeer/page.module.css` | Same additions as COC module |

### Decisions

- **Resource cards → NavStrip**: The old image-card grid used generic stock photos (many shared across all three schools) and gave no context about page content. Replaced with labelled horizontal cards (icon + title + description + arrow) that communicate destination before the user clicks. Old `.resource-card`, `.resource-image`, `.extra-info-row`, `.resourcesGrid` CSS classes are retained in the module files but are now unused — they can be pruned in a future cleanup pass.
- **Stats callout reuses `.callout` global pattern**: Rather than inventing a new container, the stats row is built inside the existing callout design-token shape, keeping visual language consistent.
- **Footer flag decorative treatment**: The ROC flag has no link; it is kept as a decorative national indicator. The US/Canada flags now have explicit labels and `aria-label` so screen-reader users understand the navigation intent.
- **Three separate CSS modules**: Each school page (COC, UMC, RedDeer) has its own `page.module.css`. The hero/stats additions were applied identically to all three to keep them in sync. A future refactor could extract them into a shared `schoolPage.module.css`.

---

## Refinement Pass 1 — Interaction, Content Delivery & Visual Modernisation

### New files
- `src/components/StepCard.jsx` — Numbered step card component with vertical connector line and checklist list styling.
- `src/components/StepCard.css` — Styles for StepCard, including the `::after` connector and document-checklist `li` pattern.

### Modified files

| File | Change |
|------|--------|
| `src/components/Header.jsx` | Replaced `<button>` trigger with `<div className="dropbtn">` + `<span class="caret">▾</span>`; moved `dropdown-content` outside the trigger as a sibling so HTML is valid |
| `src/components/Header.css` | Renamed `.button` → `.dropbtn` (all occurrences); set `top: 60px; margin-top: 0` on `.dropdown-content` so panel sits flush to navbar; added `.caret` style |
| `src/components/index.js` | Exported `StepCard` |
| `src/components/peopleSuits.jsx` | Rewrote to use `--accentColor1/2` CSS variables; accent alternates by group index |
| `src/components/peopleSuits.module.css` | Replaced solid-fill boxes with white accent-bar cards (`border-left: 4px solid var(--accentColor)`); checkmark now uses accent colour |
| `src/components/prosCons.jsx` | Replaced `.pros-cons-title` with `.pros-cons-header`; removed inline `--backgroundColor` style |
| `src/components/prosCons.module.css` | Replaced solid-fill columns with white bordered cards; coloured header strip (green Pros / amber Cons); per-item ✓/✗ prefix via CSS `::before` |
| `src/components/SuggForm.css` | Changed form inputs to use `var(--color-text)` and `var(--color-border-strong)` so form is readable on both light and dark backgrounds; submit button now uses primary blue on hover |
| `src/app/COCApplication/page.jsx` | Replaced `DividerContent` with `StepCard` (accent `#0581c4`); added summary bar |
| `src/app/COCApplication/page.module.css` | Added `.appSummaryBar`, `.appSummaryItem`, `.appSummaryDot` |
| `src/app/UMCApplication/page.jsx` | Replaced `DividerContent` with `StepCard` (accent `#af292e`); added summary bar |
| `src/app/UMCApplication/page.module.css` | Same summary bar additions |
| `src/app/RedDeerApplication/page.jsx` | Replaced `DividerContent` with `StepCard` (accent `#053a6d`); added summary bar |
| `src/app/RedDeerApplication/page.module.css` | Same summary bar additions |
| `src/app/UsVisa/page.jsx` | Replaced `DividerContent` with `StepCard` (accent `#0581c4`) |
| `src/app/CanadaVisa/page.jsx` | Replaced `DividerContent` with `StepCard` (accent `#053a6d`) |
| `src/app/CocAcademic/page.module.css` | Replaced hardcoded `#1295d8` with `var(--color-primary)`; added transfer-tag hover; fixed `h3/h4` margin bleed; added full `.timeline` CSS block |
| `src/app/CocAcademic/page.jsx` | Replaced image-connector timeline with CSS timeline using inline data array |
| `src/app/AboutUs/page.jsx` | Full layout replacement: two-zone design (subtle hero + white body with credits grid + sticky form panel) |
| `src/app/AboutUs/page.module.css` | Full CSS replacement matching site light theme |

### Decisions

- **Header trigger `<div>` not `<button>`**: The original `<button>` wrapping a block `<div>` is invalid HTML and causes browser-specific layout quirks. A `<div role="button" tabIndex={0}>` is valid and sufficient since the open behaviour is pure CSS hover — no click handler needed.
- **`top: 60px` dropdown position**: Moving `dropdown-content` from inside the button to a sibling broke the old `top: 100%` anchor (which was relative to the button interior). Hard-coding `60px` (the exact navbar height) guarantees flush alignment regardless of button padding changes.
- **StepCard `--stepAccent` CSS variable**: Passed as inline style so each page can theme its own steps without creating separate CSS classes.
- **ProsCons position-based CSS**: `first-child`/`last-child` selectors replace the old `--backgroundColor` prop entirely. This means the component always renders exactly two panels and relies on DOM order, which matches all current usage.
- **SuggForm light-mode**: Rather than a conditional class or CSS variable detection, all form field colours were changed to explicit tokens that work on any background. The previous white-on-white rendering on the new About Us page was a complete blocker.
- **CocAcademic timeline data inlined**: The six timeline entries were moved from JSX markup into a data array rendered with `.map()` to eliminate the repetitive `<img Line.png />` connector pattern and keep the JSX maintainable.
