# Refinement Pass 0 — UX & Information Delivery

You are a senior frontend designer. Refactor the presentation layer of this
Next.js study-abroad guide website. Touch only styles, markup structure, and
component presentational logic. Do NOT modify routing, data, state, or logic.

This site is a Taiwanese high-school study-abroad guide (惠文留學指南) covering
three destination programs: COC (California), UMC (Toronto), and Red Deer
(Alberta). Most visitors are students or parents deciding which program to choose.

Work through each task below in order. Commit nothing — just apply the changes.

---

## Task 1 — Fix the typo in the Header

File: `src/components/Header.jsx`

The nav label reads `"Red Dear"`. Change it to `"Red Deer"`.

---

## Task 2 — Redesign the school resource-link cards on intro pages

**Affected files:** `src/app/COC/page.jsx`, `src/app/UMC/page.jsx`,
`src/app/RedDeer/page.jsx`, `src/app/COC/page.module.css` (shared by all three).

### Problem
The "更多資訊" section currently renders two rows of three square image-cards.
The cards are only 18% wide, the images are generic stock photos (and several
are shared across all three schools), and there is no description text — users
cannot tell what they will find without clicking.

### Target design

Replace the two `extra-info-row` rows + square image cards with a single
**navigation strip** of full-width horizontal cards, one per destination link.
Each card spans the full container width and uses this layout:

```
┌──────────────────────────────────────────────────────────────────────┐
│  [Icon 40px]  Title (font-weight 600)                         →      │
│               Short description (color-text-secondary, text-sm)      │
└──────────────────────────────────────────────────────────────────────┘
```

- Icon: use an inline SVG or an emoji character that matches the topic (see
  mapping below). Render it inside a 40×40px circle with `background:
  var(--color-bg-muted)` and `border-radius: var(--radius-full)`.
- Title: `font-size: var(--text-base)`, `font-weight: 600`, `color:
  var(--color-text)`.
- Description: one short phrase (12 words max) in `color-text-secondary`.
- Arrow `→`: pushed right with `margin-left: auto`, `color:
  var(--color-text-tertiary)`, transitions to `var(--color-primary)` on hover.
- Card hover: `box-shadow: var(--shadow-sm)`, `border-color:
  var(--color-border-strong)`, arrow color → `var(--color-primary)`.
- Remove `.resource-image`, `.extra-info-row`, `.resourcesGrid` grid
  layout and replace with a single `.nav-strip` flex column with
  `gap: var(--spacing-3)`.

### Icon + description mapping per link

| href target        | Icon (emoji/SVG text) | Description (中文)                        |
|--------------------|-----------------------|-------------------------------------------|
| `*Application`     | 📋                    | 申請步驟與所需文件                          |
| `CocAcademic`      | 🎓                    | UC 轉學路徑與線上課程                       |
| `UMCAcademic`      | 🎓                    | 加拿大大學申請與升學規劃                    |
| `UsVisa`           | 🛂                    | F-1 學生簽證申請指南                        |
| `CanadaVisa`       | 🛂                    | 加拿大學生許可申請指南                      |
| `CocLife`          | 🏠                    | 住宿、飲食與南加州日常生活                  |
| `CanadaLife`       | 🏠                    | 住宿、飲食與加拿大日常生活                  |
| `Seniors`          | 👥                    | 聯絡曾就讀的學長姐取得第一手經驗            |
| `QandA`            | 💬                    | 常見問題與解答                              |

Build a reusable component `src/components/NavStrip.jsx` that accepts:

```js
// props
items: Array<{
  href: string,
  icon: string,          // emoji or short text
  title: string,
  description: string,
  external?: boolean,
}>
```

Replace the `resourcesGrid` JSX in all three school pages with `<NavStrip
items={...} />`.

Add styles for `.nav-strip`, `.nav-strip-card`, `.nav-strip-icon`,
`.nav-strip-body`, `.nav-strip-arrow` to `src/components/NavStrip.css`.
Import the CSS inside `NavStrip.jsx`.

Export `NavStrip` from `src/components/index.js`.

---

## Task 3 — Upgrade the homepage school selection cards

**File:** `src/app/page.jsx`, `src/app/page.module.css`

### Problem
The three `.box` cards show school name + subtitle + photo. There is no context
for why a student would choose one over another, and no location or program-type
indicator.

### Changes

1. Add a **country tag** above the school name using the `.tag` global class:
   - COC → `🇺🇸 美國 · 加州`
   - UMC → `🇨🇦 加拿大 · 多倫多`
   - Red Deer → `🇨🇦 加拿大 · 亞伯達`

2. Add a one-sentence **tagline** below the subtitle, before the image:
   - COC: `社區大學路徑，兩年後轉入 UC / CSU 頂尖大學`
   - UMC: `取得 OSSD 文憑，以本地生資格申請加拿大大學`
   - Red Deer: `體驗真實加拿大高中生活，融入公立學校環境`
   Style: `font-size: var(--text-sm)`, `color: var(--color-text-secondary)`,
   `line-height: 1.6`, `margin-bottom: var(--spacing-4)`.

3. Add a **"了解更多 →"** text link at the bottom of each card:
   `font-size: var(--text-sm)`, `color: var(--color-primary)`,
   `font-weight: 500`, `margin-top: var(--spacing-3) auto 0`.
   On card hover this link should gain `text-decoration: underline`.

4. Add `transition: transform 200ms ease` to `.box` and `transform:
   translateY(-2px)` on `.box:hover` for a subtle lift.

---

## Task 4 — Add breadcrumb navigation to school intro pages

