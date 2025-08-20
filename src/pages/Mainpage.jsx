import './Mainpage.css';
import { Link } from 'react-router-dom';
import {ImageCarousel,Blur} from '../components'
import {MainPageImgs} from '../components/CarouselImages'

export default function MainPage() {
  return (
    <div className='mainPageWrapper'>
      <div className="mainPageContent">
        
        <div className="mainIntro">

          <div id="introText">
            <h2>歡迎來到"傑洛米的Side Project"</h2>
            <p>這裡整理了惠文學生最常選擇出國留學的相關資訊，</p>
            <p>主要涵蓋 COC、UMC 以及 Red Deer，從申請流程、生活須知到未來升學方向等內容一應俱全。</p>
          </div>
          <ImageCarousel Slides={MainPageImgs} width='50%'/>
        </div>
        
        <div className="mainPagedivider" />

        <div className="schoolBoxes">

          <div className="box">
            <Link to="/COC" className="school_page_link">
              <h3>College of the Canyons</h3>
              <h4>美國加州峽谷社區大學</h4>
              <Blur
                src="/Mainpage/COC(Canyon-Country-Campus).jpg"
                alt="COC"
                className="school_pic"
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/UMC" className="school_page_link">
              <h3>UMC HighSchool</h3>
              <h4>加拿大UMC</h4>
              <Blur
                src="/Mainpage/UMC.jpg"
                alt="UMC"
                className="school_pic"
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/RedDeer" className="school_page_link">
              <h3>Red Deer Catholic Regional School</h3>
              <h4>加拿大紅鹿</h4>
              <Blur
                src="/Mainpage/Reddeer.jpg"
                alt="Reddeer"
                className="school_pic"
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}