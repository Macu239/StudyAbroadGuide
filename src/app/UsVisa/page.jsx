'use client'
import styles from "./page.module.css";
import { StepCard, Blur } from "../../components";
import { usaVisaApplication } from "../../components/applicationsData.jsx";

export default function UsVisaPage() {
  return (
    <div className={styles.UsVisaContainer}>
      <div className={styles.usVisaHero}>
        <Blur
          src="/usaFlagBanner.jpg"
          alt="Hero Image"
          className={styles.Background}
        />
        <div className={styles['gradient-overlay']}></div>
        <Blur
          src="/USdepartmentOftheStateLogo.svg"
          alt="DepartmentOfState"
          id="DOSlogo"
        />
        <h1>F - 1 學生簽證申請準備</h1>
      </div>

      <div className={styles.UsVisaText}>
        <div className="step-list">
          {usaVisaApplication.map((item, index) => (
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
