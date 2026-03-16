export interface MediaSource {
  name: string;
  bias: "left" | "center" | "right";
  take: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: string;
  categoryIcon: string;
  date: string;
  readTime: string;
  featured?: boolean;
  breaking?: boolean;
  tags: string[];
  heat: number;
  votes: number;
  illustration: "factory" | "coins" | "eye" | "house";
  aiVerdict: string;
  biasBreakdown: { left: number; center: number; right: number };
  sources: MediaSource[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: "tech-industry", name: "科技產業", description: "半導體、AI、科技公司動態", icon: "⚡" },
  { slug: "economy", name: "經濟民生", description: "物價、薪資、房市、金融", icon: "💰" },
  { slug: "politics", name: "政策法規", description: "政府政策、立法動態、國際關係", icon: "⚖" },
  { slug: "society", name: "社會觀察", description: "教育、醫療、環境、文化", icon: "🔍" },
];

export const articles: Article[] = [
  {
    slug: "tsmc-us-expansion-supply-chain",
    title: "台積電赴美設廠引發供應鏈重組爭議",
    subtitle: "半導體巨擘海外佈局牽動兩岸三地政經角力",
    excerpt: "台積電亞利桑那廠量產時程再度推遲，引發各界對技術外流、成本攀升及地緣政治風險的激烈辯論。不同媒體從截然不同的角度解讀此一事件。",
    content: `台積電亞利桑那廠原定今年開始量產先進製程晶片，但近期傳出時程可能再延後六至九個月。這項消息讓原本就爭議不斷的赴美設廠議題再度升溫。

支持者認為，台積電赴美設廠是分散地緣政治風險的必要之舉，能強化與美國的戰略合作關係。美國政府透過《晶片法案》提供的補貼，也被視為對台灣半導體產業的長期保障。

然而反對者指出，美國的人力成本是台灣的三到五倍，且當地缺乏完整的半導體供應鏈生態系。更有學者警告，將最先進的製程技術帶到海外，等同於自願交出台灣最重要的戰略籌碼。

工會方面則關注勞工權益問題，批評台積電將「台式管理文化」——包括長工時與高壓環境——帶到美國，引發當地員工不滿。已有多名美國工程師在社群媒體上分享在台積電工作的負面經驗。

財務分析師估計，亞利桑那廠的生產成本可能比台灣高出至少 50%，這將直接影響台積電的毛利率表現。投資人對此表示擔憂，近期台積電股價波動加劇。`,
    category: "tech-industry",
    categoryIcon: "⚡",
    date: "2026-03-16",
    readTime: "8 分鐘",
    featured: true,
    breaking: true,
    tags: ["台積電", "半導體", "美國", "供應鏈"],
    heat: 94,
    votes: 1842,
    illustration: "factory",
    aiVerdict: "多數媒體聚焦於地緣政治角度，偏左媒體強調勞工權益與技術外流風險，偏右媒體則著重於國際競爭力與經濟效益。中立媒體以數據為主軸呈現。各方報導均有事實基礎，但選擇性呈現的傾向明顯。",
    biasBreakdown: { left: 35, center: 40, right: 25 },
    sources: [
      { name: "自由時報", bias: "left", take: "憂心技術外流，質疑美方真實意圖，強調勞工遭壓榨" },
      { name: "聯合報", bias: "right", take: "肯定國際佈局，強調外交戰略價值與經濟互惠" },
      { name: "公視新聞", bias: "center", take: "引述雙方數據，平衡呈現成本分析與地緣政治考量" },
    ],
  },
  {
    slug: "minimum-wage-2026-debate",
    title: "二〇二六年基本工資調漲方案出爐",
    subtitle: "勞資攻防再起，中小企業主疾呼喘息空間",
    excerpt: "行政院公布新年度基本工資調整方案，月薪調漲至 28,590 元。勞工團體認為漲幅不足，工商團體則警告中小企業面臨存亡危機。",
    content: `行政院正式公布 2026 年基本工資調整方案，月薪從目前的 27,470 元調漲至 28,590 元，漲幅約 4.07%。時薪則從 183 元調漲至 190 元。

勞工團體第一時間發表聲明，批評漲幅遠低於實際物價漲幅，「根本追不上房租和食物的漲價速度」。全國產業總工會理事長指出，以台北市的生活成本計算，月薪至少要達到 32,000 元才能維持基本尊嚴生活。

另一邊，中小企業總會則在漲幅公布後緊急召開記者會，會長語帶哽咽地表示：「很多夜市攤商一個月利潤不到五萬，再漲下去真的只能收攤。」工商團體擔心持續調漲將加速通膨循環，並迫使更多企業轉向自動化或外移。

經濟學者的看法也分歧明顯。支持調漲派認為，提高基本工資能刺激內需消費，帶動經濟良性循環。反對派則擔憂，在全球經濟放緩的背景下，大幅調漲基本工資恐怕適得其反。

值得注意的是，不同媒體在報導這則新聞時，引用的專家、數據和案例截然不同，呈現出完全不同的敘事框架。`,
    category: "economy",
    categoryIcon: "💰",
    date: "2026-03-16",
    readTime: "6 分鐘",
    featured: true,
    tags: ["基本工資", "勞工", "物價", "中小企業"],
    heat: 78,
    votes: 1256,
    illustration: "coins",
    aiVerdict: "勞資雙方立場分歧明顯。偏左媒體傾向支持調漲以保障勞工生活水準，偏右媒體擔憂中小企業營運負擔加重，中立媒體著重歷年數據比較與經濟模型分析。注意各媒體選擇性引用專家的現象。",
    biasBreakdown: { left: 45, center: 30, right: 25 },
    sources: [
      { name: "鏡週刊", bias: "left", take: "主張調漲幅度仍不足以應付物價，引述勞工困境案例" },
      { name: "經濟日報", bias: "right", take: "警告通膨壓力與企業出走風險，引述企業主心聲" },
      { name: "中央社", bias: "center", take: "整理歷年數據與各方正式回應，不下結論" },
    ],
  },
  {
    slug: "ai-regulation-bill-controversy",
    title: "人工智慧監管法草案引發科技業強烈反彈",
    subtitle: "創新與規範之間的永恆拉鋸，立院本會期重頭戲",
    excerpt: "行政院提出《人工智慧基本法》草案，要求 AI 系統須通過安全審查並揭露訓練資料來源。科技業警告將扼殺創新，公民團體則呼籲更強力的監管。",
    content: `立法院本會期最受矚目的法案之一——《人工智慧基本法》草案，在經過數月的爭論後終於進入委員會審查階段。草案核心要求包括：高風險 AI 系統須經政府審查、演算法決策須可解釋、訓練資料來源須揭露。

科技業界反應強烈。台灣 AI 產業協會發表聯合聲明，批評草案「過度管制將使台灣在全球 AI 競賽中落後」。多家新創公司創辦人警告，嚴格的合規成本將迫使小型公司關門或外移，「受傷最重的不是大公司，而是正在車庫裡創業的年輕人」。

然而，公民團體持完全相反的看法。台灣人權促進會指出，已有多起 AI 演算法導致歧視的案例——包括求職平台的性別偏見、信用評分系統對特定族群的不公平對待。「我們不能等到傷害擴大才來補救。」

國際比較也成為爭論焦點。支持監管者引用歐盟 AI Act 為範例，反對者則以美國的寬鬆態度為標杆，各取所需。

學界的看法則更為細緻。台大資工系教授指出，「問題不在要不要管，而在怎麼管」，呼籲採取「監管沙盒」模式，讓新技術有實驗空間。`,
    category: "politics",
    categoryIcon: "⚖",
    date: "2026-03-15",
    readTime: "7 分鐘",
    featured: true,
    tags: ["AI", "監管", "科技", "隱私", "立法"],
    heat: 85,
    votes: 967,
    illustration: "eye",
    aiVerdict: "科技業界普遍反對過度監管，公民團體則呼籲保護隱私與演算法透明。報導角度與媒體既有立場高度相關。偏左媒體關注弱勢族群權益，偏右媒體關注產業競爭力，各有盲點。建議讀者對照閱讀。",
    biasBreakdown: { left: 30, center: 35, right: 35 },
    sources: [
      { name: "報導者", bias: "left", take: "深入調查演算法歧視與隱私侵害案例，呼籲強力監管" },
      { name: "工商時報", bias: "right", take: "擔憂扼殺新創競爭力與國際資金，主張產業自律" },
      { name: "公視新聞", bias: "center", take: "邀請雙方代表對談，呈現完整論述與國際比較" },
    ],
  },
  {
    slug: "housing-tax-reform-review",
    title: "囤房稅 2.0 實施半年成效檢討",
    subtitle: "居住正義路迢迢，房市降溫抑或假象？",
    excerpt: "囤房稅新制上路半年，六都房價漲幅趨緩但並未下跌。支持者稱政策已見效，反對者質疑只是讓交易量萎縮而非真正降價。",
    content: `囤房稅 2.0 上路滿半年，財政部公布最新統計數據。全國適用差別稅率的多屋族約 53 萬戶，預估增加稅收約 26 億元。數字背後，各方解讀天差地別。

從房價數據來看，六都住宅中位數價格較去年同期漲幅收斂至 2.1%，相比前年動輒 10% 以上的漲幅確實明顯降溫。然而，房價的「絕對值」仍處於歷史高點，台北市中古屋均價每坪仍超過 70 萬元。

支持居住正義的團體認為，政策方向正確但力道不足。「對真正的投機客來說，區區幾萬元的稅負根本不痛不癢。」巢運發言人呼籲，應進一步提高稅率至 5% 以上，並搭配實價課稅。

房地產業界則完全不同調。不動產公會指出，交易量已萎縮近兩成，「整條產業鏈——從仲介、代書到裝潢業——都在裁員」。部分建商更將責任指向政策不確定性：「不是房子賣不掉，是大家都在觀望，整個市場凍住了。」

年輕世代的聲音也值得關注。一項針對 25-35 歲族群的調查顯示，78% 受訪者認為「不管政府怎麼打房，自己這輩子都買不起台北的房子」。`,
    category: "economy",
    categoryIcon: "💰",
    date: "2026-03-15",
    readTime: "6 分鐘",
    tags: ["囤房稅", "房市", "居住正義", "房價"],
    heat: 88,
    votes: 2103,
    illustration: "house",
    aiVerdict: "偏左媒體認為成效不彰需加強力道，以年輕人買不起房的案例訴諸情感。偏右媒體主張已衝擊市場正常運作與民眾財產權，以產業鏈受損為論述核心。中立媒體傾向以交易數據呈現，但「降溫」或「凍結」的用詞選擇仍反映立場差異。",
    biasBreakdown: { left: 50, center: 25, right: 25 },
    sources: [
      { name: "自由時報", bias: "left", take: "批評稅率仍過低，呼籲加碼打擊投機，聚焦青年困境" },
      { name: "聯合報", bias: "right", take: "指出交易量萎縮已衝擊相關產業鏈，憂心經濟連鎖效應" },
      { name: "公視新聞", bias: "center", take: "引用財政部統計與學者模型分析，呈現多方觀點" },
    ],
  },
  {
    slug: "energy-transition-nuclear-debate",
    title: "能源轉型路線之爭：核電存廢再掀波瀾",
    subtitle: "夏季用電尖峰將至，供電穩定與碳排目標如何兼顧？",
    excerpt: "經濟部發布夏季電力供需預測，備轉容量率亮出黃燈警戒。擁核與反核陣營同時聲量大增，能源政策再成政治攻防焦點。",
    content: `經濟部公布今年夏季電力供需預測報告，預估 7-8 月尖峰用電期間備轉容量率可能降至 7% 以下的黃燈警戒區間，引發各界對供電穩定的擔憂。

擁核派立刻抓住機會發動攻勢。前核能學者指出，若核二、核三廠延役，可立刻增加約 300 萬瓩的穩定供電，「這是最快、最便宜解決缺電危機的方法」。民調也顯示，支持「在確保安全前提下使用核電」的比例已超過六成。

反核陣營則堅持，台灣的核電廠位於地震帶，安全風險不可輕忽。環保團體強調，再生能源的裝置容量正在快速成長，太陽能加風電已占總發電量近 12%，「只要加速綠能建設與儲能系統，完全不需要核電」。

產業界的立場則更為務實。工總秘書長表示，「企業不在乎電從哪裡來，只在乎穩不穩定、價格合不合理」，呼籲政府拿出明確的能源路線圖。

值得注意的是，各家媒體在報導此議題時，選擇引用的數據、專家和案例有顯著差異，形成各自的「資訊繭房」。`,
    category: "politics",
    categoryIcon: "⚖",
    date: "2026-03-14",
    readTime: "7 分鐘",
    tags: ["能源", "核電", "再生能源", "供電"],
    heat: 82,
    votes: 1543,
    illustration: "factory",
    aiVerdict: "高度政治化議題。偏左媒體傾向反核、支持再生能源，偏右媒體傾向務實擁核。中立媒體嘗試呈現完整數據但用詞仍有微妙差異。各方都有選擇性引用數據的現象。建議讀者同時閱讀支持與反對雙方的完整論述。",
    biasBreakdown: { left: 40, center: 30, right: 30 },
    sources: [
      { name: "自由時報", bias: "left", take: "強調核安風險與再生能源進展，批評擁核派忽視安全" },
      { name: "中國時報", bias: "right", take: "聚焦缺電危機與產業需求，主張核電延役是務實選擇" },
      { name: "中央社", bias: "center", take: "並列雙方數據與論點，引述國際能源署報告作為參考" },
    ],
  },
  {
    slug: "social-media-youth-mental-health",
    title: "社群媒體與青少年心理健康：政府該介入嗎？",
    subtitle: "澳洲立法禁止 16 歲以下使用社群，台灣家長團體呼籲跟進",
    excerpt: "繼澳洲通過社群媒體年齡限制法案後，台灣家長團體發起連署要求政府跟進。科技業與人權團體各執一詞，教育現場的聲音卻鮮少被聽見。",
    content: `澳洲去年底通過全球最嚴格的社群媒體年齡限制法案後，台灣家長團體「守護下一代聯盟」隨即發起連署，短短兩週已突破十萬份，要求政府比照立法禁止 16 歲以下使用 Instagram、TikTok 等社群平台。

支持限制的一方提出驚人數據：台灣 13-17 歲青少年每日平均使用社群媒體超過 3.5 小時，而同年齡層的憂鬱症就診率在五年內增加了 67%。兒童精神科醫師警告，社群媒體的「比較文化」和「按讚焦慮」對發展中的大腦造成不可逆的傷害。

科技業界強烈反對。Meta 和 TikTok 的台灣代表均表示，技術性的年齡驗證將侵犯所有用戶的隱私，且容易被規避。數位權利組織也擔憂，「以保護之名行監控之實」，將為政府日後擴大網路管制開先例。

教育工作者的觀點提供了另一個視角。一位國中教師投書指出：「問題不在社群媒體本身，而在我們沒有教會孩子如何使用它。禁止只會讓他們轉入更難監管的地下管道。」

跨國比較也顯示，這個議題沒有簡單答案。歐盟傾向要求平台負責，美國各州立法標準不一，日本則採取業界自律模式。`,
    category: "society",
    categoryIcon: "🔍",
    date: "2026-03-14",
    readTime: "6 分鐘",
    tags: ["社群媒體", "青少年", "心理健康", "監管"],
    heat: 76,
    votes: 987,
    illustration: "eye",
    aiVerdict: "偏左媒體關注兒少保護與企業責任，傾向支持政府管制。偏右媒體擔憂言論自由與過度管制，傾向產業自律。中立媒體試圖呈現教育現場的真實聲音，但篇幅有限。注意各方都用「為了孩子好」作為論述起點，但結論截然不同。",
    biasBreakdown: { left: 40, center: 35, right: 25 },
    sources: [
      { name: "鏡週刊", bias: "left", take: "深入報導青少年憂鬱案例，呼籲政府正視平台責任" },
      { name: "數位時代", bias: "right", take: "分析禁令的技術不可行性，主張數位素養教育才是正途" },
      { name: "公視新聞", bias: "center", take: "訪問精神科醫師、教師與家長，呈現多元觀點" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
