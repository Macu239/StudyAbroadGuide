import './Visa.css';
import {DividerContent,Blur} from '../components';
import {canadaVisaApplication} from '../components/applicationsData.jsx'

export default function COCApp() {
  return (
    <div className='UsVisaContainer'>
      <div class="usVisaHero">
        <Blur src="/canadaFlagBanner.jpg" alt="Hero Image" className='Background' loading="lazy"/>
        <div class="gradient-overlay"></div>
        <h1>加拿大學生簽證(Study permit)申請準備</h1>
      </div>
      
      <div className='UsVisaText'>
        {canadaVisaApplication.map((item,index)=>(
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