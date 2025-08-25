import "./UMCAcademic.css";
import DividerContent from "../components/dividerContent";

export default function UMCAcademicc() {
  return (
    <div className="CaAcademicContainer">
      <div className="CaAcademicHero">
        <img
          className="CaAcademicBackground"
          src="/UMCAcademic/uoftHero.png"
          alt="COC Campus"
        />
        <h1 className="CaAcademicTitle">加拿大升學指南：課程、成績與規劃</h1>
      </div>
      <div className="CaAcademicContents">
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

        <div className="CaAcademicCardContainer">
          <div className="CaAcademiccard">
            <div className="CaAcademicIconBox">
              <img
                src="/UCtransfer/consultant.png"
                alt="icon"
                className="CaAcademicIcon"
              />
              <div className="CaAcademicCardTitle">Counselor</div>
              <div className="CaAcademicCardsubtitle">課程顧問</div>
            </div>
            <div className="CaAcademicCardText">
              <ul>
                <li>課程規劃與排課</li>
                <li>學分查詢與認證</li>
                <li>大學申請流程與規劃</li>
              </ul>
            </div>
          </div>
        </div>

        <DividerContent order="四" title="升學、申請相關" />
        <div className="CaAcademicTransferContentWrapper">
          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <a
                href=" https://www.canyons.edu/academics/honors/index.php "
                target="_blank"
              >
                <h3>
                  Honors program <br />
                </h3>
                <h4>榮譽課程</h4>
              </a>
            </div>

            <div className="CaAcademicTransferText">
              TAP 計畫可申請 UCLA 優先轉學(特別競爭的科系差別不大) UC/CSU
              可轉學分滿 12 學分，GPA 達 3.25 畢業時若要獲得榮譽認證，需達 GPA
              3.5
            </div>
          </div>

          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <a
                href="https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-transfer/personal-insight-questions.html"
                target="_blank"
              >
                <h3>
                  Application& <br />
                </h3>
                <h4>Personal Insight Question</h4>
              </a>
            </div>

            <div className="CaAcademicTransferText">
              UC 轉學申請的兩大關鍵在於 Personal Insight Question（PIQ） 與
              Activity & Awards Section。PIQ
              總共需回答四題，其中一題為轉學生必答，其餘從七題中選三，
              題目涵蓋創造力、領導力、面對挑戰、社區服務等面向，每題最多 350
              字。建議盡可能在回答中展現個人優勢與特色，
              讓審查者看到申請者的整體潛力。至於 Activity & Awards
              Section，則需列出曾參與的志工、課外活動與獲獎紀錄，
              內容可在不失真情況下具體化、強化，凸顯自身經歷與貢獻，並且以數據佐證。
            </div>
          </div>

          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <h3>
                Clubs <br />
              </h3>
              <h4>社團</h4>
            </div>

            <div className="CaAcademicTransferText">
              參加社團活動不僅能豐富大學生活，還能提升履歷。COC
              有各式各樣的社團，從學術性質到興趣愛好應有盡有，
              參與社團活動可以建立人脈、提升領導力與團隊合作能力，並且在申請 UC
              時展現個人多元化的經歷。 其中
              <a
                href="https://www.canyons.edu/academics/nasa/nasa-hasp.php"
                target="_blank"
              >
                NASA HASP
              </a>
              和
              <a
                href="https://www.canyons.edu/academics/business/fbla/index.php"
                target="_blank"
              >
                FBLA
              </a>
              都是很棒的選擇，前者提供實際參與太空計畫的機會，後者則專注於商業領域的實踐與學習。
            </div>
          </div>
        </div>

        <DividerContent order="五" title="轉學完整時間規劃" />
        <div className="UMCAcademicSchduleWrapper">
          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <h3>
                First Fall Semester <br />
              </h3>
              <h4>高三的第一個學期9月-12月</h4>
            </div>

            <div className="CaAcademicTransferText">
              Discuss students’ future path with the counselors and students’
              parents. (which will affect your electives and your credits)
              <br />
              適應環境，參加活動，就是普通的校園生活，
              <strong>準備開始填寫志願</strong>
            </div>
          </div>

          <img
            className="CaAcademicTransferLine"
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <h3>
                Winter Semester <br />
              </h3>
              <h4>1月 - 2月</h4>
            </div>

            <div className="CaAcademicTransferText">
              Application season. At the same time continue school and work.
              <br />
              <strong>
                During fall & winter: Volunteer, Extra-curricular…
              </strong>
            </div>
          </div>

          <img
            className="CaAcademicTransferLine"
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <h3>
                Spring Semester <br />
              </h3>
              <h4>3月 - 6月</h4>
            </div>

            <div className="CaAcademicTransferText">
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
            className="CaAcademicTransferLine"
            src="/UCtransfer/Line.png"
            alt="Line"
          />

          <div className="CaAcademicTransferContent">
            <div className="CaAcademicTransferTag">
              <h3>
                Fall Sem <br />
              </h3>
              <h4>隔年9月</h4>
            </div>

            <div className="CaAcademicTransferText">University begins</div>
          </div>
        </div>
      </div>
    </div>
  );
}
