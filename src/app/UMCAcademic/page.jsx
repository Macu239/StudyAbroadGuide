'use client'
import styles from "./page.module.css";
import DividerContent from "../../components/dividerContent";

export default function UMCAcademicPage() {
  return (
    <div className={styles.CaAcademicContainer}>
      <div className={styles.CaAcademicHero}>
        <img
          className={styles.CaAcademicBackground}
          src="/UMCAcademic/uoftHero.png"
          alt="COC Campus"
        />
        <h1 className={styles.CaAcademicTitle}>加拿大升學指南：課程、成績與規劃</h1>
      </div>
      <div className={styles.CaAcademicContents}>
        <DividerContent
          order="一"
          title="UMC課堂基本資訊"
          content="以下會介紹 UMC 的課堂制度與申請相關的重要資訊，包含如何提升申請競爭力、必要的準備工作，以及在加拿大上課時需注意的事項。
                    WAITING FOR MORE INFOS
                    成績採用百分制評分，平均分數 90 分以上被視為優異。"
        />

        <DividerContent
          order="二"
          title="升學重點"
          content="UMC - 申請加拿大大學時，假如你的目標放在多倫多,UBC等頂大及競爭的科系，成績建議維持在 94 分以上，課外活動和志工經驗也非常重要。
                    台灣的志工時數最多可以抵 20 小時。學校會提供部分資訊，但申請資料和流程需學生自行準備。
                    商科學生可以參加各類比賽，如金融競賽，提升競爭力。
                    資工、工程學系可以嘗試架構自己的專案、作品集。
                    加拿大大學主要參考高中 12 年級的成績，顧問會協助討論選校並推薦備用學校。
                    申請時需填寫至少三個志願，申請資料包含申請文書、課外活動、志工及社團等。像多倫多大學，三個學院須分開申請。 RedDeer-成績建議維持在 88 分以上"
        />

        <DividerContent order="三" title="學業相關" />

        <div className={styles.CaAcademicCardContainer}>
          <div className={styles.CaAcademiccard}>
            <div className={styles.CaAcademicIconBox}>
              <img
                src="/UCtransfer/consultant.png"
                alt="icon"
                className={styles.CaAcademicIcon}
              />
              <div className={styles.CaAcademicCardTitle}>Counselor</div>
              <div className={styles.CaAcademicCardsubtitle}>課程顧問</div>
            </div>
            <div className={styles.CaAcademicCardText}>
              <ul>
                <li>課程規劃與排課</li>
                <li>學分查詢與認證</li>
                <li>大學申請流程與規劃</li>
              </ul>
            </div>
          </div>
        </div>

        <DividerContent order="四" title="轉學完整時間規劃" />
        <div className={styles.UMCAcademicSchduleWrapper}>
          <div className={styles.CaAcademicTransferContent}>
            <div className={styles.CaAcademicTransferTag}>
              <h3>
                First Fall Semester <br />
              </h3>
              <h4>高三的第一個學期9月-12月</h4>
            </div>

            <div className={styles.CaAcademicTransferText}>
              Discuss students' future path with the counselors and students'
              parents. (which will affect your electives and your credits)
              <br />
              適應環境，參加活動，就是普通的校園生活，
              <strong>準備開始填寫志願</strong>
            </div>
          </div>

          <img
            className={styles.CaAcademicTransferLine}
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className={styles.CaAcademicTransferContent}>
            <div className={styles.CaAcademicTransferTag}>
              <h3>
                Winter Semester <br />
              </h3>
              <h4>1月 - 2月</h4>
            </div>

            <div className={styles.CaAcademicTransferText}>
              Application season. At the same time continue school and work.
              <br />
              <strong>
                During fall & winter: Volunteer, Extra-curricular…
              </strong>
            </div>
          </div>

          <img
            className={styles.CaAcademicTransferLine}
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className={styles.CaAcademicTransferContent}>
            <div className={styles.CaAcademicTransferTag}>
              <h3>
                Spring Semester <br />
              </h3>
              <h4>3月 - 6月</h4>
            </div>

            <div className={styles.CaAcademicTransferText}>
              Wait & complete your application (if you move on to the 2nd stage
              and have interviews…) Complete all credits and requirements After
              receiving the offer, accept Then youre good 👍
              <strong>
                *since the university looks at all grade 12 grades, you should
                not let go of any courses you are taking, till the end even you
                get an offer or send out applications
              </strong>
            </div>
          </div>

          <img
            className={styles.CaAcademicTransferLine}
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className={styles.CaAcademicTransferContent}>
            <div className={styles.CaAcademicTransferTag}>
              <h3>
                Fall Sem <br />
              </h3>
              <h4>隔年9月</h4>
            </div>

            <div className={styles.CaAcademicTransferText}>University begins</div>
          </div>
        </div>
      </div>
    </div>
  );
}
