'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   PHILOSOPHY SUBTERRANEAN DIORAMA (Section 5 Context)
   Theme: "What is unseen nourishes what blooms" (ما لا يُرى هو ما يُثمر).
   • Canopy above: Olive branches under the starlit sky with gentle wind
   • Subterranean below: Deep intertwining golden roots, mineral veins,
     rising phosphorescent sap particles
───────────────────────────────────────────────────────────────────────────── */

export default function PhilosophyDiorama() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rootGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9DDB0" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#8BA66E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5B7344" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="groundMist" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A4BA8E" stopOpacity="0" />
            <stop offset="50%" stopColor="#A4BA8E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#A4BA8E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── TOP: NIGHT CANOPY & STARS ──────────────────────────────────── */}
        {/* Distant stars */}
        {[
          { cx: 850, cy: 50, r: 1.8 },
          { cx: 720, cy: 80, r: 2.2 },
          { cx: 920, cy: 110, r: 1.5 },
          { cx: 640, cy: 60, r: 2.0 },
          { cx: 810, cy: 130, r: 1.6 },
          { cx: 580, cy: 110, r: 1.8 },
          { cx: 960, cy: 40, r: 2.4 },
        ].map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#EAF0DF"
            opacity="0.45"
            className="animate-pulse"
            style={{ animationDuration: `${3 + (i % 3)}s` }}
          />
        ))}

        {/* Canopy olive leaves in top corner */}
        <g opacity="0.3" fill="#6A8554">
          <ellipse cx="880" cy="80" rx="28" ry="10" transform="rotate(-20 880 80)" />
          <ellipse cx="910" cy="95" rx="25" ry="9" transform="rotate(-40 910 95)" />
          <ellipse cx="850" cy="95" rx="30" ry="11" transform="rotate(10 850 95)" />
          <ellipse cx="820" cy="110" rx="26" ry="10" transform="rotate(-15 820 110)" />
          <ellipse cx="870" cy="120" rx="32" ry="12" transform="rotate(25 870 120)" />
        </g>

        {/* ── MIDDLE: GROUND LEVEL THRESHOLD ─────────────────────────────── */}
        <line
          x1="0"
          y1="240"
          x2="1000"
          y2="240"
          stroke="#425539"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          opacity="0.5"
        />
        <rect x="0" y="235" width="1000" height="10" fill="url(#groundMist)" />

        {/* ── BOTTOM: DEEP GLOWING SUBTERRANEAN ROOT NETWORK ─────────────── */}
        <g stroke="url(#rootGoldGrad)" fill="none" strokeLinecap="round">
          {/* Main trunk root anchor descending from ground */}
          <path
            d="M 850 240 C 840 280 820 330 800 380 C 780 430 750 490 730 560"
            strokeWidth="5"
          />
          {/* Spreading deep underground lateral roots */}
          <path
            d="M 845 270 C 760 300 680 340 590 380 C 510 420 420 460 320 500"
            strokeWidth="3.8"
          />
          <path
            d="M 810 350 C 720 380 630 420 540 450 C 460 480 370 510 270 540"
            strokeWidth="2.8"
          />
          <path
            d="M 680 340 C 600 370 520 400 450 430 C 370 460 290 500 200 540"
            strokeWidth="2.2"
          />
          <path
            d="M 590 380 C 530 420 470 460 400 490 C 330 520 250 550 160 580"
            strokeWidth="1.8"
          />
          {/* Fine rootlets reaching towards the left */}
          <path
            d="M 450 430 C 380 470 310 500 240 530 C 170 560 90 580 0 590"
            strokeWidth="1.5"
          />
          <path
            d="M 540 450 C 470 480 410 520 340 550"
            strokeWidth="1.6"
          />
          <path
            d="M 780 430 C 720 470 660 520 600 560"
            strokeWidth="2.2"
          />
        </g>

        {/* Phosphorescent Sap Nodes (Glowing living signals) */}
        {[
          { cx: 845, cy: 260, r: 4.5, delay: '0s' },
          { cx: 770, cy: 300, r: 4.0, delay: '1.2s' },
          { cx: 690, cy: 340, r: 3.8, delay: '2.0s' },
          { cx: 600, cy: 380, r: 3.5, delay: '0.8s' },
          { cx: 520, cy: 420, r: 3.2, delay: '2.5s' },
          { cx: 430, cy: 460, r: 3.0, delay: '1.6s' },
          { cx: 330, cy: 500, r: 2.8, delay: '3.0s' },
          { cx: 800, cy: 380, r: 4.2, delay: '0.4s' },
          { cx: 740, cy: 470, r: 3.5, delay: '1.8s' },
          { cx: 610, cy: 540, r: 3.0, delay: '2.2s' },
        ].map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.5}
              fill="#A2C785"
              fillOpacity="0.2"
              className="animate-ping"
              style={{ animationDuration: '4.2s', animationDelay: node.delay }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#CDE5B5"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(186, 222, 150, 0.9))',
              }}
            />
          </g>
        ))}

        {/* Rising phosphorescent nutrient spores (subterranean energy rising) */}
        {[
          { cx: 450, cy: 350, r: 2, delay: '0s' },
          { cx: 580, cy: 310, r: 2.5, delay: '1.5s' },
          { cx: 720, cy: 260, r: 2.2, delay: '2.8s' },
          { cx: 360, cy: 410, r: 1.8, delay: '3.6s' },
        ].map((spore, i) => (
          <circle
            key={i}
            cx={spore.cx}
            cy={spore.cy}
            r={spore.r}
            fill="#E0F2D0"
            opacity="0.6"
            className="animate-bounce"
            style={{ animationDuration: '5s', animationDelay: spore.delay }}
          />
        ))}
      </svg>
    </div>
  );
}
