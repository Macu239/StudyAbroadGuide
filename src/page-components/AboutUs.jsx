'use client'
import "./AboutUs.css";
import Link from "next/link";
import { Suggestions } from "../components";

export default function AboutUs() {
  return (
    <div className="AboutUsWrapper">
      <div className="AboutUsContainer">
        <div className="AboutUsTitle">
          <h1>About Us</h1>
          <p>
            我是20屆的國際班畢業生，我的目標是統整出惠文長久以來的美國和加拿大升學留學選項幫助學弟妹了解不同學校的特點、課程以及升學機會，
            並提供實用的建議、體驗，以便他們能夠選擇最適合他們的留學方式。
          </p>
        </div>

        <div className="AboutUsText">
          <h3>Credits</h3>
          <div className="CreditSections">
            <div className="CreditSection" id="Jeremy">
              <h4>網站開發、架構</h4>
              <p>施維謙/ Jeremy</p>
            </div>

            <div className="CreditSection">
              <h4>資料、經驗提供</h4>
              <p>Samantha</p>
              <p>Iris</p>
              <p>Esther</p>
              <p>Minerva</p>
              <p>Ray</p>
              <p>Annie</p>
            </div>

            <div className="CreditSection">
              <h4>排版、美編建議</h4>
              <p>Alice</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

            {/*<div className="CreditSection">
                        <h4>資料、經驗提供</h4>
                        <p>Samantha</p>
                        <p>Iris</p>
                        <p>Esther</p>
                        <p>Minerva</p>
                    </div>*/}
          </div>
        </div>
      </div>
      <Suggestions color="#ffffff26" Width="30%" formTitle="想問什麼或有建議嗎？我們想聽！"/>
    </div>
  );
}
