"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { Blur, PeopleSuits, ProsCons, NavStrip } from "../../components";
import { ClipboardList, GraduationCap, ShieldCheck, Home, Users, MessageCircle } from "lucide-react";

export default function COCPage() {
  const peopleSuitsData = [
    [
      "對航太工程領域有興趣，並計畫轉學至 UC 系統相關科系的學生",
      "堅定目標是赴美留學，非美國不去的學生",
      "有明確 UC 轉學目標的學生（如 UC Berkeley、UCLA 、UCSD等）",
    ],
    [
      "個性獨立、具有自我學習動力與時間管理能力的學生",
      "喜歡安靜環境、遠離城市喧囂的學生",
      "想要 Second Chance 的學生：\n高中 GPA 不夠漂亮，但仍渴望去美國留學\n大學新生申請未錄取理想學校，希望透過轉學重新出發",
    ],
  ];
  const prosConsData = [
    [
      "學費實惠，對國際學生較具負擔能力",
      "無需 SAT/ACT 或入學測驗，申請門檻低",
      "教授親切、教學認真，課後也樂於協助",
      "提供完善的轉學機會，可轉入UC/CSU等名校",
      "小班制教學，師生互動良好",
      "校園安全、生活環境單純，適合專注學習"
    ],
    [
      {
      title: "For specific major:",
      items: [
        "缺乏實用或進階內容，學習深度與挑戰性偏少",
        "一定要再自學"
      ]
    },
      "部分熱門科系轉學門檻較高",
      "社團/活動比4年制大學少",
      "校園與周邊娛樂選擇有限",
      "交通不便，生活幾乎必須有車",
      "校園文化與活動相對簡約，較少宿舍生活與社團參與的機會",
      "轉學後勢必需要搬家與重新適應環境",
      "難以找到學長姐提供經驗分享，轉學資源相對有限"
    ]
  ];
  const navItems = [
    { href: "/COCApplication", icon: <ClipboardList size={16} strokeWidth={2} />, title: "申請過程", description: "申請步驟與所需文件" },
    { href: "/CocAcademic", icon: <GraduationCap size={16} strokeWidth={2} />, title: "學業、轉學相關", description: "UC 轉學路徑與線上課程" },
    { href: "/UsVisa", icon: <ShieldCheck size={16} strokeWidth={2} />, title: "美國學生簽證", description: "F-1 學生簽證申請指南" },
    { href: "/CocLife", icon: <Home size={16} strokeWidth={2} />, title: "生活", description: "住宿、飲食與南加州日常生活" },
    { href: "/Seniors?section=COC", icon: <Users size={16} strokeWidth={2} />, title: "找學長姐", description: "聯絡曾就讀的學長姐取得第一手經驗" },
    { href: "/QandA", icon: <MessageCircle size={16} strokeWidth={2} />, title: "Common Q&A", description: "常見問題與解答" },
  ];

  return (
    <div className={styles.COCschooWrapper}>
      <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginTop: "var(--spacing-6)", alignSelf: "flex-start" }}>
        <Link href="/">首頁</Link>
        <span aria-hidden="true">›</span>
        <span className="breadcrumb-current">College of the Canyons</span>
      </nav>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-content"]}>
          <div className={styles["hero-text"]}>
            <span className={styles["hero-eyebrow"]}>惠文合作學校</span>
            <h1>College of the Canyons</h1>
            <p className={styles["hero-subtitle"]}>美國加州峽谷社區大學</p>
          </div>
          <Blur
            src="/COC/img_coc_logo.png"
            alt="COC Logo"
            className={styles["hero-logo"]}
          />
        </div>
      </section>
      <main className={styles["main-content"]}>
        <div className={styles["content-section"]}>
          <div className={styles["stats-callout"]}>
            <span className={styles["stats-chip"]}>加州 Santa Clarita</span>
            <span className={styles["stats-chip"]}>社區大學（2年制）</span>
            <span className={styles["stats-chip"]}>留學期間：高三起 2–3 年</span>
            <span className={styles["stats-chip"]}>學費：相對實惠</span>
          </div>
          <Blur
            src="/COC/img_coc_main_image.png"
            alt="College of the Canyons Campus"
            className={styles["main-image"]}
          />
          <p className={styles["description-text"]}>
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
          <div className={styles.divider} />
          <h2 className={styles["section-title"]}>
            誰適合College of the Canyons
          </h2>
          <PeopleSuits data={peopleSuitsData} color={["#0581c4"]} />
          <div className={styles.divider} />
          <h2 className={styles["section-title"]}>Pros and Cons</h2>
          <ProsCons data={prosConsData} color={["#0581c4"]}/>
        </div>
        <div className={styles.divider} />
      </main>
      <section className={styles["resources-section"]}>
        <h2 className={styles["section-title"]}>學費差異</h2>
        <img src="/COC/Tuitions.jpg" alt="COC Tuition Fees" id="Tuition-Fees" />
        <div className={styles.divider} />
        <h2 className={styles["section-title"]}>更多資訊</h2>
        <NavStrip items={navItems} />
      </section>
    </div>
  );
}
