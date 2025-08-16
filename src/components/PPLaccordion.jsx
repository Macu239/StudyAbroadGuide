import { useEffect, useState } from "react";
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
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/*contents section below*/}
      {isOpen && (
        <div className="accordionContentWrapper">
          {/*inputting datas below*/}
          {people.map((person, index) => (
            <div key={person.id || index} className="accordionContent">
              <div className="personalPic">{person.personalPic}</div>
              <div className="accordionText">
                <h2>{person.name}</h2>

                <h4>
                  {person.major}
                  <br />
                  {person.currentSchool}
                </h4>

                <span>{person.infos}</span>

                <br />

                {person.link && (
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accordionLink"
                  >
                    {person.linkText || "Linkedin Profile"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PPLaccordionItem;
