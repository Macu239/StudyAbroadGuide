import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="title_bar">
      <div className="websiteHeader">
        <Link to="/" id="logoLink">
          <img className="logo" src="/globeLogo.svg" alt="Logo" />
        </Link>

        <h1 id="Pagename">傑洛米好鬆餅</h1>
      </div>

      <div className="Schools">
        <div className="dropdown">
          {/*COC*/}
          <button className="button">
            COC
            <div className="dropdown-content">
              <Link to="/COC" className="dropdown-link">
                介紹網頁
              </Link>
              <a
                href="https://www.canyons.edu/"
                target="_blank"
                className="dropdown-link"
              >
                School Website
              </a>
              <Link to="/COCApplication" className="dropdown-link">
                申請流程
              </Link>
              <Link to="/UsVisa" className="dropdown-link">
                簽證
              </Link>
              <Link to="/CocAcademic" className="dropdown-link">
                UC轉學、線上課程
              </Link>
              <Link to="/Seniors" className="dropdown-link">
                找學長姊
              </Link>
              <Link to="/CocLife" className="dropdown-link">
                美國生活
              </Link>
            </div>
          </button>
        </div>
        <div className="dropdown">
          {/*UMC*/}
          <button className="button">
            UMC
            <div className="dropdown-content">
              <Link to="/UMC" className="dropdown-link">
                介紹網頁
              </Link>
              <a
                href="https://umchighschool.com/"
                target="_blank"
                className="dropdown-link"
              >
                School Website
              </a>
              <Link to="/UMCApplication" className="dropdown-link">
                申請流程
              </Link>
              <Link to="/CanadaVisa" className="dropdown-link">
                簽證
              </Link>
              <Link to="/UMCAcademic" className="dropdown-link">
                加拿大升學/大學申請
              </Link>
              <Link to="/Seniors" className="dropdown-link">
                找學長姊
              </Link>
              <Link to="/CanadaLife" className="dropdown-link">
                加拿大生活
              </Link>
            </div>
          </button>
        </div>
        <div className="dropdown">
          {/*RedDeer*/}
          <button className="button">
            Red Dear
            <div className="dropdown-content">
              <Link to="/RedDeer" className="dropdown-link">
                介紹網頁
              </Link>
              <a
                href="https://www.rdcrs.ca/"
                target="_blank"
                className="dropdown-link"
              >
                School Website
              </a>
              <Link to="/RedDeerApplication" className="dropdown-link">
                申請流程
              </Link>
              <Link to="/CanadaVisa" className="dropdown-link">
                簽證
              </Link>
              <Link to="/UMCAcademic" className="dropdown-link">
                加拿大升學/大學申請
              </Link>
              <Link to="/Seniors" className="dropdown-link">
                找學長姊
              </Link>
              <Link to="/CanadaLife" className="dropdown-link">
                加拿大生活
              </Link>
            </div>
          </button>
        </div>
        <div className="dropdown">
          {/*sth else*/}
          <button className="button">
            Other
            <div className="dropdown-content">
              <a
                href="https://www.instagram.com/ma0201cu/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                className="dropdown-link"
              >
                Contact ME
              </a>
              <Link to="/QandA" className="dropdown-link">
                Frequently Asked Questions
              </Link>
              <Link to="/AboutUs" className="dropdown-link">
                關於我們、意見箱
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
