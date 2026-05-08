'use client'
import styles from "./page.module.css";
import { StepCard, Blur } from "../../components";
import { canadaVisaApplication } from "../../components/applicationsData.jsx";

export default function CanadaVisaPage() {
  return (
    <div className={styles.UsVisaContainer}>
      <div className={styles.usVisaHero}>
        <Blur src="/canadaFlagBanner.jpg" alt="Hero Image" className={styles.Background} loading="lazy"/>
        <div className={styles['gradient-overlay']}></div>
        <h1>加拿大學生簽證(Study permit)申請準備</h1>
      </div>

      <div className={styles.UsVisaText}>
        <div className="step-list">
          {canadaVisaApplication.map((item, index) => (
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
