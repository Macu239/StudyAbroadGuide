import { PPLaccordionItem, BackToTopBotton, SeniorsForms } from "../components";
import "./Seniors.css";
import { CollegeOfTheCanyons, UMC, RedDeer } from "../components/PPLData";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Seniors() {
  const location = useLocation();
  const cocRef = useRef(null);
  const umcRef = useRef(null);
  const redDeerRef = useRef(null);
  const otherRef = useRef(null);
  const titleRef = useRef(null);
  const [highlightSchool, setHighlightSchool] = useState(null);
  const [expandAll, setExpandAll] = useState(false);
  const [expandedSchool, setExpandedSchool] = useState(null);
  /*Map */
  const sectionRefs = {
    COC: cocRef,
    UMC: umcRef,
    RedDeer: redDeerRef,
    Others: otherRef,
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    setExpandedSchool(null);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const target = location.state?.openSection;
    if (target && sectionRefs[target]) {
      setExpandedSchool(target);
      scrollToSection(sectionRefs[target]);
      setHighlightSchool(target);
      setTimeout(() => setHighlightSchool(null), 2000);
    }
  }, [location.state]);

  return (
    <div className="PPLContainer">
      <div className="PPLSideSection">
        <div className="seniorSideBar SIDEBAR">
          <span className="seniorSideBarTitle">學校/School</span>
          <ul>
            <li onClick={() => scrollToSection(cocRef)}>COC</li>
            <li onClick={() => scrollToSection(umcRef)}>UMC</li>
            <li onClick={() => scrollToSection(redDeerRef)}>Red Deer</li>
            <li onClick={() => scrollToSection(otherRef)}>其他國家/學校</li>
          </ul>
        </div>
        <SeniorsForms formTitle="If you are willing to be one of the Seniors" />
      </div>
      <div className="Seniorsarea">
        <h1 className="seniorTitle" ref={titleRef}>
          學長姐們
        </h1>

        <div className="expandToggle">
          <span className="expandToggleText" onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>

        <span className="invisibleTitle" ref={cocRef}>
          COC
        </span>
        <div
          className={`accordionWrapper ${
            highlightSchool === "COC" ? "highlight" : ""
          }`}
        >
          <PPLaccordionItem
            School="College of the Canyons"
            people={CollegeOfTheCanyons}
            isExpanded={expandAll || expandedSchool === "COC"}
            width="100%"
          />
        </div>

        <span className="invisibleTitle" ref={umcRef}>
          UMC
        </span>
        <div
          className={`accordionWrapper ${
            highlightSchool === "UMC" ? "highlight" : ""
          }`}
        >
          <PPLaccordionItem
            School="UMC"
            people={UMC}
            isExpanded={expandAll || expandedSchool === "UMC"}
            width="100%"
          />
        </div>

        <span className="invisibleTitle" ref={redDeerRef}>
          RedDeer
        </span>
        <div
          className={`accordionWrapper ${
            highlightSchool === "RedDeer" ? "highlight" : ""
          }`}
        >
          <PPLaccordionItem
            School="Red Deer"
            people={RedDeer}
            isExpanded={expandAll || expandedSchool === "RedDeer"}
            width="100%"
          />
        </div>

        <span className="invisibleTitle" ref={otherRef}>
          Others
        </span>

        <PPLaccordionItem
          School="其他學校/國家"
          people={[]}
          isExpanded={expandAll}
          width="100%"
        />

        <div className="expandToggle">
          <span className="expandToggleText" onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>
        <div className="PPLdivider" />
        {/*Cold Email */}
        <div className="PPLColdEmail">
          <h2 className="seniorTitle">Cold Email/聯繫學長姊Tips</h2>
          <div className="PPLColdEmailText">
            在北美，「Reach
            out」是一種常用來主動聯絡陌生人或不熟識學長姐的方式。
            <en>Cold Email</en> 就是指你透過電子郵件，
            主動且有禮貌地跟學長姊聯繫，請教問題或尋求指導。雖然雙方之前沒有認識，但透過誠懇簡短的信件，可以有效建立第一步聯繫。
            寫 Cold Email
            時，重點是說明你是誰、為什麼想聯繫、希望得到什麼幫助，並保持尊重和簡潔，這樣更容易獲得回覆。
            <br />
            <br />
            <en>Plus:</en> <strong>Coffee Chat</strong>{" "}
            是另一種非常實用的方式，會邀請對方抽空進行一段非正式的交談（可以是線上或線下），通常
            15–30 分鐘。建議事先準備好想問的問題，在輕鬆的聊天中，
            不僅能更深入地了解學長姐的經驗與背景，還能吸收寶貴的建議。透過這樣的互動，也能慢慢建立起人脈，
            將來在學業或職涯發展上都可能派上用場。
          </div>
          <div className="PPLColdEmailExampleWrapper">
            <h3 className="PPLColdEmailExampleTitle"> Cold Email Examples</h3>

            <div className="PPLColdEmailExampleText">
              範例 1：請教建議／尋求指導
              <br />
              主旨：想請教您關於[主題/領域]的經驗
              <br />
              您好，[前輩姓名]：
              <br />
              <br />
              我是[你的名字]，目前在[學校/工作單位]學習/工作，對您在[專案或領域]的經驗很感興趣，想向您學習。
              <br />
              不知您是否方便抽空聊聊或回覆幾封郵件？您的建議對我很有幫助！
              <br />
              <br />
              謝謝您，期待您的回覆。
              <br />
              祝好，
              <br />
              [你的名字]
            </div>

            <div className="PPLColdEmailExampleText">
              範例 2：詢問校園生活與申請心得
              <br />
              主旨：想請教您關於申請學校的經驗
              <br />
              您好，[學長姊姓名]，
              <br />
              <br />
              我是[你的名字]，目前就讀[年級]，正在準備申請[學校名稱]。想請教[學校名稱]的校園生活如何？以及申請過程中有哪些心得或建議可以分享？
              <br />
              若您方便抽空回覆，我會非常感激！
              <br />
              <br />
              祝您一切順利， <br />
              [你的名字]
            </div>

            <div className="PPLColdEmailExampleText">
              範例 3：詢問校園生活與申請心得英文版本
              <br />
              Subject：Questions About Your Experience with College Applications
              <br />
              Hi [Senior’s Name],
              <br />
              <br />
              I’m [Your Name], currently a [grade/year] student interested in
              applying to [school or college]. I found your contact information
              from Jeremy's website,and thought you might be a great person to
              ask.
              <br />
              Would you be open to answering a few questions about your
              experience? I’d really appreciate any advice or tips you could
              share.
              <br />
              Thank you so much for your time!
              <br />
              <br />
              Best regards,
              <br />
              [Your Name]
            </div>
          </div>
        </div>
      </div>
      <BackToTopBotton titleRef={titleRef} />
    </div>
  );
}
