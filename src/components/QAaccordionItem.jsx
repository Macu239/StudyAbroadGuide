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
            <div className='accordionTitle' 
            onClick={handleToggle}
            >
                <span>{title}</span>
                <span className='arrow'>{isOpen? '▲' : '▼'}</span>
            </div>
            {isOpen && (
            <div className='QAaccordionContent'>
                <span>{content}</span>
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