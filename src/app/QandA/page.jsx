'use client'
import styles from "./page.module.css";
import { AccordionItem, BackToTopBotton } from "../../components";
import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  cocQuestions,
  umcQuestions,
  redDeerQuestions,
  usQuestions,
  canadaQuestions,
} from "../../components/QandAData.jsx";

function QandAContent() {
  const searchParams = useSearchParams();
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
    const target = searchParams.get("section");
    if (target && sectionRefs[target]) {
      scrollToSection(sectionRefs[target]);
    }
  }, [searchParams]);

  return (
    <div className={styles.QandAContainer}>
      <div className={`${styles.QandASideBar} SIDEBAR`}>
        <span className={styles.SideBarTitle}>問題主題/Topics</span>
        <ul>
          <li onClick={() => scrollToSection(cocRef)}>COC</li>
          <li onClick={() => scrollToSection(umcRef)}>UMC</li>
          <li onClick={() => scrollToSection(redDeerRef)}>Red Deer</li>
          <li onClick={() => scrollToSection(usaRef)}>USA/美國相關</li>
          <li onClick={() => scrollToSection(canadaRef)}>Canada/加拿大相關</li>
        </ul>
      </div>
      <div className={styles.QandA}>
        <h1 className={styles.QandATitle} ref={titleRef}>
          Common Questions For Study Abroad
        </h1>

        <div className={styles.expandToggle}>
          <span className={styles.expandToggleText} onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>

        <span className={styles.invisibleTitle} ref={cocRef}>
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

        <span className={styles.invisibleTitle} ref={umcRef}>
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

        <span className={styles.invisibleTitle} ref={redDeerRef}>
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

        <span className={styles.invisibleTitle} ref={usaRef}>
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

        <span className={styles.invisibleTitle} ref={canadaRef}>
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

        <div className={styles.expandToggle}>
          <span className={styles.expandToggleText} onClick={toggleExpandAll}>
            {expandAll ? "- Collapse All" : "+ Expand All"}
          </span>
        </div>
      </div>
      <BackToTopBotton titleRef={titleRef} />
    </div>
  );
}

export default function QandAPage() {
  return (
    <Suspense>
      <QandAContent />
    </Suspense>
  );
}
