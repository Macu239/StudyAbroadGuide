'use client'
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Blur, BackToTopBotton,PeopleSuits } from "../../components";

export default function UMCPage() {
  const peopleSuitsData = [
    ["可以跟自己獨處的學生", "對加拿大升學有想法 / 想在加拿大工作上大學的學生", "喜歡多元文化/跟大自然相處的學生"],
    ["有強烈上進心，想自主成長的學生", "個性獨立、具有自我學習動力與時間管理能力的學生", "喜歡發表意見、討論的學生"]
  ]
  return (
    <div className={styles.COCschooWrapper}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-text']}>
            <h2>UMC</h2>
            <p className={styles['hero-subtitle']}>加拿大UMC高中 - 多倫多</p>
          </div>
          <Blur
            src="UMC/UMC logo.png"
            alt="COC Logo"
            className={styles['hero-logo']}
            id="UMCLogo"
            loading="lazy"
          />
        </div>
      </section>
      <main className={styles['main-content']}>
        <div className={styles['content-section']}>
          <Blur
            src="/UMC/UMC.jpg"
            alt="UMC Campus"
            className={styles['main-image']}
            loading="lazy"
          />
          <p className={styles['description-text']}>
            UMC 高中為學生頒發安大略省教育局認可的學分，並提供大學預修課程及 AP
            課程， 以因應不同興趣與潛能的學生需求。惠文高中與 UMC 高中簽署了 2+1
            合作計畫，學生在高中第三年即可前往 UMC 高中學習，
            取得安大略省中學文憑（OSSD），為申請加拿大頂尖大學提供入學保障。
            <a
              href="https://drive.google.com/file/d/1GUIfLDYSjxZmSF1rBrgKnb9idRGQiiLG/view"
              target="_Blank"
            >
              詳細資訊
            </a>
            P.S. 由於澳洲大學對於加拿大私立高中文憑的政策改變，大學想藉由UMC申請<strong>澳洲大學</strong>要多交考慮、跟Daniel討論。
          </p>
          <div className={styles.divider} />
          <h2 className={styles['section-title']}>誰適合UMC/加拿大</h2>
          <PeopleSuits data={peopleSuitsData} color={["#af292e"]} />
          <div className={styles.divider} />
          <h2 className={styles['section-title']}>Pros and Cons</h2>

          <div className={styles['pros-cons-row']}>
            <div className={styles.ProsConsText} id="UMC">
              <div className={styles['pros-cons-title']}>Pros:</div>
              <ul className={styles['pros-cons-list']}>
                <li>體驗加拿大環境，換新的環境探索自我</li>
                <li>師資好，比較開放，更傾向跟學生討論，授課品質高</li>
                <li>
                  課程內容貼近個人興趣－類似大學輔導老師/以申請大學為目標的規劃
                </li>
                <li>課程選擇靈活/有辦法探索各式領域</li>
                <li>師生關係親近</li>
                <li>以本地生的資格申請大學，不用跟國際生競爭</li>
                <li>人數少，較易取得職位與參與機會，有利於申請資料準備</li>
                <li>
                  社交生活多樣化
                  <ul>
                    <li>建立更廣泛的交友圈</li>
                    <li>提前融入多元交流的環境</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles.ProsConsText} id="UMC">
              <div className={styles['pros-cons-title']}>Cons:</div>
              <ul className={styles['pros-cons-list']}>
                <li>相較於惠文，硬體資源相對匱乏</li>
                <li>台灣人與亞洲學生約佔60%，容易待在舒適圈。</li>
                <li>學生素質落差大，不少紈褲子弟</li>
                <li>校園與周邊娛樂選擇有限</li>
                <li>一天內天氣多變，感覺像是經歷四季，冬天會有雪。</li>
                <li>老師流動率高</li>
                <li>學餐品質起伏大</li>
                <li>沒有 AP IB課程</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </main>
      <section className={styles['resources-section']}>
        <h2 className={styles['section-title']}>更多資訊</h2>

        <div className={styles.resourcesGrid}>
          <div className={styles['extra-info-row']}>
            <div className={styles['resource-card']}>
              <Link href="/UMCApplication">
                <img
                  src="/COC/img_application_1.png"
                  alt="Application Process"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>申請過程</h3>
              </Link>
            </div>

            <div className={styles['resource-card']}>
              <Link href="/UMCAcademic">
                <img
                  src="/UMC/CanadaStudy.png"
                  alt="Canada Study"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>學業、升學相關</h3>
              </Link>
            </div>

            <div className={styles['resource-card']}>
              <Link href="/CanadaVisa">
                <img
                  src="/COC/img_image_10.png"
                  alt="Visa Information"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>加拿大學生簽證</h3>
              </Link>
            </div>
          </div>
          <div className={styles['extra-info-row']}>
            <div className={styles['resource-card']}>
              <Link href="/CanadaLife">
                <img
                  src="/UMC/CanadaLife.jpg"
                  alt="Canada Life"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>生活</h3>
              </Link>
            </div>
            <div className={styles['resource-card']}>
              <Link href="/Seniors" state={{ openSection: "UMC" }}>
                <img
                  src="/COC/seniors.jpg"
                  alt="Find Seniors"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>找學長姐</h3>
              </Link>
            </div>
            <div className={styles['resource-card']}>
              <Link href="/QandA" state={{ moveSection: "UMC" }}>
                <img
                  src="/COC/img_image_12.png"
                  alt="Q&A"
                  className={styles['resource-image']}
                  loading="lazy"
                />
                <h3 className={styles['resource-title']}>Common Q&amp;A</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BackToTopBotton />
    </div>
  );
}
