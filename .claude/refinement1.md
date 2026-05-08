# Refinement Pass 1 — Interaction, Content Delivery & Visual Modernisation

You are a senior frontend engineer and designer. Apply the changes below to the
study-abroad guide. Touch only presentation: styles, markup structure, layout,
and light state logic. Do NOT modify routing, data exports, email-sending logic,
state management beyond what is explicitly described, or test files.

Work task by task. After all changes, append a `## Refinement Pass 1` section to
`MIGRATION.md`.

---

## Task 1 — Header: Fix dropdown gap and replace button with div

**Files:** `src/components/Header.jsx`, `src/components/Header.css`

### Problem
The current `<button>` wraps the `.dropdown-content` div as a child — this is
invalid HTML (a block-level element inside a `<button>`). It also causes the
dropdown panel to open with a gap below the button because `dropdown-content` is
positioned relative to the `<button>` origin rather than flush to the navbar
bottom. The trigger should remain CSS `:hover` — no click-toggle needed.

### Changes

**In `Header.jsx`:**

Replace the existing `.dropdown > button` structure with a `<div>` trigger.
The `dropdown-content` must be a **sibling** to the trigger, not a child of it.
Both live inside `.dropdown`:

```jsx
<div key={menu.label} className="dropdown">
  <div className="dropbtn" role="button" tabIndex={0}>
    {menu.label}
    <span className="caret" aria-hidden="true">▾</span>
  </div>
  <div className="dropdown-content">
    {menu.items.map((item) =>
      item.external ? (
        <a key={item.href} href={item.href} target="_blank" className="dropdown-link">
          {item.text}
        </a>
      ) : (
        <Link key={item.href} href={item.href} className="dropdown-link">
          {item.text}
        </Link>
      )
    )}
  </div>
</div>
```

**In `Header.css`:**

1. Rename all `.button` rules to `.dropbtn` (same styles, just new class name).
   Keep all existing values (height 60px, font, colour, hover colour, etc.).

2. Add the caret:
   ```css
   .caret { font-size: 0.65em; opacity: 0.55; margin-left: 3px; }
   ```

3. Fix the dropdown panel position so it sits flush under the navbar with no gap.
   The gap exists because `dropdown-content` was previously a child of the button
   and inherited its padding/margin context. Now that it is a sibling, set:

   ```css
   .dropdown-content {
     /* keep all existing rules, then override/add: */
     top: 60px;        /* exact navbar height — flush to the bottom edge */
     margin-top: 0;    /* remove the 4px gap */
   }
   ```

4. The hover trigger must target `.dropdown:hover .dropdown-content` — keep
   this rule exactly as-is. No JavaScript state needed.

5. On mobile (`max-width: 768px`), `.dropbtn` height should be `auto` with the
   same padding as the old `.button` mobile rule.

---

## Task 2 — Create a StepCard component to replace DividerContent on process pages

**New files:** `src/components/StepCard.jsx`, `src/components/StepCard.css`
**Export from:** `src/components/index.js`

### Why
`DividerContent` renders a number label + horizontal rule + plain text below. All
steps look identical regardless of importance, and there is no visual flow between
steps. It is used across six pages. We want a modern "numbered step" layout that
retains the same data shape (`order`, `title`, `content`).

### Design

```
┌─────────────────────────────────────────────────────────┐
│  ●─── Step number circle (40px)   Title (text-lg 600)   │
│  │                                                       │
│  │    Content area (text-base, font-body, secondary)    │
│  │                                                       │
└─────────────────────────────────────────────────────────┘
```

- Left-side connector: a vertical line (2px, `--color-border`) running from the
  circle downward, connecting to the next step. The last step has no line below.
  Implement using `::after` on `.step-card:not(:last-child)`.
- Number circle: 40×40px, `border-radius: 50%`, `background: var(--color-primary)`,
  `color: #fff`, `font-weight: 700`, `font-size: var(--text-sm)`. Use the Chinese
  numeral as-is (一, 二, 三…) — it fits perfectly in the circle.
- Title: `font-size: var(--text-lg); font-weight: 600; color: var(--color-text);
  margin-left: var(--spacing-4);`
