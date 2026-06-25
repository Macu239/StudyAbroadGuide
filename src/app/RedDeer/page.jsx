"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { Blur, PeopleSuits, ProsCons, NavStrip } from "../../components";
import { ClipboardList, GraduationCap, ShieldCheck, Home, Users, MessageCircle, Snowflake } from "lucide-react";

export default function RedDeerPage() {
  const peopleSuitsData = [
    [
      "願意去嘗試參與各式活動的人",
      "大學有意願繼續留在國外（加拿大或是其他國家）就讀的人",
      "希望降低升學壓力、想在較輕鬆的教育環境中學習的人",
    ],
    [
      "個性獨立、具有自我學習動力與時間管理能力的學生",
      "喜歡安靜環境、遠離城市喧囂的學生",
      "具備一定抗壓性、能獨立面對孤單與文化差異的人（因為一個人在國外，氣候和環境可能會影響情緒，需要心理調適）",
    ],
  ];

  const prosConsData = [
    [
      "體驗真正的加拿大高中生活 (因為這兩間學校都是加拿大的公立高中，氛圍比較接近電視劇裡的校園生活，白人比例約60%)",
      "融入寄宿家庭（有機會遇見來自不同國家的家庭）",
      "獲得優異的在校成績有助於申請世界頂尖大學",
      "（教學進度較慢，高三程度相當於台灣高一，因此亞洲學生常能取得不錯的成績）",
      "體驗當地特色娛樂生活（滑雪、溜冰、冰上曲棍球、美式橄欖球、越野跑步）",
      "有很大機率可以看到極光",
      "English 30-1的訓練可以很完整的培養學生以後大學的寫作能力",
      "語言能力提升快，全英語環境有助於口語和聽力",
      "學校有很多社團活動",
      "因學校位置較偏僻，學生可以好好專心的上學讀書、有省考，鑑別度高",
      "教育重視討論與表達，能培養批判思考",
      "師生關係友善、互動較自由",
    ],
    [
      "氣候嚴寒，冬天很長，日照也短。",
      "天氣較容易影響心情",
      "寄宿家庭的好壞取決於運氣",
      "不像大城市有百貨公司，只有小商場，周遭極少亞洲超市",
      "交通不方便 (只有公車，半小時一班)",
      "申請亞伯達省以外的大學學校較無法給學生協助",
    ],
  ];
  const colorList = ["#053a6d", "#12874d"];
  const navItems = [
    { href: "/RedDeerApplication", icon: <ClipboardList size={16} strokeWidth={2} />, title: "申請過程", description: "申請步驟與所需文件" },
    { href: "/UMCAcademic", icon: <GraduationCap size={16} strokeWidth={2} />, title: "學業、轉學相關", description: "加拿大大學申請與升學規劃" },
    { href: "/CanadaVisa", icon: <ShieldCheck size={16} strokeWidth={2} />, title: "加拿大學生簽證", description: "加拿大學生許可申請指南" },
    { href: "/CanadaLife", icon: <Home size={16} strokeWidth={2} />, title: "生活", description: "住宿、飲食與加拿大日常生活" },
    { href: "/Seniors?section=RedDeer", icon: <Users size={16} strokeWidth={2} />, title: "找學長姐", description: "聯絡曾就讀的學長姐取得第一手經驗" },
    { href: "/QandA", icon: <MessageCircle size={16} strokeWidth={2} />, title: "Common Q&A", description: "常見問題與解答" },
  ];

  return (
    <div className={styles.COCschooWrapper}>
      <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginTop: "var(--spacing-6)", alignSelf: "flex-start" }}>
        <Link href="/">首頁</Link>
        <span aria-hidden="true">›</span>
        <span className="breadcrumb-current">Red Deer Catholic International</span>
      </nav>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-content"]}>
          <div className={styles["hero-text"]}>
            <span className={styles["hero-eyebrow"]}>惠文合作學校</span>
            <h2>Red Deer Catholic International</h2>
            <p className={styles["hero-subtitle"]}>加拿大紅鹿國際高中</p>
          </div>
          <Blur
            src="/RedDeer/RedDeerLogo.png"
            alt="RedDeer Logo"
            className={styles["hero-logo"]}
          />
        </div>
      </section>
      <main className={styles["main-content"]}>
        <div className={styles["content-section"]}>
          <div className={styles["stats-callout"]}>
            <span className={styles["stats-chip"]}>加拿大 亞伯達省</span>
            <span className={styles["stats-chip"]}>公立天主教高中</span>
            <span className={styles["stats-chip"]}>留學期間：高三 1 年</span>
            <span className={styles["stats-chip"]}>氣候：四季分明，冬季降雪</span>
          </div>
          <Blur
            src="/RedDeer/RedDeerHero.png"
            alt="RedDeer Campus"
            className={styles["main-image"]}
          />
          <p className={styles["description-text"]}>
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
          <div className={styles.divider} />
          <h2 className={styles["section-title"]}>
            誰適合 Red Deer Catholic International
          </h2>
          <PeopleSuits data={peopleSuitsData} color={colorList} />
          <div className={styles.divider} />
          <h2 className={styles["section-title"]}>Pros and Cons</h2>
          <ProsCons data={prosConsData} color={colorList} />
        </div>
        <div className={styles.divider} />
      </main>
      <section className={styles["resources-section"]}>
        <h2 className={styles["section-title"]}>更多資訊</h2>
        <NavStrip items={navItems} />
      </section>
    </div>
  );
}
