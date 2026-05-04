'use client'
import styles from "./page.module.css";
import DividerContent from "../../components/dividerContent";
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
      <div className={styles.cocAppText}>
        {cocApplication.map((item, index) => (
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
