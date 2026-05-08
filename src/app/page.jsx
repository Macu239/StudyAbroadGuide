'use client'
import styles from "./page.module.css";
import Link from "next/link";
import { ImageCarousel, Blur } from "../components";
import { MainPageImgs } from "../components/CarouselImages";

export default function Home() {
  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.mainPageContent}>
        <div className={styles.mainIntro}>
          <div id="introText">
            <h2>歡迎來到惠文留學指南By Jeremy</h2>
            <p>這裡整理了惠文學生最常選擇出國留學的相關資訊，</p>
            <p>
              主要涵蓋 COC、UMC 以及 Red
              Deer，從申請流程、生活須知到未來升學方向等內容一應俱全。
            </p>
          </div>
          <ImageCarousel Slides={MainPageImgs} width="50%" />
        </div>

        <div className={styles.mainPagedivider} />

        <div className={styles.schoolBoxes}>
          <div className={styles.box}>
            <Link href="/COC" className={styles.school_page_link}>
              <span className="tag" style={{ marginBottom: "var(--spacing-2)" }}>🇺🇸 美國 · 加州</span>
              <h3>College of the Canyons</h3>
              <h4>美國加州峽谷社區大學</h4>
              <p className={styles.school_tagline}>社區大學路徑，兩年後轉入 UC / CSU 頂尖大學</p>
              <Blur
                src="/Mainpage/COC(Canyon-Country-Campus).jpg"
                alt="COC"
                className={styles.school_pic}
              />
              <span className={styles.school_cta}>了解更多 →</span>
            </Link>
          </div>
          <div className={styles.boxLine} />
          <div className={styles.box}>
            <Link href="/UMC" className={styles.school_page_link}>
              <span className="tag" style={{ marginBottom: "var(--spacing-2)" }}>🇨🇦 加拿大 · 多倫多</span>
              <h3>UMC HighSchool</h3>
              <h4>加拿大UMC高中</h4>
              <p className={styles.school_tagline}>取得 OSSD 文憑，以本地生資格申請加拿大大學</p>
              <Blur src="/Mainpage/UMC.jpg" alt="UMC" className={styles.school_pic} />
              <span className={styles.school_cta}>了解更多 →</span>
            </Link>
          </div>
          <div className={styles.boxLine} />
          <div className={styles.box}>
            <Link href="/RedDeer" className={styles.school_page_link}>
              <span className="tag" style={{ marginBottom: "var(--spacing-2)" }}>🇨🇦 加拿大 · 亞伯達</span>
              <h3>Red Deer Catholic International</h3>
              <h4>加拿大紅鹿國際高中</h4>
              <p className={styles.school_tagline}>體驗真實加拿大高中生活，融入公立學校環境</p>
              <Blur
                src="/Mainpage/Reddeer.jpg"
                alt="Reddeer"
                className={styles.school_pic}
              />
              <span className={styles.school_cta}>了解更多 →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
