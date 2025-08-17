import "./SchoolMainPage.css";
import { Link } from "react-router-dom";

export default function RedDeer() {
  return (
    <div className="COCschooWrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Red Deer Catholic International</h2>
            <p className="hero-subtitle">加拿大紅鹿國際高中</p>
          </div>
          <img
            src="/RedDeer/RedDeerLogo.png"
            alt="RedDeer Logo"
            className="hero-logo"
          />
        </div>
      </section>
      <main className="main-content">
        <div className="content-section">
          <img
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
                對航太工程領域有興趣，並計畫轉學至 UC 系統相關科系的學生
              </div>

              <div className="peopleSuitsBox" id="RD1">
                堅定目標是赴美留學，非美國不去的學生
              </div>

              <div className="peopleSuitsBox" id="RD">
                有明確 UC 轉學目標的學生（如 UC Berkeley、UCLA 、UCSD等）
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
                想要 Second Chance 的學生：
                <br />
                高中 GPA 不夠漂亮，但仍渴望去美國留學
                <br />
                大學新生申請未錄取理想學校，希望透過轉學重新出發
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
                  <li>學費實惠，對國際學生較具負擔能力</li>
                  <li>無需 SAT/ACT 或入學測驗，申請門檻低</li>
                  <li>教授親切、教學認真，課後也樂於協助</li>
                  <li>提供完善的轉學機會，可轉入UC/CSU等名校</li>
                  <li>小班制教學，師生互動良好</li>
                  <li>校園安全、生活環境單純，適合專心讀書</li>
                  <li>
                    設有專業國際學生支援辦公室，提供生活、學業與簽證等多方面的專業協助
                  </li>
                  <li>提供免費完整的課業輔導與轉學諮詢資源</li>
                </ul>
              </div>
              <div className="ProsConsText" id="RD1">
                <div className="pros-cons-title">Cons:</div>
                <ul className="pros-cons-list">
                  <li>
                    <strong>For specific major:</strong>
                    <ul>
                      <li>缺乏實用或進階內容，學習深度與挑戰性偏少</li>
                      <li>一定要再自學</li>
                    </ul>
                  </li>
                  <li>部分熱門科系轉學門檻較高</li>
                  <li>社團/活動比4年制大學少</li>
                  <li>校園與周邊娛樂選擇有限</li>
                  <li>交通不便，生活幾乎必須有車</li>
                  <li>校園文化與活動相對簡約，較少宿舍生活與社團參與的機會</li>
                  <li>轉學後勢必需要搬家與重新適應環境</li>
                  <li>難以找到學長姐提供經驗分享，轉學資源相對有限</li>
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
