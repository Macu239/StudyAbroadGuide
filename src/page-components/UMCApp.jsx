'use client'
import './UMCApp.css';
import DividerContent from '../components/dividerContent.jsx';
import {UMCApplication} from '../components/applicationsData.jsx'

export default function UMCApp() {
  return (
    <div className='cocAppContainer'>
        <div className='cocAppHero'>
            <img className='cocAppBackground' src='/UMC/UMCTorontoCampus.jpg' alt='COC Campus' />
            <div className='UMCAppOverlay' />
            <div className='cocAppTitle'>
                <img src='/UMC/UMC logo.png' alt='UMC Logo' className='UMCLogo' />
                <h1>UMC 申請準備</h1>
             </div>
        </div>
        <div className='cocAppText'>
          {UMCApplication.map((item,index)=>(
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