import "./cocLife.css";
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
  const entertainmentRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cocLifeContainer">
      <div className="cocLifeSideBar SIDEBAR">
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
          <li onClick={() => scrollToSection(entertainmentRef)}>娛樂/景點</li>
        </ul>
      </div>
      <div className="cocLifeContentWrapper">
        <div className="cocLifeTitle" ref={cocLifeRef}>
          美國留學生活/COC
        </div>
        <div className="cocLifeContents">
          {/*Social Life, Small Talk*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={socialLifeRef}>
              <h2>社交生活</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <h4>
              在美國，Small Talk是日常生活中很重要的一部分，
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
            <div className="cocLifeDivider"></div>
            <h4>
              傳統電信公司有
              <a href="https://www.t-mobile.com/" target="_Blank">
                T-mobile
              </a>
              、
              <a href="https://www.att.com/" target="_Blank">
                AT&T
              </a>
              、
              <a href="https://www.verizon.com/" target="_Blank">
                Verizon
              </a>
              ，覆蓋率廣速度快，但都要$50/月起跳，流量卻只有5到15G， 個人大推
              <a href="https://www.mintmobile.com/">Mint Mobile</a>
              ，一間較小型的線上電信公司，Ryan Reynolds是其中一位老闆，
              價格划算$15/月5G甚至有$30/月40G的方案，
              所有方案都包含無限通話與簡訊，且使用的是 T-Mobile
              的基地台，在市區或大部分地區的訊號表現也非常不錯。
              此外，在美國簡訊大多數是免費的，所以大家偏好使用手機號碼直接發送簡訊作為聯絡方式，相對之下，Line或其他通訊軟體的使用率較低。
            </h4>
          </div>
          {/*Banks*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={bankRef}>
              <h2>銀行/簽帳卡/信用卡 - Debit and Credit card</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <h4>
              在美國，常見的大型銀行包括 Bank of
              America(BOA)、Chase和Citibank，這些傳統銀行的分行與ATM據點多，
              辦理業務方便、信譽良好，對於國際學生來說也較容易開戶，許多學校也與其中一家有合作關係。
              <br />
              在美國，銀行帳戶主要分為 Checking Account（支票帳戶） 和 Savings
              Account（活存帳戶） 兩種。 Checking Account
              是日常使用的主要帳戶，通常會搭配一張 Debit
              Card（簽帳卡），可用來刷卡、提領現金、轉帳或繳費等。
              <strong>
                刷Debit Card會直接從你的帳戶提款，被盜刷將無法討回
              </strong>
              。 Savings Account
              則是用來儲蓄與累積利息，存入的錢可以產生微薄的利息（傳統銀行利率通常不高）。
              <br />
              在美國，信用卡（Credit
              Card）是非常普遍的支付方式，使用信用卡可以累積信用紀錄/credit
              score，對於未來申請貸款或租屋等都很有幫助，
              但要注意信用卡的使用，避免過度消費或逾期。推薦
              <strong>
                <a href="https://refer.discover.com/s/jeremy02012005?advocate.partner_share_id=9756999471"
                target="_Blank"
                >
                  Discover it
                </a>
              </strong>
              最為第一張信用卡，不用有SSN也可以申請，且有無上限1%、季度5%現金回饋的優惠。
            </h4>
          </div>
          {/*Housing*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={housingRef}>
              <h2>住宿/房子</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <h4>
              <ul>
                <li>
                  <a href="https://homestayscv.com/" target="_Blank">
                    Homestay - $1700/月
                  </a>
                  <ul>
                    <li>學校(ISP)有合作的Homestay</li>
                    <li>提供早晚兩餐</li>
                    <li>更好適應美國生活</li>
                  </ul>
                </li>
                <li>
                  Rental - 約2300以上/月
                  <ul>
                    <li>不含水電網路</li>
                    <li>大多會要求SSN</li>
                    <li>租屋時要注意的事項：租金、押金、合約、房東信用等</li>
                  </ul>
                </li>
                <li>
                  Air BnB - 約2000/月
                  <ul>
                    <li>含水電網路</li>
                    <li>短期租屋</li>
                    <li>適合短期停留或不確定長期住處的學生</li>
                    <li>下下策</li>
                  </ul>
                </li>
                <li>
                  治安
                  <ul>
                    <li>居民大部分為退休人士</li>
                    <li>治安非常良好</li>
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
            <div className="cocLifeDivider"></div>
            <div className="cocLifeTransportationCards">
              <div className="cocLifeResourceCard">
                <img
                  src="/USLife/uberandlyft.jpg"
                  alt="Campus Life"
                  className="cocLifeResourceImage"
                />
                <h3 className="cocLifeResourceTitle">Uber/Lyft</h3>
                <h4> 常用的叫車app，單價偏高</h4>
              </div>

              <div className="cocLifeResourceCard">
                <img
                  src="/USLife/Santa_Clarita_Transit_127.jpg"
                  alt="Campus Life"
                  className="cocLifeResourceImage"
                />
                <h3 className="cocLifeResourceTitle">公車</h3>
                <h4>學校提供公車卡，需要每月更新</h4>
              </div>

              <div className="cocLifeResourceCard">
                <img
                  src="/USLife/CADL.jpg"
                  alt="Campus Life"
                  className="cocLifeResourceImage"
                />
                <h3 className="cocLifeResourceTitle">駕照/租買車</h3>
                <h4>加州要重考專門的駕照喔(Class C)，要去美國的<a href="https://www.dmv.ca.gov/portal/" target="_BLank">監理站(DMV)</a></h4>
              </div>
            </div>
          </div>
          {/*Weather*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={weatherRef}>
              <h2>天氣/衣物</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <h4>
              <ul>
                <li>
                  夏天 - 約 6 月至 10 月
                  <ul>
                    <li>氣溫炎熱，白天常達 35–40°C</li>
                  </ul>
                </li>
                <li>
                  秋冬 - 11 月至 2 月
                  <ul>
                    <li>
                      日夜溫差大，白天約 10–18°C，早晚可能低至5°C
                      左右，但不會下雪
                    </li>
                  </ul>
                </li>
                <li>
                  春天 - 3 月至 5 月
                  <ul>
                    <li>氣溫溫和約 15–25°C</li>
                    <li>最舒服的時候</li>
                  </ul>
                </li>
                <li>
                  General Advice
                  <ul>
                    <li>短袖短褲</li>
                    <li>薄外套、長褲</li>
                    <li>發熱衣、長袖、帽T、輕羽絨、圍巾</li>
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
            <div className="cocLifeDivider" />

            <div className="cocLifeShoppingCardsWrapper">
              {/*Target*/}
              <div className="cocLifeShoppingCards">
                <img
                  src="/USLife/Target.png"
                  alt="Target"
                  className="cocLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Target</h3>
                  生活用品、衣物、食品等大型購物中心，價格比較便宜，沐浴用品還有大份量的零食很划算
                </div>
              </div>
              {/*Vons*/}
              <div className="cocLifeShoppingCards">
                <img
                  src="/USLife/Vons.jpg"
                  alt="Vons"
                  className="cocLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Vons</h3>
                  大型連鎖超市有點像全聯，提供各種食品、日用品等，價格適中，品質可靠。
                  也有提供會員APP(一定要下載)，購物時可以享受折扣優惠。
                  <br />
                  牛奶、雞蛋、優格等乳製品價格便宜，還有各種新鮮的水果和蔬菜。
                </div>
              </div>
              {/*TraderJoes*/}
              <div className="cocLifeShoppingCards">
                <img
                  src="/USLife/TraderJoes.png"
                  alt="TraderJoes"
                  className="cocLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Trader Joe's</h3>
                  知名的有機食品超市，提供各種健康食品、零食和飲料，
                  以其獨特的產品和友善的服務聞名。有些品項價格相對較高，但品質優良。
                  <br />
                  很多冷凍食品很好吃，還有賣好吃便宜的歐式麵包/French Loaf
                </div>
              </div>
              {/*SeaFoodCityMarket*/}
              <div className="cocLifeShoppingCards">
                <img
                  src="/USLife/SeaFoodCityMarket.png"
                  alt="SeaFoodCityMarket"
                  className="cocLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Sea Food City Market</h3>
                  菲律賓亞洲超市，提供各種新鮮的海鮮:鮭魚、帶殼蝦、便宜和特殊肉類:牛腱、豬五花，還有大米(推富貴花米
                  - Botan Calrose)
                </div>
              </div>
              {/*Wee*/}
              <div className="cocLifeShoppingCards">
                <img
                  src="/USLife/Weee.jpg"
                  alt="Target"
                  className="cocLifeShoppingTag"
                />

                <div className="cocLifeShoppingText">
                  <h3>Weee</h3>
                  北美最大的亞洲食品的線上超市，提供各種亞洲國家的食品選擇，方便購買亞洲食材。
                  尤其是不會臭的豬肉、便宜的蔬菜、蔥薑蒜等調味料，還有各種亞洲零食和飲料。
                  只要在網站上下單，Wee會將商品送到你家門口，非常方便。
                </div>
              </div>
            </div>
          </div>
          {/*Foods*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={restaurantRef}>
              <h2>餐廳/飲食</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <h4>
              在 COC
              就讀期間，多數國際學生會選擇入住寄宿家庭（Homestay），早晚兩餐基本都有提供。需自行解決午餐，
              校內僅有一間餐廳（Cafeteria），餐點選擇較少，口味中等偏下，價格相對較高，平均每餐約
              $12 以上。
              因此，有些學生會選擇自備便當，或到附近超市購買食材與冷凍食品自行準備。
              <br />
              外食方面，餐廳價格普遍偏高，平均每餐約在 $12 至 $30
              之間，此外還需加收約 15% 起跳的小費與 9.5% 的稅金。
              <br />
              <strong>省錢Tips:各家速食店都有Apps，一定要下載很常給折價券和各式優惠</strong>
            </h4>
            <div className="cocLifeRestaurantsSection">
              {/*速食*/}
              <div className="cocLifeRestaurantsLeft">
                <h3>速食連鎖店</h3>
                <div className="cocLifeRestaurantsCardsWrapper">
                  {/*In N Out*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://www.in-n-out.com/"
                      target="_Blank"
                    >
                      <img
                        src="/USLife/InNout.jpg"
                        alt="In N Out"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>加州超好吃的漢堡店</h4>
                      <h4>
                        <en>In N Out</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($10 - 20)大推Protein Style(以美生菜替代外層的麵包)的Cheese Bruger、 
                        Double Double Cheese Bruger、Animal Style Fries
                      </div>
                    </a>
                  </div>
                  {/*Panda Express*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://www.pandaexpress.com/"
                      target="_Blank"
                    >
                      <img
                        src="/USLife/PandaExpress.jpg"
                        alt="Panda Express"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>美式中餐</h4>
                      <h4>
                        <en>Panda Express</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($12 - 20)經典美式中餐，有名的有Orange Chicken(就是很甜的糖醋排骨換成雞肉)，
                        主餐推炒麵，別點炒飯很濕
                      </div>
                    </a>
                  </div>
                </div>
                  
                <div className="cocLifeRestaurantsCardsWrapper">
                  {/*Wendys */}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://www.wendys.com/"
                      target="_Blank"
                    >
                      <img
                        src="/USLife/Wendys.jpg"
                        alt="Wendys"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>速食店</h4>
                      <h4>
                        <en>Wendys</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($9-15)美式速食連鎖，大推各種漢堡。
                        推薦點 4 for $5 / $6 Meal Deal，小份炸雞塊、薯條、飲料加漢堡超划算。
                      </div>
                    </a>
                  </div>
                    {/*Chick fill a*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://www.chick-fil-a.com/"
                      target="_Blank"
                    >
                      <img
                        src="/USLife/ChickFilla.jpg"
                        alt="Popeyes"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>美式炸雞三明治店</h4>
                      <h4>
                        <en>Chick-fil-A</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($10–18):速食連鎖店，推 Original Chicken Sandwich，就是炸雞排加醃黃瓜。
                        Chick-fil-A Sauce是特色甜甜鹹鹹很好吃。炸雞相關都好吃
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/*餐廳*/}
              <div className="cocLifeRestaurantsRight">
                <h3>附近好吃的餐廳</h3>
                <div className="cocLifeRestaurantsCardsWrapper">
                  {/*JinCook*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://maps.app.goo.gl/75rcHTHTaRB7DgoG9"
                      target="_Blank"
                      draggable="false"
                    >
                      <img
                        src="/USLife/JinCook.jpg"
                        alt="Jin Cook"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>韓國餐廳</h4>
                      <h4>
                        <en>Jin Cook</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($30–45)9/10 好吃的韓餐，最熱門的是石鍋拌飯、部隊鍋和辣炒年糕，也有韓式烤肉和小菜可以無限續。
                        價格比快餐高一點，但份量大、食材新鮮，適合跟朋友聚餐
                      </div>
                    </a>
                  </div>
                  {/*牛角*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://maps.app.goo.gl/FdfwMDm1paRMSBSK6"
                      target="_Blank"
                      draggable="false"
                    >
                      <img
                        src="/USLife/GyuKaku.jpg"
                        alt="牛角"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>日式燒肉</h4>
                      <h4>
                        <en>牛角(Gyu Kaku)</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($50up)8/10連鎖日式燒肉餐廳，跟台灣的差不多，就是日式燒肉，推中午Happy Hour打折很划算(Around$20 - 30)
                      </div>
                    </a>
                  </div>
                  {/*Royal Tandoor*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://maps.app.goo.gl/ejq5AQzbB7Y8Uj787"
                      target="_Blank"
                      draggable="false"
                    >
                      <img
                        src="/USLife/RoyalTandoor.jpg"
                        alt="Royal Tandoor"
                        className="cocLifeRestaurantsImage"
                        
                      />
                      <h4>印度菜</h4>
                      <h4>
                        <en>Royal Tandoor</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($15–22)8/10印度餐廳，特色是豐富的香料口味、咖哩、印度特色菜，
                        包括 Butter Chicken、Tandoori Chicken、各類燉飯與烤餅
                      </div>
                    </a>
                  </div>
                </div>

                <div className="cocLifeRestaurantsCardsWrapper">
                  {/*Gogi House*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://maps.app.goo.gl/sgwc5iuUKGhusFLq7"
                      target="_Blank"
                      draggable="false"
                    >
                      <img
                        src="/USLife/GogiHouse.jpg"
                        alt="Gogi House"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>韓式燒肉吃到飽</h4>
                      <h4>
                        <en>Gogi House</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($55up)6/10有點貴的韓式吃到飽，肉質中偏下除了肉還有炸蝦、小菜，跟朋友聚餐是不錯的選擇會吃得很滿足
                      </div>
                    </a>
                  </div>
                  {/*I Love SuShi*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://maps.app.goo.gl/eBddZP5vKL3fHBVb6"
                      target="_Blank"
                    >
                      <img
                        src="/USLife/ILoveSuShi.jpg"
                        alt="ILoveSuShi"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>壽司店</h4>
                      <h4>
                        <en>I Love SuShi</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($12–35)7/10選項多樣的壽司店，烏龍麵不錯，可以幫助你解決亞洲胃，解嘴饞的實用選擇之一
                      </div>
                    </a>
                  </div>
                    {/*The Cheese Cake Factory*/}
                  <div className="cocLifeRestaurantsCard">
                    <a
                      href="https://www.thecheesecakefactory.com/"
                      target="_Blank"
                      draggable="false"
                    >
                      <img
                        src="/USLife/CheeseCakeFactory.jpg"
                        alt="The Cheese Cake Factory"
                        className="cocLifeRestaurantsImage"
                      />
                      <h4>美式連鎖家庭餐廳</h4>
                      <h4>
                        <en>The Cheese Cake Factory</en>
                      </h4>
                      <div className="cocLifeRestaurantsCardText">
                        ($20-35)7/10 份量蠻大、選擇很多的美式餐廳，各種美式、義式、亞洲風通通有，
                        招牌是起司蛋糕，推烤球甘藍、達文西義大利麵、牛排
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Entertainment*/}
          <div className="cocLifeText">
            <div className="cocLifeTopic" ref={entertainmentRef}>
              <h2>娛樂/景點</h2>
            </div>
            <div className="cocLifeDivider"></div>
            <div className="cocLifeEntertainmentsection">
              <h3>Around Santa Clarita</h3>
              <div className="cocLifeEntertainmentCardsWrapper">
                <div className="cocLifeEntertainmentCard">
                  <a
                    href="https://www.sixflags.com/magicmountain/things-to-do"
                    target="_Blank"
                  >
                    <img
                      src="/USLife/SixFlag.jpg"
                      alt="Six Flags"
                      className="cocLifeEntertainmentImage"
                    />
                    <h4>大型遊樂園</h4>
                    <h4>
                      <en>Six Flags</en>
                    </h4>
                  </a>
                </div>

                <div className="cocLifeEntertainmentCard">
                  <a href="https://www.bowlvalencialanes.com/" target="_Blank">
                    <img
                      src="/USLife/ValenciaLanes.jpg"
                      alt="ValenciaLanes"
                      className="cocLifeEntertainmentImage"
                    />
                    <h4>保齡球館</h4>
                    <h4>
                      <en>Valencia Lanes</en>
                    </h4>
                  </a>
                </div>

                <div className="cocLifeEntertainmentCard">
                  <a
                    href="https://www.thecubesantaclarita.com/"
                    target="_Blank"
                  >
                    <img
                      src="/USLife/CubeIce.jpg"
                      alt="CubeIce"
                      className="cocLifeEntertainmentImage"
                    />
                    <h4>溜冰場</h4>
                    <h4>
                      <en>The Cube</en>
                    </h4>
                  </a>
                </div>

                <div className="cocLifeEntertainmentCard">
                  <a
                    href="https://maps.app.goo.gl/ERnYa2jsTeiHLJ427"
                    target="_Blank"
                  >
                    <img
                      src="/USLife/RegalValencia.jpg"
                      alt="RegalValencia"
                      className="cocLifeEntertainmentImage"
                    />
                    <h4>電影院</h4>
                    <h4>
                      <en>Regal Valencia</en>
                    </h4>
                  </a>
                </div>

                <div className="cocLifeEntertainmentCard">
                  <a
                    href="https://www.valenciatowncenter.com/directory"
                    target="_Blank"
                  >
                    <img
                      src="/USLife/ValenciaTownCenter.jpg"
                      alt="ValenciaTownCenter"
                      className="cocLifeEntertainmentImage"
                    />
                    <h4>購物商場</h4>
                    <h4>
                      <en>Town Center</en>
                    </h4>
                  </a>
                </div>
              </div>
            </div>

            <div className="cocLifeEntertainmentsection">
              <h3>Near Cities</h3>
              <div className="cocLifeEntertainmentCardsWrapper">
                {/*Santa Monica*/}
                <div className="cocLifeEntertainmentCard cocLifeEntertainmentOtherCity">
                  <span className="cocLifeEntertainmentTitle">
                    Santa Monica
                  </span>
                  <div className="cocLifeEntertainmentSpotsWrapper">
                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/SantaMonica66.jpg"
                        alt="SantaMonica66"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>Santa Monica</h4>
                      <h4>66號公路</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/SantaMonicaPier.jpg"
                        alt="SantaMonicaPier"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>海邊遊樂園</h4>
                      <h4>Santa Monica Pier</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/SantaMonicaBeach.jpg"
                        alt="SantaMonicaBeach"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>Santa Monica</h4>
                      <h4>海灘</h4>
                    </div>
                  </div>
                </div>
                {/*Los Angeles*/}
                <div className="cocLifeEntertainmentCard cocLifeEntertainmentOtherCity">
                  <span className="cocLifeEntertainmentTitle">
                    Down Town LA
                  </span>
                  <div className="cocLifeEntertainmentSpotsWrapper">
                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/SmallTokyoLA.jpg"
                        alt="SmallTokyoLA"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>小東京</h4>
                      <h4>Small Tokyo</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/KtownLA.jpg"
                        alt="KtownLA"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>韓國城</h4>
                      <h4>Korea Town</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/ChinatownLA.jpg"
                        alt="ChinatownLA"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>唐人街</h4>
                      <h4>China Town</h4>
                    </div>
                  </div>
                </div>
                {/*Other Cities*/}
                <div className="cocLifeEntertainmentCard cocLifeEntertainmentOtherCity">
                  <span className="cocLifeEntertainmentTitle">
                    Other Cities
                  </span>
                  <div className="cocLifeEntertainmentSpotsWrapper">
                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/Americana.jpg"
                        alt="Americana"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>大型生活風格型戶外購物中心</h4>
                      <h4>The Americana at Brand</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/Pasadena.jpg"
                        alt="Pasadena"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>文創氣息濃厚的悠閒歷史城區</h4>
                      <h4>Pasadena</h4>
                    </div>

                    <div className="cocLifeEntertainmentSpot">
                      <img
                        src="/USLife/westfieldCenturyCity.jpg"
                        alt="WestfieldCenturyCity"
                        className="cocLifeEntertainmentImage"
                      />
                      <h4>大型生活風格型戶外購物中心</h4>
                      <h4>Westfield Century City</h4>
                    </div>
                  </div>
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
