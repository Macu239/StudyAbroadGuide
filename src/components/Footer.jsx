'use client'
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div className="footer-text">
          <div className="flag-item">
            <img src="/ROCflag.png" className="flags" aria-label="台灣" />
            <span className="flag-label">台灣</span>
          </div>
          <Link href="/CocLife" aria-label="美國生活指南" className="flag-item">
            <img src="/USAflag.png" className="flags" />
            <span className="flag-label">美國生活</span>
          </Link>
          <Link href="/CanadaLife" aria-label="加拿大生活指南" className="flag-item">
            <img src="/Canadaflag.png" className="flags" />
            <span className="flag-label">加拿大生活</span>
          </Link>
        </div>

        <div className="footer-divider" />

        <div className="footer_menus">
          <ul className="footer_menu">
            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/QandA">FAQs</Link>
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
              <Link href="/Seniors">Alumnis</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link href="/COC">College of the Canyons</Link>
            </li>
            <li>
              <Link href="/COCApplication">申請流程</Link>
            </li>
            <li>
              <Link href="/UsVisa">美國學生簽證</Link>
            </li>
            <li>
              <Link href="/CocAcademic">UC轉學</Link>
            </li>
            <li>
              <Link href="/CocLife">美國留學生活指南</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link href="/UMC">UMC</Link>
            </li>
            <li>
              <Link href="/UMCApplication">UMC申請流程</Link>
            </li>
            <li>
              <Link href="/CanadaVisa">加拿大學生簽證</Link>
            </li>
            <li>
              <Link href="/UMCAcademic">加拿大升學</Link>
            </li>
            <li>
              <Link href="/CanadaLife">加拿大留學生活指南</Link>
            </li>
          </ul>

          <ul className="footer_menu">
            <li>
              <Link href="/RedDeer">Red Deer</Link>
            </li>
            <li>
              <Link href="/RedDeerApplication">Red Deer申請流程</Link>
            </li>
            <li>
              <Link href="/UMCAcademic">Red Deer升學</Link>
            </li>
          </ul>
        </div>
        <div className="footer-divider" />
      </div>
    </div>
  );
}
