import React from "react";
import { Link } from "react-router-dom";
import "./SchoolMainPage.css";

export default function UMC() {
  return (
    <div className="COCschooWrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">UMC</h2>
            <p className="hero-subtitle">加拿大UMC高中 - 多倫多</p>
          </div>
          <img
            src="UMC/UMC logo.png"
            alt="COC Logo"
            className="hero-logo"
            id="UMCLogo"
            loading="lazy"
          />
        </div>
      </section>
      <main className="main-content">
        <div className="content-section">
          <img src="/UMC/UMC.jpg" alt="UMC Campus" className="main-image" />
          <p className="description-text">
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
          </p>
          <div className="divider" />

          <div className="peopleSuitsWrapper">
            <h2 className="section-title">誰適合UMC/加拿大</h2>
            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="UMC">
                可以跟自己獨處的學生
              </div>

              <div className="peopleSuitsBox" id="UMC">
                對加拿大升學有想法 / 想在加拿大工作上大學的學生
              </div>

              <div className="peopleSuitsBox" id="UMC">
                喜歡多元文化/跟大自然相處的學生
              </div>
            </div>

            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="UMC">
                有強烈上進心，想自主成長的學生
              </div>

              <div className="peopleSuitsBox" id="UMC">
                個性獨立、具有自我學習動力與時間管理能力的學生
              </div>

              <div className="peopleSuitsBox" id="UMC">
                喜歡發表意見、討論的學生
              </div>
            </div>
          </div>
          <div className="divider" />
          <h2 className="section-title">Pros and Cons</h2>

          <div className="pros-cons-row">
            <div className="ProsConsText" id="UMC">
              <div className="pros-cons-title">Pros:</div>
              <ul className="pros-cons-list">
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
            <div className="ProsConsText" id="UMC">
              <div className="pros-cons-title">Cons:</div>
              <ul className="pros-cons-list">
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
        <div className="divider" />
      </main>
      <section className="resources-section">
        <h2 className="section-title">更多資訊</h2>

        <div className="resources-grid">
          <div className="extra-info-row">
            <div className="resource-card">
              <Link to="/UMCApplication">
                <img
                  src="/COC/img_application_1.png"
                  alt="Application Process"
                  className="resource-image"
                />
                <h3 className="resource-title">申請過程</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link to="/UMCAcademic">
                <img
                  src="/UMC/CanadaStudy.png"
                  alt="Canada Study"
                  className="resource-image"
                />
                <h3 className="resource-title">學業、升學相關</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link to="/CanadaVisa">
                <img
                  src="/COC/img_image_10.png"
                  alt="Visa Information"
                  className="resource-image"
                />
                <h3 className="resource-title">加拿大學生簽證</h3>
              </Link>
            </div>
          </div>
          <div className="extra-info-row">
            <div className="resource-card">
              <Link to="/CanadaLife">
                <img
                  src="/UMC/CanadaLife.jpg"
                  alt="Canada Life"
                  className="resource-image"
                />
                <h3 className="resource-title">生活</h3>
              </Link>
            </div>
            <div className="resource-card">
              <Link to="/Seniors">
                <img
                  src="/COC/img_img_5504_1.png"
                  alt="Find Seniors"
                  className="resource-image"
                />
                <h3 className="resource-title">找學長姐</h3>
              </Link>
            </div>
            <div className="resource-card">
              <Link to="/QandA">
                <img
                  src="/COC/img_image_12.png"
                  alt="Q&A"
                  className="resource-image"
                />
                <h3 className="resource-title">Common Q&amp;A</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
