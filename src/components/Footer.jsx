import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Header() {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div className="footer-text">
          <img src="/ROCflag.png" className="flags" />
          <Link to="/CocLife">
            <img src="/USAflag.png" className="flags" />
          </Link>
          <Link to="/CanadaLife">
            <img src="/Canadaflag.png" className="flags" />
          </Link>
        </div>

        <div className="footer-divider" />

        <div className="footer_menus">
          <ul className="footer_menu">
            <li>
              <Link to="/AboutUS">About Us</Link>
            </li>
            <li>
              <Link to="/QandA">FAQs</Link>
            </li>
            <li>Outer resources</li>
            <li>
              <a
                href="https://www.instagram.com/ma0201cu/?utm_source=ig_web_button_share_sheet"
                target="_Blank"
              >
                Contact Me
              </a>
            </li>
            <li>
              <Link to="/Seniors">Alumnis</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link to="/COC">College of the Canyons</Link>
            </li>
            <li>
              <Link to="/COCApplication">申請流程</Link>
            </li>
            <li>
              <Link to="/UsVisa">美國學生簽證</Link>
            </li>
            <li>
              <Link to="/CocAcademic">UC轉學</Link>
            </li>
            <li>
              <Link to="/CocLife">美國留學生活指南</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link to="/UMC">UMC</Link>
            </li>
            <li>
              <Link to="/UMCApplication">UMC申請流程</Link>
            </li>
            <li>
              <Link to="/CanadaVisa">加拿大學生簽證</Link>
            </li>
            <li>
              <Link to="/UMCAcademic">加拿大升學</Link>
            </li>
            <li>
              <Link to="/CanadaLife">加拿大留學生活指南</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link to="/RedDeer">Red Deer</Link>
            </li>
            <li>
              <Link to="/RedDeerApplication">Red Deer申請流程</Link>
            </li>
            <li>
              <Link to="/UMCAcademic">Red Deer升學</Link>
            </li>
          </ul>
        </div>
        <div className="footer-divider" />
      </div>
    </div>
  );
}
