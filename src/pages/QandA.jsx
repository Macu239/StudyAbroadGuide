import "./QandA.css";
import { AccordionItem, BackToTopBotton } from "../components";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  cocQuestions,
  umcQuestions,
  redDeerQuestions,
  usQuestions,
  canadaQuestions,
} from "../components/QandAData.jsx";

function QandA() {
  const location = useLocation();
  const cocRef = useRef(null);
  const umcRef = useRef(null);
  const redDeerRef = useRef(null);
  const usaRef = useRef(null);
  const canadaRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRefs = {
    COC: cocRef,
    UMC: umcRef,
    RedDeer: redDeerRef,
  };

  const [expandAll, setExpandAll] = useState(false);
  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const target = location.state?.moveSection;
    if (target && sectionRefs[target]) {
      scrollToSection(sectionRefs[target]);
    }
  }, [location.state]);

  return (
    <div className="QandAContainer">
      <div className="QandASideBar SIDEBAR">
        <span className="SideBarTitle">問題主題/Topics</span>
        <ul>
          <li onClick={() => scrollToSection(cocRef)}>COC</li>
          <li onClick={() => scrollToSection(umcRef)}>UMC</li>
          <li onClick={() => scrollToSection(redDeerRef)}>Red Deer</li>
          <li onClick={() => scrollToSection(usaRef)}>USA/美國相關</li>
          <li onClick={() => scrollToSection(canadaRef)}>Canada/加拿大相關</li>
        </ul>
      </div>
      <div className="QandA">
        <h1 className="QandATitle" ref={titleRef}>
          Common Questions For Study Abroad
        </h1>

        <div className="expandToggle">
          <span className="expandToggleText" onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>

        <span className="invisibleTitle" ref={cocRef}>
          COC
        </span>

        {cocQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isExpanded={expandAll}
            link={item.link}
            linkText={item.linkText}
          />
        ))}

        <span className="invisibleTitle" ref={umcRef}>
          UMC
        </span>

        {umcQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isExpanded={expandAll}
          />
        ))}

        <span className="invisibleTitle" ref={redDeerRef}>
          Red Deer
        </span>

        {redDeerQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isExpanded={expandAll}
          />
        ))}

        <span className="invisibleTitle" ref={usaRef}>
          USA
        </span>

        {usQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isExpanded={expandAll}
          />
        ))}

        <span className="invisibleTitle" ref={canadaRef}>
          Canada
        </span>

        {canadaQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isExpanded={expandAll}
          />
        ))}

        <div className="expandToggle">
          <span className="expandToggleText" onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>
      </div>
      <BackToTopBotton titleRef={titleRef} />
    </div>
  );
}

export default QandA;