- Content: `margin-left: calc(40px + var(--spacing-4) + var(--spacing-4));
  margin-top: var(--spacing-3); padding-bottom: var(--spacing-8);`
- Outer wrapper `.step-list`: `display: flex; flex-direction: column; width: 100%;`
- Each `.step-card`: `display: flex; flex-direction: column; position: relative;`
- Header row: `display: flex; align-items: center;`

Accept an optional `accent` prop (hex string) so pages can pass their school
colour. Default to `var(--color-primary)`. Apply it to the circle background.

**Props:** same as `DividerContent` — `{ order, title, content, accent?, last? }`

### Replace DividerContent with StepCard on these pages

| Page file | `accent` value |
|-----------|---------------|
| `src/app/COCApplication/page.jsx` | `#0581c4` |
| `src/app/UMCApplication/page.jsx` | `#af292e` |
| `src/app/RedDeerApplication/page.jsx` | `#053a6d` |
| `src/app/UsVisa/page.jsx` | `#0581c4` |
| `src/app/CanadaVisa/page.jsx` | `#053a6d` |

**Do not** replace DividerContent on `CocAcademic` — that page has mixed content
between steps and is handled separately in Task 4.

In each page, import `StepCard` from `../../components`, remove the `DividerContent`
import if no longer used, and replace every `<DividerContent ... />` with
`<StepCard ... accent="..." />`. Pass `last` prop to the final item in each array
map: `last={index === arr.length - 1}`.

Wrap the `.map()` in a `<div className="step-list">` instead of the plain wrapper.

### Document checklist variant

On the visa and application pages, the `content` for "documents required" steps
contains a raw `<ul>`. Style these lists inside StepCard's content zone:

```css
.step-card-content ul { list-style: none; padding-left: 0; }
.step-card-content li {
  display: flex; align-items: flex-start; gap: var(--spacing-2);
  padding: var(--spacing-2) 0;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--text-base);
}
.step-card-content li::before {
  content: '☐';
  color: var(--color-primary);
  font-size: 1.1em;
  flex-shrink: 0;
  margin-top: 1px;
}
.step-card-content li ul { padding-left: var(--spacing-6); margin-top: var(--spacing-2); }
.step-card-content li ul li::before { content: '·'; }
```

---

## Task 3 — Application page hero: add a progress summary bar

**Affected files:** `src/app/COCApplication/page.module.css`,
`src/app/UMCApplication/page.module.css`,
`src/app/RedDeerApplication/page.module.css`

Below the hero image and above `.cocAppText`, insert a compact summary bar in each
page JSX:

```jsx
<div className={styles.appSummaryBar}>
  <span className={styles.appSummaryItem}>📋 申請步驟</span>
  <span className={styles.appSummaryDot} aria-hidden="true">·</span>
  <span className={styles.appSummaryItem}>📁 所需文件</span>
  <span className={styles.appSummaryDot} aria-hidden="true">·</span>
  <span className={styles.appSummaryItem}>📅 重要截止日</span>
  <span className={styles.appSummaryDot} aria-hidden="true">·</span>
  <span className={styles.appSummaryItem}>⚠️ 注意事項</span>
</div>
```

Add to each page module CSS:

```css
.appSummaryBar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  width: 85%;
  max-width: 1280px;
  padding: var(--spacing-4) 0 var(--spacing-2);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-4);
}
.appSummaryItem {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
}
.appSummaryDot {
  color: var(--color-border-strong);
  font-size: var(--text-lg);
  line-height: 1;
}
```

---

## Task 4 — CocAcademic: Replace hardcoded colours + rebuild the transfer timeline

**File:** `src/app/CocAcademic/page.jsx`, `src/app/CocAcademic/page.module.css`

### 4a — Replace hardcoded `#1295d8`

In `page.module.css`, replace every `background-color: #1295d8` with
`background-color: var(--color-primary)`. There are two occurrences:
`.cocAcademicIconBox` and `.cocAcademicTransferTag`.

### 4b — Replace the `.cocAcademicTransferSchduleWrapper` image-connector timeline

Currently the timeline uses `<img src="/UCtransfer/Line.png" />` elements as
connectors. Replace the entire timeline block with a proper CSS vertical timeline.

