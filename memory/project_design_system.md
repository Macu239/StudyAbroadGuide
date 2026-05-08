---
name: Wix Encyclopedia Design System Integration
description: Design system migration completed for StudyAbroadGuide — tokens, fonts, navbar, all 29 CSS files updated
type: project
---

The project completed a full Wix Encyclopedia Design System integration in May 2026. Key facts:
- All CSS custom properties (design tokens) are now in src/Global.css on :root
- Fonts: DM Sans (--font-sans, UI chrome) and Source Serif 4 (--font-body, long-form content) — loaded in src/app/layout.jsx via Google Fonts
- Previous fonts Raleway and Libre Baskerville are fully removed
- Header is now a light sticky navbar (position: sticky; top: 0; backdrop-filter: blur(8px)) — NOT dark anymore
- 29 CSS files updated total: Global.css, Header.css, Footer.css, all component CSS, all page module CSS
- School brand colors preserved: COC #0581c4, UMC #af292e, RedDeer #053a6d
- MIGRATION.md at project root documents every file and decision
- Why: CLAUDE.md project instruction mandates Wix Encyclopedia design system

**Why:** CLAUDE.md mandates this design system.
**How to apply:** When adding new CSS, always use var(--token-name) references from Global.css. Never hard-code colors, fonts, or spacing.
