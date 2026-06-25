'use client'
import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./PPLaccordion.css";

function PPLaccordionItem({ School, people, isExpanded, width = "875px" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="accordion"
      id="PPLaccordion"
      style={{ "--PPLaccordionWidth": width }}
    >
      <div className="accordionTitle" onClick={handleToggle}>
        <span>{School}</span>
        <span className="arrow">{isOpen ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}</span>
      </div>

      {/*contents section below*/}
      {isOpen && (
        <div className="accordionContentWrapper">
          {/*inputting datas below*/}
          {people.map((person, index) => (
            <div key={person.id || index} className="accordionContent">
              <img className="personalPic" src={person.personalPic ||"./Seniors/defaultimg.jpg"}></img>
              <div className="accordionText">
                <h2>{person.name}</h2>
                <div className="PplAccordionHeder">
                  <div className="PplAccordionHederLeft">
                    <h4>{person.major}</h4>
                    <h4>{person.currentSchool}</h4>
                  </div>
                  <div className="PplAccordionHederRight">
                    {person.email && <h4 id="Email">{person.email}</h4>}
                    {person.link && (
                      <a
                        href={person.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="PPLaccordionLink"
                      >
                        {person.linkText || "Linkedin Profile"}
                      </a>
                    )}
                  </div>
                </div>

                <p id="PersonalInfo">{person.infos}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PPLaccordionItem;