#### CSS approach
Add to `page.module.css`:

```css
.timeline {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: var(--spacing-10);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-5);
  position: relative;
  padding-bottom: var(--spacing-8);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: var(--text-xs);
  flex-shrink: 0;
  z-index: 1;
  position: relative;
}

.timeline-body {
  flex: 1;
  padding-top: var(--spacing-2);
}

.timeline-period {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  margin-bottom: var(--spacing-1);
}

.timeline-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-2);
}

.timeline-text {
  font-size: var(--text-sm);
  line-height: 1.75;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  max-width: 72ch;
}

@media (max-width: 590px) {
  .timeline::before { left: 16px; }
  .timeline-dot { width: 32px; height: 32px; font-size: 0.6rem; }
}
```

#### JSX replacement

Replace the entire `<div className={styles.cocAcademicTransferSchduleWrapper}>
... </div>` block (which contains the six `.cocAcademicTransferContent` divs
interleaved with `<img ... Line.png />`) with:

```jsx
<div className={styles.timeline}>
  {[
    {
      num: "01",
      period: "高中畢業後的 8–12 月",
      title: "First Fall Semester",
      text: "與輔導老師（counselor）討論並規劃接下來兩年的課程安排，適應新環境，積極參加 ISP 舉辦的活動，認識來自世界各地的國際學生。參加社團活動，豐富履歷，並多方探索自己的興趣與可能性。",
    },
    {
      num: "02",
      period: "1–2 月",
      title: "Winter Session",
      text: "可以選擇修習線上課程並回台灣休息，或參加必須到校上課的課程以修得學分，滿足未來的先修條件（prerequisites）。這段期間也適合自學其他感興趣的領域，同時好好放鬆、充電。",
    },
    {
      num: "03",
      period: "2–6 月",
      title: "First Spring Semester",
      text: "專心上課、維持良好的 GPA，持續參加校內活動，開始了解 UC 轉學申請流程，並著手研究 Personal Insight Questions（個人陳述題目），為未來的申請做好準備。",
    },
    {
      num: "04",
      period: "7–11 月",
      title: "Second Fall Semester",
      text: "從 8 月初開始撰寫 UC 申請草稿，透過心智圖整理強項與專長，並結合活動經驗挑選最能展現特色的題目作答。一定要提早開始，9–10 月不斷請 Amy、Dr. J 及多人協助修改。同時維持良好 GPA（本學期約 12–14 學分）。",
    },
    {
      num: "05",
      period: "11–12 月",
      title: "Application Deadline",
      text: "申請截止日約在 12 月底，建議在截止日前一到兩天提交，除非最後一刻有非常重要的修改，否則不要拖到最後一刻。",
    },
    {
      num: "06",
      period: "隔年 4 月中起",
      title: "Offer Release",
      text: "大約從 4 月中旬開始，各校陸續發出錄取通知。根據往年經驗，UCI 通常最早發榜，UCLA 幾乎總是在最後一週公布結果。",
    },
  ].map((item) => (
    <div className={styles["timeline-item"]} key={item.num}>
      <div className={styles["timeline-dot"]}>{item.num}</div>
      <div className={styles["timeline-body"]}>
        <div className={styles["timeline-period"]}>{item.period}</div>
        <div className={styles["timeline-title"]}>{item.title}</div>
        <div className={styles["timeline-text"]}>{item.text}</div>
      </div>
    </div>
  ))}
</div>
```

### 4c — Improve the transfer-program cards (TAG, Honors, etc.)

The `.cocAcademicTransferContent` row layout (blue pill tag + text beside it)
works but the tag pill is a hardcoded blue block. After fixing the colour token
in 4a, also:
- Add `transition: box-shadow 200ms ease` to `.cocAcademicTransferTag`.
- On `.cocAcademicTransferContent:hover .cocAcademicTransferTag`: add
  `box-shadow: var(--shadow-sm)`.
- Ensure `.cocAcademicTransferTag h3, h4` have `margin: 0; padding: 0;` to remove
  the global `h3 { margin-top: 2rem }` bleed.

---

## Task 5 — Redesign PeopleSuits: from solid-fill blocks to accent-bar cards

