'use client'
import './COCApp.css';
import DividerContent from '../components/dividerContent';
import {cocApplication} from '../components/applicationsData.jsx'

export default function COCApp() {
  return (
    <div className='cocAppContainer'>
        <div className='cocAppHero'>
            <img className='cocAppBackground' src='/cocApplication/CCCHomepageImage.jpg' alt='COC Campus' />
            <div className='cocAppOverlay' />
            <div className='cocAppTitle'>
                <img src='/cocApplication/img_coc_logo.png' alt='COC Logo' className='cocLogo' />
                <h1>College of the Canyons 申請準備</h1>
             </div>
        </div>
        <div className='cocAppText'>
          {cocApplication.map((item,index)=>(
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