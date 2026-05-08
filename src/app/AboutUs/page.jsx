'use client'
import styles from "./page.module.css";
import { Suggestions } from "../../components";

export default function AboutUs() {
  return (
    <div className={styles.AboutUsWrapper}>
      {/* Zone 1 — Hero */}
      <div className={styles.AboutUsHero}>
        <div className={styles.AboutUsHeroInner}>
          <div className={styles.AboutUsTags}>
            <span className="tag">🇹🇼 惠文高中</span>
            <span className="tag">🇺🇸 美國留學</span>
            <span className="tag">🇨🇦 加拿大留學</span>
          </div>
          <h1>About Us</h1>
          <p>
            我是20屆的國際班畢業生，我的目標是統整出惠文長久以來的美國和加拿大升學留學選項
            幫助學弟妹了解不同學校的特點、課程以及升學機會，並提供實用的建議、體驗，
            以便他們能夠選擇最適合他們的留學方式。
          </p>
        </div>
      </div>

      {/* Zone 2 — Credits + Form */}
      <div className={styles.AboutUsBody}>
        <div className={styles.AboutUsBodyInner}>
          {/* Credits */}
          <div className={styles.AboutUsText}>
            <h3>Credits</h3>
            <div className={styles.CreditSections}>
              <div className={styles.CreditSection}>
                <h4>網站開發、架構</h4>
                <p>施維謙 / Jeremy</p>
              </div>
              <div className={styles.CreditSection}>
                <h4>資料、經驗提供</h4>
                <p>Samantha</p>
                <p>Iris</p>
                <p>Esther</p>
                <p>Minerva</p>
                <p>Ray</p>
                <p>Annie</p>
              </div>
              <div className={styles.CreditSection}>
                <h4>排版、美編建議</h4>
                <p>Alice</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.AboutUsFormPanel}>
            <Suggestions
              color="var(--color-bg-subtle)"
              Width="100%"
              formTitle="想問什麼或有建議嗎？"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