**Files:** `src/components/peopleSuits.jsx`,
`src/components/peopleSuits.module.css`

### Problem
Each suitability item is a solid-colour filled box (school brand colour). The
grid looks like a spreadsheet. White text on saturated colour is hard to scan
for long Chinese sentences. The two-column alternating colour adds no meaning.

### New design

Replace the solid-fill pill boxes with **clean white cards** that carry a
left-side accent bar using the school colour:

```
┌─────────────────────────────────────────────────────┐
│ ▌  ✓  適合獨立、有自學動力與時間管理能力的學生          │
└─────────────────────────────────────────────────────┘
```

- Card: `background: var(--color-bg); border: 1px solid var(--color-border);
  border-left: 4px solid var(--accentColor); border-radius: var(--radius-md);
  padding: var(--spacing-4) var(--spacing-5); display: flex; align-items:
  flex-start; gap: var(--spacing-3);`
- Hover: `box-shadow: var(--shadow-sm); border-color: var(--color-border-strong);`
- Checkmark `✓`: `color: var(--accentColor); font-weight: 700; flex-shrink: 0;
  font-size: var(--text-lg); margin-top: 1px;`
- Text: `font-size: var(--text-sm); line-height: 1.7; color: var(--color-text);
  font-family: var(--font-sans); font-weight: 400;`

**CSS variable renaming:** the component currently injects `--backgroundColor1`
and `--backgroundColor2` via inline style. Change these to `--accentColor1` and
`--accentColor2` (update both the JSX and the CSS). The accent bar
`border-left-color` alternates: even-index group uses `--accentColor1`, odd
uses `--accentColor2`.

Grid layout: keep `peopleSuitsGrind` as `display: flex; flex-direction: column;
gap: var(--spacing-3); width: 100%;` — one card per row within each group. Remove
the horizontal `space-between` flex on the grid since cards are now full-width.

Remove `.SchoolTheme1` and `.SchoolTheme2` background-colour rules — they now only
control `border-left-color` via the CSS variable.

Update all three school pages to use the new variable names:
- `src/app/COC/page.jsx`: `color={["#0581c4"]}` stays as-is (already single-color)
- `src/app/UMC/page.jsx`: same
- `src/app/RedDeer/page.jsx`: `color={["#053a6d", "#12874d"]}` uses both

---

## Task 6 — Redesign ProsCons: from solid-fill columns to icon-list comparison

**Files:** `src/components/prosCons.jsx`,
`src/components/prosCons.module.css`

### Problem
Side-by-side solid-colour columns look like a draft wireframe. White text on a
heavily saturated background is hard to read for long list items. The two panels
compete visually with equal weight, making neither stand out.

### New design

Two-column comparison grid where each column is a card with:
- **White background** (`var(--color-bg)`)
- A **coloured header strip** at the top of the card only (not the whole card)
- Each list item as its own line with a coloured icon prefix

```
┌──────────────────────┐  ┌──────────────────────┐
│ ✅ PROS              │  │ ⚠️ CONS               │  ← header strip
│ ─────────────────    │  │ ─────────────────     │
│ ✓  Item one          │  │ ✗  Item one           │
│ ✓  Item two          │  │ ✗  Item two           │
│ ✓  Item three        │  │ ✗  Item three         │
└──────────────────────┘  └──────────────────────┘
```

#### CSS

```css
.pros-cons-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-6);
  width: 100%;
  align-items: start;
}

.ProsConsText {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 200ms ease;
}

.ProsConsText:hover {
  box-shadow: var(--shadow-md);
}

.pros-cons-header {
  padding: var(--spacing-4) var(--spacing-5);
  font-size: var(--text-base);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

/* Pros header: success green */
.ProsConsText:first-child .pros-cons-header {
  background: var(--color-success);
}
/* Cons header: warning amber */
.ProsConsText:last-child .pros-cons-header {
  background: var(--color-warning);
}

.pros-cons-list {
  list-style: none;
  padding: var(--spacing-3) 0;
  margin: 0;
}

.pros-cons-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-2) var(--spacing-5);
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-weight: 400;
  letter-spacing: 0.02em;
  border-bottom: 1px solid var(--color-border);
}

.pros-cons-list li:last-child {
  border-bottom: none;
}

.pros-cons-list li::before {
  flex-shrink: 0;
  font-size: 0.9em;
  margin-top: 3px;
}

.ProsConsText:first-child .pros-cons-list li::before {
  content: '✓';
  color: var(--color-success);
  font-weight: 700;
}

.ProsConsText:last-child .pros-cons-list li::before {
  content: '✗';
  color: var(--color-warning);
  font-weight: 700;
}

/* Nested sub-lists */
.pros-cons-list li ul {
  padding-left: var(--spacing-4);
  margin-top: var(--spacing-1);
  list-style: disc;
}

.pros-cons-list li ul li::before {
  display: none;
}

@media (max-width: 768px) {
  .pros-cons-row { grid-template-columns: 1fr; }
}
```

