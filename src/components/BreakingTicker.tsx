"use client";

const headlines = [
  "⚡ 台積電亞利桑那廠量產時程再延後，供應鏈重組爭議升溫 ——",
  "💰 二〇二六基本工資調漲方案出爐，勞資雙方激烈交鋒 ——",
  "⚖ 人工智慧監管法草案進入委員會審查，科技業強烈反彈 ——",
  "🏠 囤房稅 2.0 半年成效檢討：房價漲幅趨緩但絕對值仍創新高 ——",
  "⚡ 能源轉型核電存廢辯論再起，夏季供電亮黃燈 ——",
  "🔍 社群媒體年齡限制連署破十萬，科技業與家長團體各執一詞 ——",
];

export default function BreakingTicker() {
  const doubled = [...headlines, ...headlines];

  return (
    <div className="ticker-wrap py-2 border-b border-magic-gold/20">
      <div className="flex items-center">
        <span className="shrink-0 px-4 py-1 bg-magic-gold text-magic-ink font-display font-bold text-xs uppercase tracking-wider z-10">
          即時快訊
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap flex">
            {doubled.map((h, i) => (
              <span key={i} className="inline-block px-8 text-sm text-parchment-100 font-body">
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
