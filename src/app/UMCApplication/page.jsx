'use client'
import styles from "./page.module.css";
import { StepCard } from "../../components";
import { UMCApplication } from "../../components/applicationsData.jsx";

export default function UMCApplicationPage() {
  return (
    <div className={styles.cocAppContainer}>
      <div className={styles.cocAppHero}>
        <img className={styles.cocAppBackground} src="/UMC/UMCTorontoCampus.jpg" alt="UMC Campus" />
        <div className={styles.UMCAppOverlay} />
        <div className={styles.cocAppTitle}>
          <img src="/UMC/UMC logo.png" alt="UMC Logo" className={styles.UMCLogo} />
          <h1>UMC 申請準備</h1>
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
          {UMCApplication.map((item, index) => (
            <StepCard
              key={index}
              order={item.order}
              title={item.title}
              content={item.content}
              accent="#af292e"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
