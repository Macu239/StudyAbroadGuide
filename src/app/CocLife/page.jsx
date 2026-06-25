'use client'
import styles from "./page.module.css";
import { BackToTopBotton } from "../../components";
import { useRef } from "react";
import RestaurantExplorer from "../../components/RestaurantExplorer";
import EntertainmentExplorer from "../../components/EntertainmentExplorer";

const US_LOCATIONS = [
  {
    id: "santa-clarita",
    label: "Santa Clarita",
    desc: "南加州飲食選擇豐富，速食與特色餐廳並存。依預算和心情篩選。",
    showFilter: true,
    tipBanner:
      "省錢 Tips：各家速食店都有 App，一定要下載，常常給折價券和各式優惠",
    items: [
      {
        tag: "速食",
        name: "In N Out",
        price: "$10–20",
        img: "/USLife/food/in-n-out.jpg",
        alt: "In N Out",
        desc: "($10 - 20)大推Protein Style(以美生菜替代外層的麵包)的Cheese Bruger、 Double Double Cheese Bruger、Animal Style Fries",
        recs: ["Protein Style", "Double Double", "Animal Style Fries", "Neapolitan Shake"],
        cat: "fast",
      },
      {
        tag: "速食",
        name: "Panda Express",
        price: "$12–20",
        img: "/USLife/food/panda-express.jpg",
        alt: "Panda Express",
        desc: "($12 - 20)經典美式中餐，有名的有Orange Chicken(就是很甜的糖醋排骨換成雞肉)， 主餐推炒麵，別點炒飯很濕",
        recs: ["Teriyaki Chicken", "Beijing Beef", "Chow Mein"],
        cat: "fast",
      },
      {
        tag: "速食",
        name: "Wendy's",
        price: "$9–15",
        img: "/USLife/food/wendys.jpg",
        alt: "Wendy's",
        desc: "漢堡品質在速食中偏上，肉排新鮮不冷凍。4 for $5 / $6 Meal Deal 超划算。",
        recs: ["4 for $5 Deal", "Frosty", "Spicy Chicken Sandwich"],
        cat: "fast",
      },
      {
        tag: "速食",
        name: "Chick-fil-A",
        price: "$10–18",
        img: "/USLife/food/chick-fil-a.jpg",
        alt: "Chick-fil-A",
        desc: "美國最受歡迎炸雞三明治連鎖，Sauce 特色甜甜鹹鹹，炸雞多汁不乾。注意週日公休。",
        recs: ["Original Chicken Sandwich", "Waffle Fries", "Chick-fil-A Sauce"],
        cat: "fast",
      },
      {
        tag: "韓國餐廳",
        name: "Jin Cook",
        price: "$30–45",
        img: "/USLife/food/jin-cook.jpg",
        alt: "Jin Cook",
        desc: "9/10 最熱門是石鍋拌飯、部隊鍋和辣炒年糕，有韓式烤肉和小菜可以無限續，適合跟朋友聚餐。",
        recs: ["石鍋拌飯", "部隊鍋", "辣炒年糕", "韓式烤肉"],
        cat: "sit",
      },
      {
        tag: "日式燒肉",
        name: "牛角 Gyu Kaku",
        price: "$50+",
        img: "/USLife/food/gyu-kaku.jpg",
        alt: "Gyu Kaku",
        desc: "8/10 跟台灣的差不多，就是日式燒肉。Happy Hour 非常划算，Around $20–30 可以吃到不錯的肉。",
        recs: ["Happy Hour 套餐", "和牛牛舌", "牛角燒肉拼盤"],
        cat: "sit",
      },
      {
        tag: "印度菜",
        name: "Royal Tandoor",
        price: "$15–22",
        img: "/USLife/food/royal-tandoor.jpg",
        alt: "Royal Tandoor",
        desc: "8/10 Butter Chicken 香濃不辣，Tandoori Chicken 烤得入味，配烤餅一流。CP 值高。",
        recs: ["Butter Chicken", "Tandoori Chicken", "Garlic Naan", "Mango Lassi"],
        cat: "sit",
      },
      {
        tag: "韓式燒肉吃到飽",
        name: "Gogi House",
        price: "$55+",
        img: "/USLife/food/gogi-house.jpg",
        alt: "Gogi House",
        desc: "6/10 肉質中偏下，但有炸蝦、小菜，份量多。朋友聚餐還可以，別期望太高。",
        recs: ["燒肉拼盤", "炸蝦", "無限小菜"],
        cat: "sit",
      },
      {
        tag: "壽司",
        name: "I Love SuShi",
        price: "$12–35",
        img: "/USLife/food/i-love-sushi.jpg",
        alt: "I Love SuShi",
        desc: "7/10 烏龍麵不錯，可以幫你解決亞洲胃。壽司品質一般，但在 Santa Clarita 已算不錯選擇。",
        recs: ["烏龍麵", "鮭魚握壽司", "天婦羅"],
        cat: "sit",
      },
      {
        tag: "美式家庭餐廳",
        name: "The Cheesecake Factory",
        price: "$20–35",
        img: "/USLife/food/cheesecake-factory.jpg",
        alt: "The Cheesecake Factory",
        desc: "7/10 選擇非常多，菜單厚得像書。招牌起司蛋糕必點，草莓甘藍沙拉很特別，義大利麵和牛排也不錯。",
        recs: ["起司蛋糕", "Strawberry Shortcake", "Pasta Carbonara", "Fish & Chips"],
        cat: "sit",
      },
    ],
  },
];

