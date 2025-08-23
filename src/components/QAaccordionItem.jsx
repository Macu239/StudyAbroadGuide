import { useEffect, useState } from 'react';
import './QAaccordionItem.css';

function AccordionItem({ title, content, isExpanded,link,linkText }) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isExpanded);
    }, [isExpanded]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='accordion'>
            <div className='QAaccordionTitle' 
            onClick={handleToggle}
            >
                <h4>{title}</h4>
                <span className='arrow'>{isOpen? '▲' : '▼'}</span>
            </div>
            {isOpen && (
            <div className='QAaccordionContent'>
                <p>{content}</p>
                {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accordionLink"
                        >
                            {linkText || "Learn more"}
                        </a>
                )}
            </div>
            )}    
        </div>
    )
}
export default AccordionItem;