#### JSX change

In `prosCons.jsx`, replace the `.pros-cons-title` div with a new `.pros-cons-header`
div and remove the inline `color: var(--color-text-inverse)` on `.ProsConsText`
(no longer needed):

```jsx
<div className={styles.ProsConsText} key={index}>
  <div className={styles["pros-cons-header"]}>
    {index % 2 === 0 ? "✅ Pros" : "⚠️ Cons"}
  </div>
  <ul className={styles["pros-cons-list"]}>
    ...existing item rendering...
  </ul>
</div>
```

Remove the `style={{ "--backgroundColor1": ... }}` inline style from the wrapper
div (no longer needed — colours are hardcoded in CSS by position, not by prop).
The `color` prop can be kept in the JSX signature for now but ignored in the CSS.

---

## Task 7 — About Us page: Redesign to match site colour theme

**Files:** `src/app/AboutUs/page.jsx`, `src/app/AboutUs/page.module.css`,
`src/components/SuggForm.css`

### Problem
The entire About Us page uses `background-color: var(--color-text)` (#1A1A1A),
which is jarring in a site that is otherwise white. The credits and the
suggestion form have no visual relationship. The section heading is generic.

### Target layout

Split the page into two zones:

**Zone 1 — Hero / intro** (light background, full-width):
- `background: var(--color-bg-subtle)`
- Contains the `h1` + mission paragraph + a subtle decorative element (the school
  flag tags reused from the footer as `<span class="tag">` chips)
- Max-width 1280px container, `padding: var(--spacing-20) var(--spacing-6)`

**Zone 2 — Credits + form** (white, full-width):
- `background: var(--color-bg)`
- Two-column layout (credits left, form right) inside the max-width container
- `padding: var(--spacing-16) var(--spacing-6)`

#### Specific CSS changes

In `page.module.css`, replace the entire file content with:

```css
.AboutUsWrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: var(--font-sans);
}

/* ── Zone 1: Hero ── */
.AboutUsHero {
  background: var(--color-bg-subtle);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-20) var(--spacing-6);
}

.AboutUsHeroInner {
  max-width: 800px;
  margin: 0 auto;
}

.AboutUsHero h1 {
  font-size: var(--text-5xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: var(--spacing-6);
}

.AboutUsHero p {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 68ch;
  font-family: var(--font-body);
}

.AboutUsTags {
  display: flex;
  gap: var(--spacing-2);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-8);
}

/* ── Zone 2: Credits + Form ── */
.AboutUsBody {
  background: var(--color-bg);
  padding: var(--spacing-16) var(--spacing-6);
}

.AboutUsBodyInner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: var(--spacing-16);
  align-items: start;
}

.AboutUsText h3 {
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--spacing-6);
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-3);
}

.CreditSections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.CreditSection {
  padding: var(--spacing-5);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-bg-subtle);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.CreditSection:hover {
  box-shadow: var(--shadow-sm);
  border-color: var(--color-border-strong);
}

.CreditSection h4 {
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
  margin-top: 0;
}

.CreditSection p {
  margin: 4px 0;
  font-size: var(--text-base);
  color: var(--color-text);
  font-weight: 500;
  max-width: 100%;
}

#Jeremy .CreditSection h4 {
  color: var(--color-primary);
}

/* Form panel */
.AboutUsFormPanel {
  position: sticky;
  top: 80px;
}

.AboutUsFormPanel h3 {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-5);
  margin-top: 0;
}

@media (max-width: 1024px) {
  .AboutUsBodyInner { grid-template-columns: 1fr; }
  .AboutUsFormPanel { position: static; }
}

@media (max-width: 590px) {
  .AboutUsHero h1 { font-size: var(--text-4xl); }
  .AboutUsHero { padding: var(--spacing-12) var(--spacing-4); }
  .AboutUsBody { padding: var(--spacing-10) var(--spacing-4); }
}
```

#### JSX replacement

Replace the entire JSX return in `page.jsx` with:

```jsx
return (
  <div className={styles.AboutUsWrapper}>
    {/* Zone 1 — Hero */}
    <div className={styles.AboutUsHero}>
      <div className={styles.AboutUsHeroInner}>
        <div className={styles.AboutUsTags}>
          <span className="tag">🇹🇼 惠文高中</span>
          <span className="tag">🇺🇸 美國留學</span>
          <span className="tag">🇨🇦 加拿大留學</span>
        </div>
        <h1>About Us</h1>
        <p>
          我是20屆的國際班畢業生，我的目標是統整出惠文長久以來的美國和加拿大升學留學選項
          幫助學弟妹了解不同學校的特點、課程以及升學機會，並提供實用的建議、體驗，
          以便他們能夠選擇最適合他們的留學方式。
        </p>
      </div>
    </div>

    {/* Zone 2 — Credits + Form */}
    <div className={styles.AboutUsBody}>
      <div className={styles.AboutUsBodyInner}>
        {/* Credits */}
        <div className={styles.AboutUsText}>
          <h3>Credits</h3>
          <div className={styles.CreditSections}>
            <div className={styles.CreditSection} id="Jeremy">
              <h4>網站開發、架構</h4>
              <p>施維謙 / Jeremy</p>
            </div>
            <div className={styles.CreditSection}>
              <h4>資料、經驗提供</h4>
              <p>Samantha</p>
              <p>Iris</p>
              <p>Esther</p>
              <p>Minerva</p>
              <p>Ray</p>
              <p>Annie</p>
            </div>
            <div className={styles.CreditSection}>
              <h4>排版、美編建議</h4>
              <p>Alice</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={styles.AboutUsFormPanel}>
          <Suggestions
            color="var(--color-bg-subtle)"
            Width="100%"
            formTitle="想問什麼或有建議嗎？"
          />
        </div>
      </div>
    </div>
  </div>
);
```

#### SuggForm.css — light-mode variant

The form currently assumes a dark background (white text, white borders). When
rendered on a light background the text becomes invisible. Update `SuggForm.css`
to detect the background via the CSS variable `--formColor`:

Add these overrides after the existing rules:

```css
/* Light background variant: when --formColor is a light value */
.SuggestionForm[style*="bg"] input,
.SuggestionForm[style*="bg"] textarea {
  color: var(--color-text);
  border-bottom-color: var(--color-border-strong);
}
```

A more reliable approach: change the form's inputs to always use explicit colours
not inherited from the background. Update in `SuggForm.css`:

```css
.SuggestionForm input,
.SuggestionForm select,
.SuggestionForm textarea {
  /* replace the existing rule — add explicit color */
  color: var(--color-text);
  border-bottom: 1.5px solid var(--color-border-strong);
  background: transparent;
}

.SuggestionForm label {
  color: var(--color-text-secondary);
}

.SuggestionForm h3 {
  color: var(--color-text);
}

.SuggestionForm input[type="submit"] {
  color: var(--color-text);
  border-color: var(--color-border-strong);
  background-color: var(--color-bg-muted);
}

.SuggestionForm input[type="submit"]:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
```

---

## Execution order

1. Task 1 (Header dropdown)
2. Task 2 (StepCard component + replace on all five process pages)
3. Task 3 (Application summary bars)
4. Task 4 (CocAcademic colour fix + timeline rebuild)
5. Task 5 (PeopleSuits redesign)
6. Task 6 (ProsCons redesign)
7. Task 7 (About Us redesign)
8. Run `npm run build` — fix any compile errors before finishing.
9. Append `## Refinement Pass 1` to `MIGRATION.md`.
