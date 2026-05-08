'use client'
import styles from "./page.module.css";
import { StepCard } from "../../components";
import { cocApplication } from "../../components/applicationsData.jsx";

export default function COCApplicationPage() {
  return (
    <div className={styles.cocAppContainer}>
      <div className={styles.cocAppHero}>
        <img className={styles.cocAppBackground} src="/cocApplication/CCCHomepageImage.jpg" alt="COC Campus" />
        <div className={styles.cocAppOverlay} />
        <div className={styles.cocAppTitle}>
          <img src="/cocApplication/img_coc_logo.png" alt="COC Logo" className={styles.cocLogo} />
          <h1>College of the Canyons 申請準備</h1>
        </div>
      </div>
      <div className={styles.appSummaryBar}>
        <span className={styles.appSummaryItem}>📋 申請步驟</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>📁 所需文件</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>📅 重要截止日</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>⚠️ 注意事項</span>
      </div>
      <div className={styles.cocAppText}>
        <div className="step-list">
          {cocApplication.map((item, index) => (
            <StepCard
              key={index}
              order={item.order}
              title={item.title}
              content={item.content}
              accent="#0581c4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
