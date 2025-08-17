import "./SchoolMainPage.css";
import { Link } from "react-router-dom";

export default function COC() {
  return (
    <div className="COCschooWrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">College of the Canyons</h2>
            <p className="hero-subtitle">美國加州峽谷社區大學</p>
          </div>
          <img
            src="/COC/img_coc_logo.png"
            alt="COC Logo"
            className="hero-logo"
          />
        </div>
      </section>
      <main className="main-content">
        <div className="content-section">
          <img
            src="/COC/img_coc_main_image.png"
            alt="College of the Canyons Campus"
            className="main-image"
          />
          <p className="description-text">
            加州峽谷社區大學（College of the Canyons, 簡稱
            COC）隸屬於加州社區學院系統——全美規模最大的高等教育體系，擁有 116
            所經認證的學院，每年為超過 190
            萬名學生提供教育服務。該系統與多所加州大學（UC）設有轉學保證協議（TAG），包括
            UC Irvine、UC Santa Barbara、UC Davis、UC Riverside、UC Santa Cruz
            以及 UC Merced。雖然 UC Berkeley、UCLA、UC San Diego
            不在保證名單內，學生仍可透過榮譽計畫（如 TAP）獲得優先錄取考量。
            <br />
            <br />
            學生自高中三年級起修習線上課程，畢業後可無縫銜接
            COC，經約兩年完成社區大學課程後，即可申請以大三身份轉學進入 UC、CSU
            或其他頂尖學府（如 USC、University of Washington
            等），整體轉學率接近 100%。此路徑可於四年大學就讀期間節省高達新台幣
            250 萬以上學費，同時仍可獲得加州大學的正式畢業證書。
            <br />
            <br />
            COC 校區位於加州 Santa
            Clarita——全美十大最宜居城市之一，距離洛杉磯國際機場（LAX）約 1.5
            小時車程。當地居民以學生與退休族群為主，治安良好，生活環境安靜安全，極適合專注學習。
          </p>
          <div className="divider" />

          <div className="peopleSuitsWrapper">
            <h2 className="section-title">誰適合College of the Canyons</h2>
            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="COC">
                對航太工程領域有興趣，並計畫轉學至 UC 系統相關科系的學生
              </div>

              <div className="peopleSuitsBox" id="COC">
                堅定目標是赴美留學，非美國不去的學生
              </div>

              <div className="peopleSuitsBox" id="COC">
                有明確 UC 轉學目標的學生（如 UC Berkeley、UCLA 、UCSD等）
              </div>
            </div>

            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="COC">
                個性獨立、具有自我學習動力與時間管理能力的學生
              </div>

              <div className="peopleSuitsBox" id="COC">
                喜歡安靜環境、遠離城市喧囂的學生
              </div>

              <div className="peopleSuitsBox" id="COC">
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
          <div className="pros-cons-row">
            <div className="ProsConsText" id="COC">
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
            <div className="ProsConsText" id="COC">
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
      </main>
      <section className="resources-section">
        <h2 className="section-title">學費差異</h2>
        <img src="/COC/Tuitions.jpg" alt="COC Tuition Fees" id="Tuition-Fees" />
        <div className="divider" />
        <h2 className="section-title">更多資訊</h2>

        <div className="resources-grid">
          <div className="extra-info-row">
            <div className="resource-card">
              <Link to="/COCApplication">
                <img
                  src="/COC/img_application_1.png"
                  alt="Application Process"
                  className="resource-image"
                />
                <h3 className="resource-title">申請過程</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link to="/CocAcademic">
                <img
                  src="/COC/img_group_1_1.png"
                  alt="Academic Transfer"
                  className="resource-image"
                />
                <h3 className="resource-title">學業、轉學相關</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link to="/UsVisa">
                <img
                  src="/COC/img_image_10.png"
                  alt="Visa Information"
                  className="resource-image"
                />
                <h3 className="resource-title">美國學生簽證</h3>
              </Link>
            </div>
          </div>
          <div className="extra-info-row">
            <div className="resource-card">
              <Link to="/CocLife">
                <img
                  src="/COC/img_image_11.png"
                  alt="Campus Life"
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
