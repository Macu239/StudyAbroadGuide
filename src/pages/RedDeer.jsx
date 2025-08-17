import "./SchoolMainPage.css";
import { Link } from "react-router-dom";
import {Blur} from "../components"

export default function RedDeer() {
  return (
    <div className="COCschooWrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Red Deer Catholic International</h2>
            <p className="hero-subtitle">加拿大紅鹿國際高中</p>
          </div>
          <Blur
            src="/RedDeer/RedDeerLogo.png"
            alt="RedDeer Logo"
            className="hero-logo"
          />
        </div>
      </section>
      <main className="main-content">
        <div className="content-section">
          <Blur
            src="/RedDeer/RedDeerHero.png"
            alt="RedDeer Campus"
            className="main-image"
          />
          <p className="description-text">
            紅鹿天主教學校是一個公共資助的學校，由選舉產生理事會管理。旗下共19所學校，
            共9,200名學生，學校位於Red Deer、Sylvan Lake、Rocky Mountain
            House、Innisfail和 Olds。
            該校有國際學生服務計畫，招收來自各國的學生。加拿大公立教育局非常歡迎惠文高中學生
            能同時修習亞伯達線上課程及直接前往對方學校就讀。
            <a
              href="https://drive.google.com/file/d/1TvaTNzE6uu7yx97LlvmTxKpBzP-vYQru/view"
              target="_Blank"
            >
              詳細資訊
            </a>
          </p>
          <div className="divider" />

          <div className="peopleSuitsWrapper">
            <h2 className="section-title">
              誰適合 Red Deer Catholic International
            </h2>
            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="RD">
                願意去嘗試參與各式活動的人
              </div>

              <div className="peopleSuitsBox" id="RD1">
                大學有意願繼續留在國外（加拿大或是其他國家）就讀的人
              </div>

              <div className="peopleSuitsBox" id="RD">
                可以適應長時間嚴寒溫度的人
              </div>
            </div>

            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="RD1">
                個性獨立、具有自我學習動力與時間管理能力的學生
              </div>

              <div className="peopleSuitsBox" id="RD">
                喜歡安靜環境、遠離城市喧囂的學生
              </div>

              <div className="peopleSuitsBox" id="RD1">
                喜歡多元文化/跟大自然相處的學生
              </div>
            </div>
          </div>
          <div className="divider" />
          <h2 className="section-title">Pros and Cons</h2>
          <div className="pros-cons-section">
            <div className="pros-cons-row">
              <div className="ProsConsText" id="RD">
                <div className="pros-cons-title">Pros:</div>
                <ul className="pros-cons-list">
                  <li>體驗真正的加拿大高中生活</li>
                  <li>融入寄宿家庭（有機會遇見來自不同國家的家庭</li>
                  <li>獲得優異的在校成績有助於申請世界頂尖大學</li>
                  <li>體驗當地娛樂生活（滑雪、溜冰、冰上曲棍球）</li>
                  <li>有很大機率可以看到極光</li>
                </ul>
              </div>
              <div className="ProsConsText" id="RD1">
                <div className="pros-cons-title">Cons:</div>
                <ul className="pros-cons-list">
                  <li>氣候嚴寒，冬天很長，日照也短。</li>
                  <li>寄宿家庭的好壞取決於運氣</li>
                  <li>不像大城市有百貨公司，只有小商場，也沒有亞洲超市。 只有小商場 也沒有亞洲超市</li>
                  <li>交通不方便 (只有公車，半小時一班)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider" />
          <h2 className="section-title">預先線上課程/雙聯學制</h2>
          <div className="RDOnlineClasses">高一二要同時上線上英文課程...</div>
        </div>
        <div className="divider" />
      </main>
      <section className="resources-section">
        <h2 className="section-title">更多資訊</h2>

        <div className="resources-grid">
          <div className="extra-info-row">
            <div className="resource-card">
              <Link to="/RedDeerApplication">
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
                <h3 className="resource-title">學業、轉學相關</h3>
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