const US_ENTERTAINMENT = [
  {
    id: "santa-clarita",
    title: "Santa Clarita",
    items: [
      { label: "大型遊樂園", name: "Six Flags", img: "/USLife/SixFlag.jpg", alt: "Six Flags", href: "https://www.sixflags.com/magicmountain/things-to-do" },
      { label: "保齡球館", name: "Valencia Lanes", img: "/USLife/ValenciaLanes.jpg", alt: "ValenciaLanes", href: "https://www.bowlvalencialanes.com/" },
      { label: "溜冰場", name: "The Cube", img: "/USLife/CubeIce.jpg", alt: "CubeIce", href: "https://www.thecubesantaclarita.com/" },
      { label: "電影院", name: "Regal Valencia", img: "/USLife/RegalValencia.jpg", alt: "RegalValencia", href: "https://maps.app.goo.gl/ERnYa2jsTeiHLJ427" },
      { label: "購物商場", name: "Town Center", img: "/USLife/ValenciaTownCenter.jpg", alt: "ValenciaTownCenter", href: "https://www.valenciatowncenter.com/directory" },
    ],
  },
  {
    id: "santa-monica",
    title: "Santa Monica",
    items: [
      { label: "Santa Monica", name: "66號公路", img: "/USLife/SantaMonica66.jpg", alt: "SantaMonica66", href: "https://maps.app.goo.gl/6JCm2MhDqW2S9XAg7" },
      { label: "海邊遊樂園", name: "Santa Monica Pier", img: "/USLife/SantaMonicaPier.jpg", alt: "SantaMonicaPier", href: "https://maps.app.goo.gl/JXUgZgFYtWiArPKb6" },
      { label: "Santa Monica", name: "海灘", img: "/USLife/SantaMonicaBeach.jpg", alt: "SantaMonicaBeach", href: "https://maps.app.goo.gl/tCUNAD6yYQ4MmN4JA" },
    ],
  },
  {
    id: "downtown-la",
    title: "Down Town LA",
    items: [
      { label: "小東京", name: "Small Tokyo", img: "/USLife/SmallTokyoLA.jpg", alt: "SmallTokyoLA", href: "https://maps.app.goo.gl/dbjDGRACxCuaptnY7" },
      { label: "韓國城", name: "Korea Town", img: "/USLife/KtownLA.jpg", alt: "KtownLA", href: "https://maps.app.goo.gl/LRuNfDRVTn5kY5ED6" },
      { label: "唐人街", name: "China Town", img: "/USLife/ChinatownLA.jpg", alt: "ChinatownLA", href: "https://maps.app.goo.gl/8rBhQADsNxDmrE5n7" },
    ],
  },
  {
    id: "other-cities",
    title: "Other Cities",
    items: [
      { label: "戶外購物中心", name: "The Americana", img: "/USLife/Americana.jpg", alt: "Americana", href: "https://maps.app.goo.gl/Ac9RC9bJvCwedpvG7" },
      { label: "文創歷史城區", name: "Pasadena", img: "/USLife/Pasadena.jpg", alt: "Pasadena", href: "https://maps.app.goo.gl/8ecNq4c4jy57Ax6Q9" },
      { label: "戶外購物中心", name: "Westfield Century City", img: "/USLife/westfieldCenturyCity.jpg", alt: "WestfieldCenturyCity", href: "https://maps.app.goo.gl/Uuv9SEc7UK8vnEF17" },
    ],
  },
];

