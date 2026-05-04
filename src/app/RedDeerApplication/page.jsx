'use client'
import styles from "./page.module.css";
import DividerContent from "../../components/dividerContent.jsx";
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
      <div className={styles.cocAppText}>
        {RDApplication.map((item, index) => (
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
