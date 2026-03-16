"use client";

interface Props {
  type: "factory" | "coins" | "eye" | "house";
  size?: number;
}

export default function MovingIllustration({ type, size = 120 }: Props) {
  const illustrations: Record<string, JSX.Element> = {
    factory: (
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <defs>
          <linearGradient id="smoke" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#8B7355" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B7355" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="20" y="50" width="35" height="50" fill="#5C4033" rx="2" />
        <rect x="60" y="35" width="30" height="65" fill="#6B4E37" rx="2" />
        {[25, 38, 51].map((y, i) => (
          <g key={i}>
            <rect x="28" y={y + 8} width="8" height="6" fill="#D4A46A" rx="1">
              <animate attributeName="opacity" values="0.6;1;0.8;1;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <rect x="40" y={y + 8} width="8" height="6" fill="#D4A46A" rx="1">
              <animate attributeName="opacity" values="1;0.7;1;0.5;1" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
            </rect>
          </g>
        ))}
        <rect x="70" y="20" width="10" height="18" fill="#4A3728" rx="1" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={75} r={5 + i * 2} fill="url(#smoke)">
            <animate attributeName="cy" values={`${18};${-10 - i * 15}`} dur={`${3 + i}s`} repeatCount="indefinite" />
            <animate attributeName="r" values={`${4 + i};${10 + i * 3}`} dur={`${3 + i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur={`${3 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <g transform="translate(95, 70)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#8B7355" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <rect key={i} x="-2" y="-13" width="4" height="6" fill="#8B7355" rx="1" transform={`rotate(${angle})`} />
          ))}
          <animateTransform attributeName="transform" type="rotate" from="0 95 70" to="360 95 70" dur="6s" repeatCount="indefinite" />
        </g>
        <line x1="10" y1="100" x2="110" y2="100" stroke="#5C4033" strokeWidth="1.5" />
      </svg>
    ),
    coins: (
      <svg viewBox="0 0 120 120" width={size} height={size}>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <ellipse cx={45} cy={85 - i * 8} rx="22" ry="6" fill={i % 2 === 0 ? "#C5A55A" : "#B8963E"} stroke="#8B7355" strokeWidth="0.5">
              <animate attributeName="cy" values={`${85 - i * 8};${83 - i * 8};${85 - i * 8}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
            </ellipse>
            <text x="45" y={87 - i * 8} textAnchor="middle" fontSize="6" fill="#5C4033" fontWeight="bold" fontFamily="serif">$</text>
          </g>
        ))}
        <g>
          <ellipse cx="80" cy="20" rx="12" ry="4" fill="#C5A55A" stroke="#8B7355" strokeWidth="0.5">
            <animate attributeName="cy" values="15;90;15" dur="3s" repeatCount="indefinite" keyTimes="0;0.6;1" />
            <animate attributeName="ry" values="4;1;4" dur="3s" repeatCount="indefinite" keyTimes="0;0.3;1" />
          </ellipse>
        </g>
        <line x1="85" y1="55" x2="85" y2="100" stroke="#8B7355" strokeWidth="1.5" />
        <line x1="70" y1="58" x2="100" y2="52" stroke="#8B7355" strokeWidth="1.5">
          <animate attributeName="y1" values="58;54;58" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="52;56;52" dur="4s" repeatCount="indefinite" />
        </line>
        <circle cx="70" cy="62" r="5" fill="none" stroke="#8B7355" strokeWidth="1">
          <animate attributeName="cy" values="62;58;62" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="56" r="5" fill="none" stroke="#8B7355" strokeWidth="1">
          <animate attributeName="cy" values="56;60;56" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <g transform="translate(60, 55)">
          <ellipse cx="0" cy="0" rx="35" ry="20" fill="none" stroke="#5C4033" strokeWidth="1.5">
            <animate attributeName="ry" values="20;8;20" dur="4s" repeatCount="indefinite" keyTimes="0;0.15;1" />
          </ellipse>
          <circle cx="0" cy="0" r="12" fill="#8B7355" stroke="#5C4033" strokeWidth="1">
            <animate attributeName="r" values="12;5;12" dur="4s" repeatCount="indefinite" keyTimes="0;0.15;1" />
          </circle>
          <circle cx="0" cy="0" r="5" fill="#2C1810">
            <animate attributeName="cx" values="0;4;-3;2;0" dur="6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="0;-2;1;-1;0" dur="6s" repeatCount="indefinite" />
            <animate attributeName="r" values="5;2;5" dur="4s" repeatCount="indefinite" keyTimes="0;0.15;1" />
          </circle>
          <circle cx="3" cy="-3" r="2" fill="white" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite" keyTimes="0;0.15;1" />
          </circle>
        </g>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line key={i} x1="60" y1="55" x2={60 + Math.cos((angle * Math.PI) / 180) * 50} y2={55 + Math.sin((angle * Math.PI) / 180) * 50} stroke="#8B7355" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${2 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
          </line>
        ))}
        {[0, 1, 2].map((i) => (
          <text key={i} x={20 + i * 30} y="105" fontSize="7" fill="#8B7355" fontFamily="monospace" opacity="0.4">
            <animate attributeName="opacity" values="0;0.5;0" dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
            {["01101", "10010", "11001"][i]}
          </text>
        ))}
      </svg>
    ),
    house: (
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <rect x="25" y="55" width="50" height="40" fill="#7A6048" stroke="#5C4033" strokeWidth="1" rx="1" />
        <polygon points="20,55 50,25 80,55" fill="#5C4033" stroke="#4A3728" strokeWidth="1" />
        <rect x="42" y="70" width="16" height="25" fill="#4A3728" rx="8" />
        <circle cx="54" cy="83" r="1.5" fill="#C5A55A" />
        <rect x="30" y="62" width="10" height="10" fill="#D4A46A" rx="1">
          <animate attributeName="fill" values="#D4A46A;#E8C088;#D4A46A" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="60" y="62" width="10" height="10" fill="#D4A46A" rx="1">
          <animate attributeName="fill" values="#E8C088;#D4A46A;#E8C088" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <line x1="35" y1="62" x2="35" y2="72" stroke="#5C4033" strokeWidth="0.5" />
        <line x1="30" y1="67" x2="40" y2="67" stroke="#5C4033" strokeWidth="0.5" />
        <line x1="65" y1="62" x2="65" y2="72" stroke="#5C4033" strokeWidth="0.5" />
        <line x1="60" y1="67" x2="70" y2="67" stroke="#5C4033" strokeWidth="0.5" />
        <rect x="62" y="28" width="8" height="15" fill="#5C4033" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={66} r={3 + i} fill="#8B7355" opacity="0.3">
            <animate attributeName="cy" values={`${26};${5 - i * 8}`} dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0" dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" />
            <animate attributeName="r" values={`${3 + i};${6 + i * 2}`} dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <g transform="translate(95, 40)">
          <animateTransform attributeName="transform" type="rotate" values="-5 95 30;5 95 30;-5 95 30" dur="2s" repeatCount="indefinite" />
          <line x1="0" y1="0" x2="0" y2="15" stroke="#8B7355" strokeWidth="0.8" />
          <rect x="-10" y="15" width="20" height="14" fill="#F5E6C8" stroke="#8B7355" strokeWidth="0.5" rx="2" />
          <text x="0" y="25" textAnchor="middle" fontSize="7" fill="#8B0000" fontWeight="bold" fontFamily="serif">$$</text>
        </g>
        <line x1="10" y1="95" x2="85" y2="95" stroke="#5C4033" strokeWidth="1" strokeDasharray="3,2" />
      </svg>
    ),
  };

  return (
    <div className="border-2 border-magic-gold/60 rounded-sm p-2 flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #F5E6C8 0%, #E8D5B0 100%)", boxShadow: "inset 0 0 20px rgba(139,115,85,0.15)" }}>
      {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
        <div key={v+h} className="absolute w-2.5 h-2.5" style={{
          [v]: 3, [h]: 3,
          borderTop: v === "top" ? "1.5px solid #8B7355" : "none",
          borderBottom: v === "bottom" ? "1.5px solid #8B7355" : "none",
          borderLeft: h === "left" ? "1.5px solid #8B7355" : "none",
          borderRight: h === "right" ? "1.5px solid #8B7355" : "none",
        }} />
      ))}
      {illustrations[type]}
    </div>
  );
}