export default function CocLifePage() {
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
    <div className={styles.cocLifeContainer}>
      <div className={`${styles.cocLifeSideBar} SIDEBAR`}>
        <span className={styles.cocLifeSideBarTitle}>問題主題/Topics</span>
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
      <div className={styles.cocLifeContentWrapper}>
        <h1 className={styles.cocLifeTitle} ref={cocLifeRef}>
          美國留學生活/COC
        </h1>
        <div className={styles.cocLifeContents}>
          {/*Social Life, Small Talk*/}
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={socialLifeRef}>
              <h2>社交生活</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
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
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={telephoneRef}>
              <h2>電信公司/手機</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
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
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={bankRef}>
              <h2>銀行/簽帳卡/信用卡 - Debit and Credit card</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
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
                <a
                  href="https://refer.discover.com/s/jeremy02012005?advocate.partner_share_id=9756999471"
                  target="_Blank"
                >
                  Discover it
                </a>
              </strong>
              最為第一張信用卡，不用有SSN也可以申請，且有無上限1%、季度5%現金回饋的優惠。
            </h4>
          </div>
          {/*Housing*/}
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={housingRef}>
              <h2>住宿/房子</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
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
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={transportationRef}>
              <h2>交通</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
            <div className={styles.cocLifeTransportationCards}>
              <div className={styles.cocLifeResourceCard}>
                <img
                  src="/USLife/uberandlyft.jpg"
                  alt="Campus Life"
                  className={styles.cocLifeResourceImage}
                />
                <h3 className={styles.cocLifeResourceTitle}>Uber/Lyft</h3>
                <h4> 常用的叫車app，單價偏高</h4>
              </div>

              <div className={styles.cocLifeResourceCard}>
                <img
                  src="/USLife/Santa_Clarita_Transit_127.jpg"
                  alt="Campus Life"
                  className={styles.cocLifeResourceImage}
                />
                <h3 className={styles.cocLifeResourceTitle}>公車</h3>
                <h4>學校提供公車卡，需要每月更新</h4>
              </div>

              <div className={styles.cocLifeResourceCard}>
                <img
                  src="/USLife/CADL.jpg"
                  alt="Campus Life"
                  className={styles.cocLifeResourceImage}
                />
                <h3 className={styles.cocLifeResourceTitle}>駕照/租買車</h3>
                <h4>
                  加州要重考專門的駕照喔(Class C)，要去美國的
                  <a href="https://www.dmv.ca.gov/portal/" target="_BLank">
                    監理站(DMV)
                  </a>
                </h4>
              </div>
            </div>
          </div>
          {/*Weather*/}
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={weatherRef}>
              <h2>天氣/衣物</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
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
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={shoppingRef}>
              <h2>購物/超市</h2>
            </div>
            <div className={styles.cocLifeDivider} />

            <div className={styles.cocLifeShoppingCardsWrapper}>
              {/*Target*/}
              <div className={styles.cocLifeShoppingCards}>
                <img
                  src="/USLife/Target.png"
                  alt="Target"
                  className={styles.cocLifeShoppingTag}
                />

                <div className={styles.cocLifeShoppingText}>
                  <h3>Target</h3>
                  生活用品、衣物、食品等大型購物中心，價格比較便宜，沐浴用品還有大份量的零食很划算
                </div>
              </div>
              {/*Vons*/}
              <div className={styles.cocLifeShoppingCards}>
                <img
                  src="/USLife/Vons.jpg"
                  alt="Vons"
                  className={styles.cocLifeShoppingTag}
                />

                <div className={styles.cocLifeShoppingText}>
                  <h3>Vons</h3>
                  大型連鎖超市有點像全聯，提供各種食品、日用品等，價格適中，品質可靠。
                  也有提供會員APP(一定要下載)，購物時可以享受折扣優惠。
                  牛奶、雞蛋、優格等乳製品價格便宜，還有各種新鮮的水果和蔬菜。
                </div>
              </div>
              {/*TraderJoes*/}
              <div className={styles.cocLifeShoppingCards}>
                <img
                  src="/USLife/TraderJoes.png"
                  alt="TraderJoes"
                  className={styles.cocLifeShoppingTag}
                />

                <div className={styles.cocLifeShoppingText}>
                  <h3>Trader Joe's</h3>
                  知名的有機食品超市，提供各種健康食品、零食和飲料，
                  以其獨特的產品和友善的服務聞名。有些品項價格相對較高，但品質優良。
                  <br />
                  很多冷凍食品很好吃，還有賣好吃便宜的歐式麵包/French Loaf
                </div>
              </div>
              {/*SeaFoodCityMarket*/}
              <div className={styles.cocLifeShoppingCards}>
                <img
                  src="/USLife/SeaFoodCityMarket.png"
                  alt="SeaFoodCityMarket"
                  className={styles.cocLifeShoppingTag}
                />

                <div className={styles.cocLifeShoppingText}>
                  <h3>Sea Food City Market</h3>
                  菲律賓亞洲超市，提供各種新鮮的海鮮:鮭魚、帶殼蝦、便宜和特殊肉類:牛腱、豬五花，還有大米(推富貴花米
                  - Botan Calrose)
                </div>
              </div>
              {/*Wee*/}
              <div className={styles.cocLifeShoppingCards}>
                <img
                  src="/USLife/Weee.jpg"
                  alt="Target"
                  className={styles.cocLifeShoppingTag}
                />

                <div className={styles.cocLifeShoppingText}>
                  <h3>Weee</h3>
                  北美最大的亞洲食品的線上超市，提供各種亞洲國家的食品選擇，方便購買亞洲食材。
                  尤其是不會臭的豬肉、便宜的蔬菜、蔥薑蒜等調味料，還有各種亞洲零食和飲料。
                  只要在網站上下單，Wee會將商品送到你家門口，非常方便。
                </div>
              </div>
            </div>
          </div>
          {/*Foods*/}
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={restaurantRef}>
              <h2>餐廳/飲食</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
            <h4>
              在 COC
              就讀期間，多數國際學生會選擇入住寄宿家庭（Homestay），早晚兩餐基本都有提供。需自行解決午餐，
              校內僅有一間餐廳（Cafeteria），餐點選擇較少，口味中等偏下，價格相對較高，平均每餐約
              $12 以上。
              因此，有些學生會選擇自備便當，或到附近超市購買食材與冷凍食品自行準備。
              <br />
              外食方面，餐廳價格普遍偏高，平均每餐約在 $12 至 $30
              之間，此外還需加收約 15% 起跳的小費與 9.5% 的稅金。
            </h4>
            <RestaurantExplorer locations={US_LOCATIONS} />
          </div>
          {/*Entertainment*/}
          <div className={styles.cocLifeText}>
            <div className={styles.cocLifeTopic} ref={entertainmentRef}>
              <h2>娛樂/景點</h2>
            </div>
            <div className={styles.cocLifeDivider}></div>
            <EntertainmentExplorer sections={US_ENTERTAINMENT} />
          </div>
        </div>
      </div>
      <BackToTopBotton titleRef={cocLifeRef} />
    </div>
  );
}
