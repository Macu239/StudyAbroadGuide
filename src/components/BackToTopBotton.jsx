'use client'
import "./BackToTopBotton.css";

export default function BackToTopBotton() {
  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  };

  return (
    <div onClick={() => scrollToSection()} className="BackToTopBottonWrapper">
      <img src="/arrow.png" className="BackToTopBottonarrow" />
    </div>
  );
}