**Affected files:** `src/app/COC/page.jsx`, `src/app/UMC/page.jsx`,
`src/app/RedDeer/page.jsx`.

Render a breadcrumb immediately inside the top-level wrapper div, before the
`hero-section`. Use the existing `.breadcrumb` and `.breadcrumb-current` global
CSS classes (already defined in `src/Global.css`):

```jsx
<nav className="breadcrumb" aria-label="Breadcrumb">
  <Link href="/">首頁</Link>
  <span aria-hidden="true">›</span>
  <span className="breadcrumb-current">College of the Canyons</span>  {/* adjust per page */}
</nav>
```

Add `margin-top: var(--spacing-6)` to the breadcrumb so it sits below the
sticky navbar with breathing room.

---

## Task 5 — Add a quick-stats callout to each school intro page

**Affected files:** `src/app/COC/page.jsx`, `src/app/UMC/page.jsx`,
`src/app/RedDeer/page.jsx`, `src/app/COC/page.module.css`.

Insert a compact stats row between the hero section and the main campus image.
Use the existing `.callout` global class as the container. Inside it, render
3–4 stat chips in a flex row:

```
┌────────────────────────────────────────────────────────────┐
│  📍 加州 Santa Clarita   🏫 社區大學   ⏱ 2 年   💰 學費較低 │
└────────────────────────────────────────────────────────────┘
```

Each chip: `display: inline-flex; align-items: center; gap: 4px;
font-size: var(--text-sm); color: var(--color-text-secondary);
font-weight: 500; padding: 0 var(--spacing-3); height: 28px;
border-radius: var(--radius-full); background: var(--color-bg);
border: 1px solid var(--color-border);`

Wrap chips in a flex row: `display: flex; flex-wrap: wrap; gap:
var(--spacing-2);`.

Stat values per school:

**COC**
- 📍 加州 Santa Clarita
- 🏫 社區大學（2年制）
- ⏱ 留學期間：高三起 2–3 年
- 💰 學費：相對實惠

**UMC**
- 📍 加拿大 多倫多
- 🏫 私立高中
- ⏱ 留學期間：高三 1 年
- 🎓 文憑：OSSD（安大略省）

**Red Deer**
- 📍 加拿大 亞伯達省
- 🏫 公立天主教高中
- ⏱ 留學期間：高三 1 年
- ❄️ 氣候：四季分明，冬季降雪

Add `.stats-callout` and `.stats-chip` to `src/app/COC/page.module.css`.

---

## Task 6 — Visual polish on PeopleSuits boxes

**File:** `src/components/peopleSuits.jsx`, `src/components/peopleSuits.module.css`

Currently the colored boxes contain plain text. Prepend a `✓` checkmark to
each item, rendered as a separate `<span>` with `font-weight: 700; margin-right:
var(--spacing-2); opacity: 0.85` so it stands out from the text without
overwhelming it. Do not alter the data structure or the `white-space: pre-line`
rule.

---

## Task 7 — ProsCons visual distinction

**File:** `src/components/prosCons.jsx`, `src/components/prosCons.module.css`

The Pros panel and Cons panel are both solid-color blocks. Make them easier to
scan at a glance:

1. In the `.pros-cons-title` for Pros (`index % 2 === 0`), prepend `✅ ` and
   for Cons prepend `⚠️ ` (add via JSX, not CSS content).
2. Add `letter-spacing: 0.02em` to `.pros-cons-list li` for slightly improved
   readability on the colored background.

---

## Task 8 — Improve the hero section visual hierarchy

**File:** `src/app/COC/page.module.css` (shared)

The hero currently has no visual separation from the rest of the page. Add:

```css
.hero-section {
  padding: var(--spacing-10) 0 var(--spacing-8);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-8);
}
```

Also give the hero text a stronger hierarchy — change `.hero-section h1` /
`h2` (the school title) to use `letter-spacing: -0.025em` and ensure there is
`margin: 0` on it (override the global `h2` `margin-top: 3rem`).

For the `.hero-subtitle`, change to `font-size: var(--text-base)` with an
uppercase label treatment: add above it a tiny eyebrow label:

```jsx
<span className={styles["hero-eyebrow"]}>惠文合作學校</span>
```

```css
.hero-eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  display: block;
  margin-bottom: var(--spacing-2);
}
```

---

## Task 9 — Footer: clarify the flag links

**File:** `src/components/Footer.jsx`, `src/components/Footer.css`

The three flags are clickable but there is no label — users cannot tell the
ROC flag is decorative while the US/Canada flags navigate to life guides.

1. Wrap each flag in a `<div>` or `<span>` that includes an `aria-label` and a
   visible text label below the flag:
   - ROC flag: `aria-label="台灣"`, label text `台灣`
   - US flag → `/CocLife`: `aria-label="美國生活指南"`, label `美國生活`
   - Canada flag → `/CanadaLife`: `aria-label="加拿大生活指南"`, label `加拿大生活`

2. Style the label: `font-size: var(--text-xs); color:
   var(--color-text-tertiary); margin-top: var(--spacing-1); text-align:
   center`.

3. Add `display: flex; flex-direction: column; align-items: center;` to the
   flag wrapper.

---

## Execution notes

- Validate that all changed files still compile (run `npm run build` or check
  for TypeScript / JSX errors).
- Do not extract design tokens to new variables — use the existing ones from
  `src/Global.css`.
- Do not add new pages, routes, or API calls.
- After finishing all tasks, note any conflicts or decisions in the existing
  `MIGRATION.md` file (append a new section `## Refinement Pass 0`).
