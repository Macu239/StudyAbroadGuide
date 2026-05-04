'use client'
import styles from "./page.module.css";
import DividerContent from "../../components/dividerContent.jsx";
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
      <div className={styles.cocAppText}>
        {UMCApplication.map((item, index) => (
          <DividerContent
            key={index}
            order={item.order}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
