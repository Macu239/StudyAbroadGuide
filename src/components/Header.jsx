'use client'
import Link from "next/link";
import "./Header.css";

const menus = [
  {
    label: "COC",
    items: [
      { href: "/COC", text: "介紹網頁" },
      { href: "https://www.canyons.edu/", text: "School Website", external: true },
      { href: "/COCApplication", text: "申請流程" },
      { href: "/UsVisa", text: "簽證" },
      { href: "/CocAcademic", text: "UC轉學、線上課程" },
      { href: "/Seniors?section=COC", text: "找學長姊" },
      { href: "/CocLife", text: "美國生活" },
    ],
  },
  {
    label: "UMC",
    items: [
      { href: "/UMC", text: "介紹網頁" },
      { href: "https://umchighschool.com/", text: "School Website", external: true },
      { href: "/UMCApplication", text: "申請流程" },
      { href: "/CanadaVisa", text: "簽證" },
      { href: "/UMCAcademic", text: "加拿大升學/大學申請" },
      { href: "/Seniors?section=UMC", text: "找學長姊" },
      { href: "/CanadaLife", text: "加拿大生活" },
    ],
  },
  {
    label: "Red Dear",
    items: [
      { href: "/RedDeer", text: "介紹網頁" },
      { href: "https://www.rdcrs.ca/", text: "School Website", external: true },
      { href: "/RedDeerApplication", text: "申請流程" },
      { href: "/CanadaVisa", text: "簽證" },
      { href: "/UMCAcademic", text: "加拿大升學/大學申請" },
      { href: "/Seniors?section=RedDeer", text: "找學長姊" },
      { href: "/CanadaLife", text: "加拿大生活" },
    ],
  },
  {
    label: "Other",
    items: [
      {
        href: "https://www.instagram.com/ma0201cu/?utm_source=ig_web_button_share_sheet",
        text: "Contact ME",
        external: true,
      },
      { href: "/QandA", text: "Frequently Asked Questions" },
      { href: "/AboutUs", text: "關於我們、意見箱" },
    ],
  },
];

export default function Header() {
  return (
    <div className="title_bar">
      <div className="websiteHeader">
        <Link href="/" id="logoLink">
          <img className="logo" src="/globeLogo.svg" alt="Logo" />
        </Link>
        <h1 id="Pagename">傑洛米好鬆餅</h1>
      </div>

      <div className="Schools">
        {menus.map((menu) => (
          <div key={menu.label} className="dropdown">
            <button className="button">
              {menu.label}
              <div className="dropdown-content">
                {menu.items.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      className="dropdown-link"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} className="dropdown-link">
                      {item.text}
                    </Link>
                  )
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
