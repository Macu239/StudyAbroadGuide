import './CocAcademic.css'
import DividerContent from '../components/dividerContent';

export default function CocAcademicc(){

    return(
        <div className='cocAcademicContainer'>
            <div className='cocAcademicHero'>
                <img className='cocAcademicBackground' src='/UCtransfer/calGate2.jpg' alt='COC Campus' />
                <div className='cocAcademicTitle'>
                    <h1>UC轉學指南：課程、GPA與規劃</h1>
                </div>
            </div>
            <div className='cocAcademicContents'>
                <DividerContent order = "一" 
                title = "COC課堂基本資訊" 
                content = "以下會介紹 COC 的上課制度與轉學相關的重要資訊，包含能為申請加分的項目、必備的學習工具，以及在美國上課時必須了解的幾件事。COC 採小班制教學，每堂課約 30 人，規模與高中相近。成績評定使用 ABCDF 等級制，GPA 滿分為 4.0。每學期修習約 12 至 17 學分，大多數課程為 3 學分。" />
                
                <DividerContent 
                order="二"
                title ="轉學重點"
                content="首先維持穩定且優秀的 GPA(別拿C)，同時確保所修課程為 UC/CSU 可轉學分。
                    轉學生(我們)可透過 TAG 計畫保證轉入特定 UC（如 UCI、UCD、UCSB 等），但部分競爭科系如資工與電子工程不適用。
                    建議每學期諮詢一次Counselor規劃課程與申請時程。參加課外活動、進入 Honors Program、善用 TLC 學習中心跟Office Hour，
                    至於申請先去UC網站看過格式，徹底了解哪些是會作為評判標準的，Personal Insight Question是最重要section，轉學生總共要寫4題，
                    剛進COC就先去網站看題目，想辦法累積經歷來回答這些問題。"
                />

                <DividerContent order="三"title ="學業相關"/>

                <div className='cocAcademicCardContainer'>
                    <div className="cocAcademiccard">
                        <div className="cocAcademicIconBox">
                            <img src='/UCtransfer/consultant.png' alt="icon" className="cocAcademicIcon" />
                            <div className="cocAcademicCardTitle">Counselor <br/>(AJ、Amy)</div>
                            <div className="cocAcademicCardsubtitle">課程顧問</div>
                        </div>
                        <div className="cocAcademicCardText">
                            <ul>
                                <li>課程規劃與排課</li>
                                <li>學分查詢與認證</li>
                                <li>轉學流程與規劃</li>
                                <li>各類申請（畢業、轉學、榮譽計畫等）</li>
                                <li>每個學期要去找一次</li>
                                <li>可透過線上預約或 email 聯絡</li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="cocAcademiccard">
                        <div className="cocAcademicIconBox">
                            <img src='/UCtransfer/TLC.png' alt="icon" className="cocAcademicIcon" />
                            <div className="cocAcademicCardTitle">TLC</div>
                            <div className="cocAcademicCardsubtitle">The Learning Center</div>
                        </div>
                        <div className="cocAcademicCardText">
                             <ul>
                                <li>提供免費學習輔導、研討會</li>
                                <li>可以找到很專業地人幫你改、討論、檢查Essay</li>
                                <li>數學、物理、化學等理科直接問Chat GPT比較有效果 或直接去Office Hour找教授</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                
                <div className="cocAcademiccard">
                    <div className="cocAcademicIconBox">
                        <img src='/UCtransfer/OfficeHour.png' alt="icon" className="cocAcademicIcon" />
                        <div className="cocAcademicCardTitle">Office Hour</div>
                        <div className="cocAcademicCardsubtitle">課後討論</div>
                    </div>

                    <div className="cocAcademicCardText">
                        <ul>
                            <li>教授每週固定開放的時間，學生可以自由前往討論課程內容、詢問問題或請求協助</li>
                            <li>可以刷臉跟教授打好關係 - 以後要推薦信</li>
                            <li>問問題比課堂上輕鬆自在</li>
                            <li><strong>有空就去!!!</strong></li>
                        </ul>
                    </div>
                </div>

                <DividerContent order="四"title ="轉學相關"/>
                <div className='cocAcademicTransferContentWrapper'>
                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <a href='https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/uc-transfer-programs/transfer-admission-guarantee-tag.html'
                             target='_blank'>
                                <h3>TAG<br/></h3>
                                <h4>Transfer Admission Guarantee</h4>
                            </a>
                        </div>

                        <div className='cocAcademicTransferText'>
                            可保證轉入UCI、UCSB、UCD、UCR、UCM、UCSC
                            不適用競爭科系(各學校不同)如: Computer Science、Electronic Engineering…
                        </div>
                    </div>

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <a href=' https://www.canyons.edu/academics/honors/index.php ' 
                                target='_blank'>
                                <h3>Honors program <br/></h3>
                                <h4>榮譽課程</h4>
                            </a>
                        </div>

                        <div className='cocAcademicTransferText'>
                            TAP 計畫可申請 UCLA 優先轉學(特別競爭的科系差別不大)
                            UC/CSU 可轉學分滿 12 學分，GPA 達 3.25
                            畢業時若要獲得榮譽認證，需達 GPA 3.5 
                        </div>
                    </div>

                    <div className='cocAcademicTransferContent'>
                        
                        <div className='cocAcademicTransferTag'>
                            <a href='https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-transfer/personal-insight-questions.html' 
                                target='_blank'>
                                <h3>Application&<br/></h3>
                                <h4>Personal Insight Question</h4>
                            </a>
                        </div>

                        <div className='cocAcademicTransferText'>
                            UC 轉學申請的兩大關鍵在於 Personal Insight Question（PIQ） 
                            與 Activity & Awards Section。PIQ 總共需回答四題，其中一題為轉學生必答，其餘從七題中選三，
                            題目涵蓋創造力、領導力、面對挑戰、社區服務等面向，每題最多 350 字。建議盡可能在回答中展現個人優勢與特色，
                            讓審查者看到申請者的整體潛力。至於 Activity & Awards Section，則需列出曾參與的志工、課外活動與獲獎紀錄，
                            內容可在不失真情況下具體化、強化，凸顯自身經歷與貢獻，並且以數據佐證。
                        </div>
                    </div>

                    <div className='cocAcademicTransferContent'>
                        
                        <div className='cocAcademicTransferTag'>
                            <a href='https://assist.org/' 
                                target='_blank'>
                                <h3>Assist.org<br/></h3>
                                <h4>轉學學分</h4>
                            </a>
                        </div>

                        <div className='cocAcademicTransferText'>
                            查詢轉學學分可使用 Assist.org，這是加州官方認可的平台，用來確認社區大學課程是否符合 UC/CSU 系統的轉學要求。
                            只要輸入目前就讀的學校（如 COC）以及目標轉入的大學與科系，即可查看該科系的 Lower Division 課程需求、可轉學分及對應課程建議，
                            有助於精準規劃課程、避免修到不被承認的課。
                        </div>
                    </div>

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>Clubs<br/></h3>
                            <h4>社團</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            參加社團活動不僅能豐富大學生活，還能提升履歷。COC 有各式各樣的社團，從學術性質到興趣愛好應有盡有，
                            參與社團活動可以建立人脈、提升領導力與團隊合作能力，並且在申請 UC 時展現個人多元化的經歷。
                            其中<a href='https://www.canyons.edu/academics/nasa/nasa-hasp.php' target='_blank'>NASA HASP</a>
                            和<a href='https://www.canyons.edu/academics/business/fbla/index.php' target='_blank'>FBLA</a>都是很棒的選擇，前者提供實際參與太空計畫的機會，後者則專注於商業領域的實踐與學習。
                        </div>
                    </div>

                </div>

                <DividerContent order="五"title ="轉學完整時間規劃"/>
                <div className='cocAcademicTransferSchduleWrapper'>
                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>First Fall Semester<br/></h3>
                            <h4>高中畢業後的8月 - 12月</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            與輔導老師（counselor）討論並規劃接下來兩年的課程安排，適應新環境，積極參加ISP舉辦的活動，
                            認識來自世界各地的國際學生。參加社團活動，豐富履歷，並多方探索自己的興趣與可能性。
                        </div>
                    </div>

                    <img className='cocAcademicTransferLine' src='/UCtransfer/Line.png' alt='Line' />

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>Winter Session<br/></h3>
                            <h4>1月 - 2月</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            可以選擇修習線上課程並回台灣休息，或參加必須到校上課的課程以修得學分，滿足未來的先修條件（prerequisites）。
                            這段期間也適合自學其他感興趣的領域，同時好好放鬆、充電。
                        </div>
                    </div>

                    <img className='cocAcademicTransferLine' src='/UCtransfer/Line.png' alt='Line' />

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>First Spring Semester<br/></h3>
                            <h4>2月 - 6月</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            專心上課、維持良好的GPA，持續參加校內活動，開始了解UC轉學申請流程，並著手研究Personal Insight Questions（個人陳述題目），
                            為未來的申請做好準備。
                        </div>
                    </div>
                    
                    <img className='cocAcademicTransferLine' src='/UCtransfer/Line.png' alt='Line' />

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>Second Fall Semester<br/></h3>
                            <h4>7月 - 11月</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            從8月初開始撰寫UC申請的草稿，透過畫心智圖，整理自己的強項與專長，並結合過去參加活動的經驗，
                            挑選最能展現個人特色的題目來作答。一定要提早開始，9月至10月期間，不斷請Amy、Dr. J，以及越多願意給意見的人協助修改與給建議。
                            同時要持續維持良好GPA（這學期的課表應該要是最輕鬆的，約12到14學分）。P.S.如果在這段期間你感到痛苦、焦躁，覺得自己寫得不夠好，那代表你正走在對的路上！

                        </div>
                    </div>

                    <img className='cocAcademicTransferLine' src='/UCtransfer/Line.png' alt='Line' />

                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>Application Deadline<br/></h3>
                            <h4>11月/12月</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            申請截止日約在12月底，建議在截止日前一到兩天提交，除非最後一刻有非常重要的內容需要修改，否則不要拖到最後一刻。
                        </div>
                    </div>

                    <img className='cocAcademicTransferLine' src='/UCtransfer/Line.png' alt='Line' />
                    
                    <div className='cocAcademicTransferContent'>
                        <div className='cocAcademicTransferTag'>
                            <h3>offer release<br/></h3>
                            <h4>隔年4月中開始</h4>
                        </div>

                        <div className='cocAcademicTransferText'>
                            大約從4月中旬開始，各校會陸續發出錄取通知。根據往年經驗，UCI通常最早發榜，而UCLA幾乎總是在最後一週才公布結果。
                        </div>
                    </div>
                </div>

                <DividerContent order="六"title ="很好用的資源!"/>
                <div className='cocAcademicExtraSourcesWeapper'>

                    <div className='cocAcademicExtraSourceCard'>
                        <a href="https://docs.google.com/presentation/d/1v22vKciJu_YPj59gESPB3wkFJgER2mwMowQZ3ekCtW8/mobilepresent?slide=id.p" target="_blank">
                            <h3>Guide To UC Transfer</h3>
                            <h4>這是我申請時參考的PIQ指南，裡面有更加詳細的介紹，以及對於每題PIQ的分析</h4>
                        </a>
                    </div>
                    
                    <div className='cocAcademicExtraSourceCard'>
                        <a href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/" target="_blank">
                            <h3>UC Transfer Official Page</h3>
                            <h4>這是UC的官方網站，裡面包含PIQ、時程表、Tools、更加詳細的規定介紹</h4>
                        </a>
                    </div>
                    
                    <div className='cocAcademicExtraSourceCard'>
                        <a href="https://docs.google.com/document/d/18QPr42JezI-18sMr85luRzfqXIPGpn-c/edit?usp=sharing&ouid=114718329374651375831&rtpof=true&sd=true" target="_blank">
                            <h3>UC Personal Insight Question Example</h3>
                            <h4>這是我PIQ的最終版本，可以參考看看</h4>
                        </a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}