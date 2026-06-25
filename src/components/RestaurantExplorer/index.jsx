"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";

const FILTER_OPTIONS = [
  { label: "全部", value: "all" },
  { label: "速食連鎖", value: "fast" },
  { label: "附近好餐廳", value: "sit" },
];

/**
 * @param {Object} props
 * @param {import("./types").Restaurant} props.restaurant
 * @param {function} props.onOpen
 */
function RestaurantCard({ restaurant, onOpen }) {
  const { tag, name, price, img, alt } = restaurant;

  /** @param {React.KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  }

  return (
    <div
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`查看 ${name} 詳細資訊`}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
    >
      {img ? (
        <img
          src={img}
          alt={alt || name}
          className={styles.cardImage}
          loading="lazy"
          width="160"
          height="213"
        />
      ) : (
        <div className={styles.cardImagePlaceholder} aria-hidden="true" />
      )}
      <div className={styles.cardGradient} aria-hidden="true" />
      <div className={styles.cardMeta}>
        <span className={styles.cardTag}>{tag}</span>
        <span className={styles.cardName}>{name}</span>
      </div>
      {price && <span className={styles.cardPrice}>{price}</span>}
    </div>
  );
}

/**
 * @param {Object} props
 * @param {import("./types").Restaurant} props.restaurant
 * @param {function} props.onClose
 */
function RestaurantModal({ restaurant, onClose }) {
  const [mounted, setMounted] = useState(false);
  const { tag, name, price, img, alt, desc, recs } = restaurant;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    /** @param {KeyboardEvent} e */
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label="餐廳詳細資訊"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="關閉"
        >
          &#x2715;
        </button>

        <div className={styles.sheetHero}>
          {img ? (
            <img
              src={img}
              alt={alt || name}
              className={styles.sheetHeroImg}
              width="520"
              height="200"
            />
          ) : (
            <div className={styles.sheetHeroPlaceholder} aria-hidden="true" />
          )}
          <div className={styles.sheetHeroGradient} aria-hidden="true" />
          <div className={styles.sheetHeroMeta}>
            <span className={styles.sheetTag}>{tag}</span>
            <span className={styles.sheetName}>{name}</span>
          </div>
        </div>

        <div className={styles.sheetBody}>
          <div className={styles.dragHandle} aria-hidden="true" />
          {price && <span className={styles.sheetPrice}>{price}</span>}
          <span className={styles.sheetLabel}>介紹</span>
          <p className={styles.sheetDesc}>{desc}</p>
          {recs && recs.length > 0 && (
            <>
              <span className={styles.sheetLabel}>推薦點什麼</span>
              <div className={styles.recPills}>
                {recs.map((rec) => (
                  <span key={rec} className={styles.recPill}>
                    {rec}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/**
 * Interactive restaurant explorer with location tabs, filter pills, card grid, and modal detail sheet.
 * @param {Object} props
 * @param {import("./types").LocationGroup[]} props.locations
 */
export default function RestaurantExplorer({ locations }) {
  const [activeId, setActiveId] = useState(locations[0]?.id ?? "");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const activeLocation = locations.find((l) => l.id === activeId);
  const multiLocation = locations.length > 1;

  const items =
    activeLocation?.items.filter((item) => {
      if (!activeLocation.showFilter || activeFilter === "all") return true;
      return item.cat === activeFilter;
    }) ?? [];

  function handleLocationChange(id) {
    setActiveId(id);
    setActiveFilter("all");
  }

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <div className={styles.explorer}>
      {multiLocation && (
        <div className={styles.tabBar} role="tablist">
          {locations.map((loc) => (
            <button
              key={loc.id}
              id={`tab-${loc.id}`}
              role="tab"
              aria-selected={loc.id === activeId}
              aria-controls={`panel-${loc.id}`}
              className={`${styles.tab} ${loc.id === activeId ? styles.tabActive : ""}`}
              onClick={() => handleLocationChange(loc.id)}
            >
              {loc.label}
            </button>
          ))}
        </div>
      )}

      {activeLocation?.tipBanner && (
        <div className={styles.tipBanner}>{activeLocation.tipBanner}</div>
      )}

      <div className={styles.descRow}>
        <p className={styles.desc}>{activeLocation?.desc}</p>
        {activeLocation?.showFilter && (
          <div className={styles.filterPills}>
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.filterPill} ${activeFilter === opt.value ? styles.filterPillActive : ""}`}
                onClick={() => setActiveFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        {...(multiLocation
          ? {
              id: `panel-${activeId}`,
              role: "tabpanel",
              "aria-labelledby": `tab-${activeId}`,
            }
          : {})}
        className={styles.grid}
      >
        {items.map((item) => (
          <RestaurantCard
            key={item.name}
            restaurant={item}
            onOpen={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && <RestaurantModal restaurant={selected} onClose={handleClose} />}
    </div>
  );
}
