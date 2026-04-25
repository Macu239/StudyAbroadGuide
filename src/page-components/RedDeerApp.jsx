'use client'
import "./RedDeerApp.css";
import DividerContent from "../components/dividerContent.jsx";
import { RDApplication } from "../components/applicationsData.jsx";

export default function RedDeerApp() {
  return (
    <div className="cocAppContainer">
      <div className="cocAppHero">
        <img
          className="cocAppBackground"
          src="/RedDeer/RedDeerApp.png"
          alt="COC Campus"
        />
        <div className="RDAppOverlay" />
        <div className="cocAppTitle">
          <img
            src="/RedDeer/RedDeerLogo2.png"
            alt="RedDeer Logo"
            className="RDLogo"
          />
          <h1>RedDeer 申請準備</h1>
        </div>
      </div>
      <div className="cocAppText">
        {RDApplication.map((item, index) => (
          <DividerContent
            key={index}
            order={item.order}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
