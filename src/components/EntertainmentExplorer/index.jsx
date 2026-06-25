"use client";
import { useState } from "react";
import styles from "./index.module.css";

/**
 * @param {{ label: string, name: string, img: string, alt: string, href?: string }} props
 */
function EntertainmentCard({ label, name, img, alt, href }) {
  const inner = (
    <>
      <img src={img} alt={alt} className={styles.cardImage} loading="lazy" />
      <div className={styles.cardGradient} aria-hidden="true" />
      <div className={styles.cardMeta}>
        <span className={styles.cardTag}>{label}</span>
        <span className={styles.cardName}>{name}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        className={styles.card}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={`${styles.card} ${styles.cardStatic}`} aria-label={name}>
      {inner}
    </div>
  );
}

/**
 * @param {Object} props
 * @param {Array<{id: string, title: string, items: Array}>} props.sections
 */
export default function EntertainmentExplorer({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  const activeSection = sections.find((s) => s.id === activeId);

  return (
    <div className={styles.explorer}>
      <div className={styles.tabBar} role="tablist">
        {sections.map((section) => (
          <button
            key={section.id}
            id={`etab-${section.id}`}
            role="tab"
            aria-selected={section.id === activeId}
            aria-controls={`epanel-${section.id}`}
            className={`${styles.tab} ${section.id === activeId ? styles.tabActive : ""}`}
            onClick={() => setActiveId(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div
        id={`epanel-${activeId}`}
        role="tabpanel"
        aria-labelledby={`etab-${activeId}`}
        className={styles.grid}
      >
        {activeSection?.items.map((item) => (
          <EntertainmentCard key={item.alt} {...item} />
        ))}
      </div>
    </div>
  );
}
