'use client'
import "./SchoolMainPage.css";
import Link from "next/link";
import { Blur } from "../components";

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
          <h2 className="section-title">
            誰適合 Red Deer Catholic International
          </h2>
          <div className="peopleSuitsWrapper">
            <div className="COCpeopleSuitsGrind">
              <div className="peopleSuitsBox" id="RD">
                願意去嘗試參與各式活動的人
              </div>

              <div className="peopleSuitsBox" id="RD1">
                大學有意願繼續留在國外（加拿大或是其他國家）就讀的人
              </div>

              <div className="peopleSuitsBox" id="RD">
                希望降低升學壓力、想在較輕鬆的教育環境中學習的人
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
                具備一定抗壓性、能獨立面對孤單與文化差異的人（因為一個人在國外，氣候和環境可能會影響情緒，需要心理調適）
              </div>
            </div>
          </div>
          <div className="divider" />
          <h2 className="section-title">Pros and Cons</h2>
          <div className="pros-cons-row">
            <div className="ProsConsText" id="RD">
              <div className="pros-cons-title">Pros:</div>
              <ul className="pros-cons-list">
                <li>
                  體驗真正的加拿大高中生活
                  (因為這兩間學校都是加拿大的公立高中，氛圍比較接近電視劇裡的校園生活，白人比例約
                  60%)
                </li>
                <li>融入寄宿家庭（有機會遇見來自不同國家的家庭</li>
                <li>
                  獲得優異的在校成績有助於申請世界頂尖大學
                  (教學進度較慢，高三程度相當於台灣高一，因此亞洲學生常能取得不錯的成績)
                </li>
                <li>
                  體驗當地特色娛樂生活（滑雪、溜冰、冰上曲棍球、美式橄欖球、越野跑步）
                </li>
                <li>有很大機率可以看到極光</li>
                <li>
                  English 30-1的訓練可以很完整的培養學生以後大學的寫作能力
                </li>
                <li>語言能力提升快，全英語環境有助於口語和聽力</li>
                <li>學校有很多社團活動</li>
                <li>
                  因學校位置較偏僻，學生可以好好專心的上學讀書、有省考，鑑別度高
                </li>
                <li>教育重視討論與表達，能培養批判思考</li>
                <li>師生關係友善、互動較自由</li>
              </ul>
            </div>
            <div className="ProsConsText" id="RD1">
              <div className="pros-cons-title">Cons:</div>
              <ul className="pros-cons-list">
                <li>氣候嚴寒，冬天很長，日照也短。</li>
                <li>天氣較容易影響心情</li>
                <li>寄宿家庭的好壞取決於運氣</li>
                <li>不像大城市有百貨公司，只有小商場，周遭極少亞洲超市</li>
                <li>交通不方便 (只有公車，半小時一班)</li>
                <li>申請亞伯達省以外的大學學校較無法給學生協助</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider" />
      </main>
      <section className="resources-section">
        <h2 className="section-title">更多資訊</h2>

        <div className="resourcesGrid">
          <div className="extra-info-row">
            <div className="resource-card">
              <Link href="/RedDeerApplication">
                <img
                  src="/COC/img_application_1.png"
                  alt="Application Process"
                  className="resource-image"
                />
                <h3 className="resource-title">申請過程</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link href="/UMCAcademic">
                <img
                  src="/UMC/CanadaStudy.png"
                  alt="Canada Study"
                  className="resource-image"
                />
                <h3 className="resource-title">學業、轉學相關</h3>
              </Link>
            </div>

            <div className="resource-card">
              <Link href="/CanadaVisa">
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
              <Link href="/CanadaLife">
                <img
                  src="/UMC/CanadaLife.jpg"
                  alt="Canada Life"
                  className="resource-image"
                />
                <h3 className="resource-title">生活</h3>
              </Link>
            </div>
            <div className="resource-card">
              <Link href="/Seniors" state={{ openSection: "RedDeer" }}>
                <img
                  src="/COC/seniors.jpg"
                  alt="Find Seniors"
                  className="resource-image"
                />
                <h3 className="resource-title">找學長姐</h3>
              </Link>
            </div>
            <div className="resource-card">
              <Link href="/QandA" state={{ moveSection: "RedDeer" }}>
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
