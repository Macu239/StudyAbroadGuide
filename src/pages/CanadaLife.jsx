import "./CanadaLife.css";
import { BackToTopBotton } from "../components";
import { useRef } from "react";

export default function CocLife() {
  const cocLifeRef = useRef(null);
  const socialLifeRef = useRef(null);
  const telephoneRef = useRef(null);
  const bankRef = useRef(null);
  const housingRef = useRef(null);
  const transportationRef = useRef(null);
  const weatherRef = useRef(null);
  const shoppingRef = useRef(null);
  const restaurantRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cocLifeContainer">
      <div className="cocLifeSideBar">
        <span className="cocLifeSideBarTitle">問題主題/Topics</span>
        <ul>
          <li onClick={() => scrollToSection(socialLifeRef)}>社交生活</li>
          <li onClick={() => scrollToSection(telephoneRef)}>電信公司/手機</li>
          <li onClick={() => scrollToSection(bankRef)}>銀行/簽帳卡/信用卡</li>
          <li onClick={() => scrollToSection(housingRef)}>住宿/房子</li>
          <li onClick={() => scrollToSection(transportationRef)}>交通</li>
          <li onClick={() => scrollToSection(weatherRef)}>天氣/衣物</li>
          <li onClick={() => scrollToSection(shoppingRef)}>購物/超市</li>
          <li onClick={() => scrollToSection(restaurantRef)}>餐廳/飲食</li>
        </ul>
      </div>
      <div className="cocLifeContentWrapper">
        <div className="cocLifeTitle" ref={cocLifeRef}>
          加拿大留學生活 - UMC/RedDeer
        </div>
        <div className="cocLifeContents">
          {/*Social Life, Small Talk*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={socialLifeRef}>
              <h2>社交生活</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <h4>
              在北美，Small Talk是日常生活中很重要的一部分，
              特別是在學校、宿舍、社交場合甚至超市。它是一種沒有目的性、隨興的對話方式，
              常用來打破沉默、表達友善或開啟對話。常見的主題包括天氣、週末計畫、課程內容或日常生活。
              <strong>Small Talk 是在北美生活必須有的技能</strong>
              ，它能幫助你更快融入當地生活，建立人際關係。
              <br />
              Btw,別害怕說英文，遇到新朋友可以先從簡單的問候開始，例如{" "}
              <en>"How are you?"</en> 、{" "}
              <en>"What do you think about this class?"</en> 、
              <en>"What's your major?"</en>，
              然後根據對方的回答展開話題。即使你覺得自己的英文不夠好，也可以嘗試用簡單的句子表達自己，大家都會很包容。還有在回答
              <en>"How are you?"</en>時， 避免回答{" "}
              <en>"I'm fine" 或 "I'm good"</en>
              ，這樣會讓對話變得很無趣，可以試著回答{" "}
              <en>"I'm doing great, thanks! How about you?"</en>或{" "}
              <en>"Not bad, just busy with school."</en>，
              隨著待的時間變長，經驗累積，你會發現 Small Talk會越來越簡單的。
            </h4>
          </div>
          {/*Telephone*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={telephoneRef}>
              <h2>電信公司/手機</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <h4>
              傳統電信公司有
              <a href="https://www.rogers.com/" target="_Blank">
                Rogers
              </a>
              、
              <a href="https://www.bell.ca/" target="_Blank">
                Bell
              </a>
              、
              <a
                href="https://www.telus.com/en/mobility/mobile-internet"
                target="_Blank"
              >
                Telus
              </a>
              ，大多都是100G的方案，價格從$75到$100不等， 學長姐推薦
              <a
                href="https://www.koodomobile.com/en/shop/mobility/bring-your-own-phone?INTCMP=KMNewHomeBAN_5G_Janus_10GBperk_HPMainBanner"
                target="_Blank"
              >
                Koodo
              </a>
              ，他是一間較小型的電信公司也是Telus的子公司，有較便宜的方案從$40/10G到$75/100G都有，適合學生使用。
              此外，在北美簡訊大多數是免費的，所以大家偏好使用手機號碼直接發送簡訊作為聯絡方式，相對之下，Line或其他通訊軟體的使用率較低。
              <br />
              Tips:可以先在台灣買旅遊網卡撐一個月，落地後再好好研究辦加拿大的門號
            </h4>
          </div>
          {/*Banks*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={bankRef}>
              <h2>銀行/簽帳卡/信用卡 - Debit and Credit card</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <h4>
              在加拿大，常見的大型銀行包括
              <a href="https://www.rbcroyalbank.com/bank-accounts/youth-student-banking/advantage-banking-students.html">
                Royal Bank of Canada(RBC)
              </a>
              、
              <a href="https://www.td.com/ca/en/personal-banking/solutions/student-banking">
                The Toronto-Dominion Bank(TD)
              </a>{" "}
              和
              <a href="https://www.cibc.com/en/student/student-hub.html">
                Canadian Imperial Bank of Commerce(CIBC)
              </a>
              ， 另外還有一些中型的銀行如 Scotiabank(學校有合作)和 Bank of
              Montreal(BMO) ，這些傳統銀行的分行與ATM據點多，
              辦理業務方便、信譽良好，對於國際學生來說也較容易開戶，各家銀行的福利也不同，
              例如CIBC有較多的現金回饋。
              <br />
              在北美，銀行帳戶主要分為 Checking/Chequing Account（支票帳戶） 和
              Savings Account（活存帳戶） 兩種。 Checking/Chequing Account
              是日常使用的主要帳戶，通常會搭配一張 Debit
              Card（簽帳卡），可用來刷卡、提領現金、轉帳或繳費等。
              <strong>
                刷Debit Card會直接從你的帳戶提款，被盜刷將無法討回
              </strong>
              。 Savings Account
              則是用來儲蓄與累積利息，存入的錢可以產生微薄的利息（傳統銀行利率通常不高）。
            </h4>
          </div>
          {/*Housing*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={housingRef}>
              <h2>住宿/房子</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <h4>
              <ul>
                <li>
                  <a href="" target="_Blank">
                    Homestay
                  </a>
                  <ul>
                    <li>
                      UMC
                      <ul>
                        <li>學校有合作的Homestay</li>
                        <li>提供早晚兩餐</li>
                        <li>更好適應加拿大生活</li>
                        <li>
                          <strong>填寄宿家庭偏好時務必仔細且嚴格填寫</strong>
                          ，因為偏好會直接決定配對結果。寫得越明確，越能避免不合適的住宿
                        </li>
                      </ul>
                    </li>
                    <li>
                      Red Deer
                      <ul>
                        <li>學校有合作的Homestay - 約1200/月</li>
                        <li>
                          含水電網路、三餐
                          （如果自己有想吃的也可以去超市購買自己料理，其費用另外計算）
                        </li>
                        <li>更好適應加拿大生活</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  治安
                  <ul>
                    <li>多倫多</li>
                    <li>
                      亞伯達
                      <ul>
                        <li>
                          基本上很安全，但晚上不建議在downtown逗留，成群結伴活動最優。
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </h4>
          </div>
          {/*Transportation*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={transportationRef}>
              <h2>交通</h2>
            </div>
            <div className="CaLifeDivider" />

            <div id="UMCTransportation">
              <h3>多倫多 - UMC</h3>
              <div className="CALifeTransportationCards">
                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/TaxiApp.jpg"
                    alt="Taxi Apps"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">Uber/Hopp/Lyft</h3>
                    <h4>
                      <en>Uber</en>單價偏高但品質也比較好
                      <br />
                      <en>lyft</en>和<en>Hopp</en>比較便宜但司機品質參差不齊
                    </h4>
                  </div>
                </div>

                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/TorontoTrans.jpg"
                    alt="Toronto Transportation"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">
                      <a href="https://www.ttc.ca/" target="_Blank">
                        TTC/Presto Card
                      </a>
                    </h3>
                    <h4>
                      多倫多交通局(TTC)
                      是多倫多的主要公共交通系統，提供公車、地鐵、有軌電車(只有市區有)
                      交通卡為Presto Card跟台灣一卡通、悠遊卡相似
                      且搭乘TTC的大眾運輸兩小時內轉乘免費
                    </h4>
                  </div>
                </div>

                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/Go.jpg"
                    alt="Toronto Transportation"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">
                      <a href="https://www.gotransit.com/en" target="_Blank">
                        GO Transit
                      </a>
                    </h3>
                    <h4>
                      <en>GO Transit</en> 是<strong>大多倫多</strong>
                      及漢密爾頓地區的區域公共交通系統，
                      提供連接多倫多與Mississauga、Brampton、Hamilton、Oshawa等周邊城市的通勤火車和巴士服務。
                      GO Transit
                      適合較長距離的區域通勤，採用依距離計費的票價制度，並支援
                      PRESTO 卡付款。
                    </h4>
                  </div>
                </div>

                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/VIA.jpg"
                    alt="Toronto Transportation"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">
                      <a href="https://www.viarail.ca/en" target="_Blank">
                        VIA Rail
                      </a>
                    </h3>
                    <h4>
                      <en>VIA Rail</en>{" "}
                      是加拿大的國家客運鐵路系統，提供多倫多與其他省份大城市之間的長途交通服務。
                      從多倫多出發，可搭乘列車前往溫哥華、卡加利、愛德蒙頓、魁北克市等地，適合跨省移動或長距離旅行。
                    </h4>
                  </div>
                </div>

                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/CaDL.jpg"
                    alt="Ontario, Canada Drive licence"
                    className="CALifeResourceImage"
                  />
                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">駕照/租買車</h3>
                    <h4>
                      安大略省是可以直接拿台灣國際駕照換的，詳細請上
                      <a
                        href="https://www.ontario.ca/page/exchange-out-province-drivers-licence"
                        target="_Blank"
                      >
                        安大略省政府網站
                      </a>
                      查詢
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="CaLifeDivider" id="TransDivider"></div>
            <div id="UMCTransportation">
              <h3>亞伯達 - RedDeer</h3>
              <div className="CALifeTransportationCards">
                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/TaxiApp.jpg"
                    alt="Taxi Apps"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">
                      Uber/Hopp/Lyft/寄宿家庭
                    </h3>
                    <h4>
                      *不同寄宿家庭，規定不一，但可以詢問寄宿家庭接送
                      <br />
                      <en>Uber</en>單價偏高但品質也比較好
                      <br />
                      <en>lyft</en>和<en>Hopp</en>比較便宜但司機品質參差不齊
                    </h4>
                  </div>
                </div>

                <div className="CALifeResourceCard">
                  <img
                    src="/CALife/RedDeerBus.jpg"
                    alt="Red Deer Bus"
                    className="CALifeResourceImage"
                  />

                  <div className="CALifeResourceCardtext">
                    <h3 className="CALifeResourceTitle">
                      <a
                        href="https://www.reddeer.ca/city-services/transit/"
                        target="_Blank"
                      >
                        紅鹿公車
                      </a>
                    </h3>
                    <h4>
                      Red Deer City Transit
                      是紅鹿市的公共巴士系統，提供市區內各社區、學校與主要設施之間的交通服務。
                      <br />
                      <strong>*半小時一班</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Weather*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={weatherRef}>
              <h2>天氣/衣物</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <h4>
              <ul>
                <li>
                  <strong>UMC</strong>
                  <ul>
                    <li>
                      夏天 - 約 6 月至 9 月
                      <ul>
                        <li>氣溫溫暖至炎熱，約20°C 至 30°C，偶爾超過30°C</li>
                        <li>炎熱潮濕，晴朗天多，有時會有雷陣雨或短暫暴雨。</li>
                      </ul>
                    </li>
                    <li>
                      秋天 -約 9 月至 11 月
                      <ul>
                        <li>
                          氣溫漸涼，白天約
                          10–20°C，晚間漸冷，適合穿長袖和薄外套。
                        </li>
                      </ul>
                    </li>
                    <li>
                      冬天 - 11 月至 2 月
                      <ul>
                        <li>
                          日夜溫差大，白天約 -10–0°C，夜晚氣溫常低於
                          0°C，冬季會有積雪
                        </li>
                        <li>建議穿發熱衣、厚外套、帽T、羽絨服和圍巾保暖。</li>
                      </ul>
                    </li>
                    <li>
                      春天 - 3 月至 5 月
                      <ul>
                        <li>
                          氣溫漸暖，約 5–15°C，早晚較涼，適合穿薄外套和長褲。
                        </li>
                        <li>最舒服的時候</li>
                      </ul>
                    </li>
                    <li>
                      General Advice
                      <ul>
                        <li>短袖短褲（夏天）</li>
                        <li>薄外套、長褲（春天、秋天）</li>
                        <li>發熱衣、長袖、帽T、大羽絨衣、圍巾、毛帽（冬天）</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>RedDeer</strong>
                  <ul>
                    <li>8月底-10月中：入秋 天氣涼涼 但不會到冷</li>
                    <li>
                      10月底-11月初：開始下雪 （會持續下雪寒冷到隔天4月底）
                    </li>
                    <li>
                      12月底-1月初：冬天最冷的時期，最低溫度零下40度
                      <ul>
                        <li>
                          去那裡購買禦寒衣物（發熱衣、零下30度左右保暖大衣、靴子）
                        </li>
                        <li>
                          sportchek, bower mall, 或校外教學時把握機會去Edmonton
                          Mall 購買，寄宿家庭帶你去購買
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </h4>
          </div>
          {/*Shopping*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={shoppingRef}>
              <h2>購物/超市</h2>
            </div>
            <div className="CaLifeDivider" />

            <div className="cocLifeShoppingCardsWrapper">
              {/*A-Mart*/}
              <div className="CaLifeShoppingCards">
                <img
                  src="/CALife/Amart.jpg"
                  alt="A-mart"
                  className="CaLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>A-Mart</h3>
                  韓國超市 A-mart
                  有韓國食品與生活用品，店內可找到新鮮食材、調味品、零食與飲料，也有熟食和日常用品。
                </div>
              </div>
              {/*TnT*/}
              <div className="CaLifeShoppingCards">
                <img
                  src="/CALife/Tnt.jpg"
                  alt="TnT Mart/大統華"
                  className="CaLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Trader Joe's</h3>
                  大統華 (T&T Supermarket)
                  是加拿大最大的亞洲超市，紅鹿附近只有calgary/
                  edmonton有開，多倫多在UofT附近和Downtown各有一間
                </div>
              </div>
              {/*Weee*/}
              <div className="CaLifeShoppingCards">
                <img
                  src="/USLife/Weee.jpg"
                  alt="Target"
                  className="CaLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Weee</h3>
                  北美最大的亞洲食品的線上超市，提供各種亞洲國家的食品選擇，方便購買亞洲食材。
                  尤其是不會臭的豬肉、便宜的蔬菜、蔥薑蒜等調味料，還有各種亞洲零食和飲料。
                  只要在網站上下單，Wee會將商品送到你家門口，非常方便。
                </div>
              </div>
              {/*Walmart */}
              <div className="CaLifeShoppingCards">
                <img
                  src="/CALife/WalmartCA.jpg"
                  alt="WalmartCA"
                  className="CaLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Walmart</h3>
                  Walmart 是北美其中最大規模的量販超市，
                  價位的部分相較其他超市偏低、不管是買醬料、蔬果、零食、民生用品、都非常划算。
                  超市內也設有亞洲部門，基本的華人食品也都找得到
                </div>
              </div>
            </div>
          </div>
          {/*Foods*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={restaurantRef}>
              <h2>餐廳/飲食</h2>
            </div>
            <div className="CaLifeDivider"></div>
            <div className="CaLifeFoodsection">
              <h3>Around Red Deer</h3>
              <h4>
                在 Red
                Deer，可以下廚，但需依寄宿家庭的規定而定。當地主要是美式飲食，常見的有
                Five Guys、DQ、A&W、Jollibee、Wendy’s
                等；中式餐廳非常少，而且味道不太道地。不過，也能找到不錯的日本料理與炸豬排店，如
                Shiso 和 Wow Store。
              </h4>
              <div className="CaLifeEntertainmentCardsWrapper">
                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://www.sixflags.com/magicmountain/things-to-do"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/fiveGuys.jpg"
                      alt="Five Guys"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>大型遊樂園</h4>
                    <h4>
                      <en>Five Guys</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a href="https://www.bowlvalencialanes.com/" target="_Blank">
                    <img
                      src="/CALife/DQ.jpg"
                      alt="Dairy Queen"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>保齡球館</h4>
                    <h4>
                      <en>Dairy Queen</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://www.thecubesantaclarita.com/"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/A&W.jpg"
                      alt="A&W"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>溜冰場</h4>
                    <h4>
                      <en>A&W</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://maps.app.goo.gl/d3vbfGo5M3fxrmri8"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/Shiso.jpg"
                      alt="Shiso"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>電影院</h4>
                    <h4>
                      <en>Regal Valencia</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://maps.app.goo.gl/Tr6nCGt47h56BRPn8"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/wowStore.webp"
                      alt="wowStore"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>購物商場</h4>
                    <h4>
                      <en>Town Center</en>
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="CaLifeFoodsection">
              <h3>Around Red Deer</h3>
              <h4>多倫多食物便宜各種種類多由尤其還有唐人街</h4>
              <div className="CaLifeEntertainmentCardsWrapper">
                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://www.sixflags.com/magicmountain/things-to-do"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/fiveGuys.jpg"
                      alt="Five Guys"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>大型遊樂園</h4>
                    <h4>
                      <en>Five Guys</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a href="https://www.bowlvalencialanes.com/" target="_Blank">
                    <img
                      src="/CALife/DQ.jpg"
                      alt="Dairy Queen"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>保齡球館</h4>
                    <h4>
                      <en>Dairy Queen</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://www.thecubesantaclarita.com/"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/A&W.jpg"
                      alt="A&W"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>溜冰場</h4>
                    <h4>
                      <en>A&W</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://maps.app.goo.gl/d3vbfGo5M3fxrmri8"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/Shiso.jpg"
                      alt="Shiso"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>電影院</h4>
                    <h4>
                      <en>Regal Valencia</en>
                    </h4>
                  </a>
                </div>

                <div className="CaLifeEntertainmentCard">
                  <a
                    href="https://maps.app.goo.gl/Tr6nCGt47h56BRPn8"
                    target="_Blank"
                  >
                    <img
                      src="/CALife/wowStore.webp"
                      alt="wowStore"
                      className="CaLifeEntertainmentImage"
                    />
                    <h4>購物商場</h4>
                    <h4>
                      <en>Town Center</en>
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTopBotton titleRef={cocLifeRef} />
    </div>
  );
}
