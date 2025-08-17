import "./Visa.css";
import { DividerContent, Blur } from "../components";
import { usaVisaApplication } from "../components/applicationsData.jsx";

export default function COCApp() {
  return (
    <div className="UsVisaContainer">
      <div class="usVisaHero">
        <Blur
          src="/usaFlagBanner.jpg"
          alt="Hero Image"
          className="Background"
        />
        <div class="gradient-overlay"></div>
        <Blur
          src="/USdepartmentOftheStateLogo.svg"
          alt="DepartmentOfState"
          id="DOSlogo"
        />
        <h1>F - 1 學生簽證申請準備</h1>
      </div>

      <div className="UsVisaText">
        {usaVisaApplication.map((item, index) => (
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
