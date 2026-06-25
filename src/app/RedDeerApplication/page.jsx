'use client'
import styles from "./page.module.css";
import { StepCard } from "../../components";
import { RDApplication } from "../../components/applicationsData.jsx";

export default function RedDeerApplicationPage() {
  return (
    <div className={styles.cocAppContainer}>
      <div className={styles.cocAppHero}>
        <img
          className={styles.cocAppBackground}
          src="/RedDeer/RedDeerApp.png"
          alt="RedDeer Campus"
        />
        <div className={styles.RDAppOverlay} />
        <div className={styles.cocAppTitle}>
          <img
            src="/RedDeer/RedDeerLogo2.png"
            alt="RedDeer Logo"
            className={styles.RDLogo}
          />
          <h1>RedDeer 申請準備</h1>
        </div>
      </div>
      <div className={styles.appSummaryBar}>
        <span className={styles.appSummaryItem}>申請步驟</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>所需文件</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>重要截止日</span>
        <span className={styles.appSummaryDot} aria-hidden="true">·</span>
        <span className={styles.appSummaryItem}>注意事項</span>
      </div>
      <div className={styles.cocAppText}>
        <div className="step-list">
          {RDApplication.map((item, index) => (
            <StepCard
              key={index}
              order={item.order}
              title={item.title}
              content={item.content}
              accent="#053a6d"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
