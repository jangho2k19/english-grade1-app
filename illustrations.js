// Thư viện hình vẽ vector minh họa sống động, rực rỡ cho 64 từ vựng Tiếng Anh Lớp 1 (Global Success)
const VOCAB_ILLUSTRATIONS = {
  // UNIT 1: Bb
  "ball": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <circle cx="50" cy="50" r="42" fill="#FF5E62" />
    <circle cx="50" cy="50" r="42" fill="url(#grad-ball)" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="#FFFFFF" stroke-width="4"/>
    <path d="M50 10 L50 90 M10 50 L90 50" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
    <path d="M22 22 Q50 40 78 22" fill="none" stroke="#FFE66D" stroke-width="5" stroke-linecap="round"/>
    <path d="M22 78 Q50 60 78 78" fill="none" stroke="#FFE66D" stroke-width="5" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="12" fill="#4ECDC4" stroke="#FFFFFF" stroke-width="3"/>
    <circle cx="35" cy="35" r="4" fill="#FFFFFF" opacity="0.8"/>
    <defs><radialGradient id="grad-ball" cx="35%" cy="35%"><stop offset="0%" stop-color="#FF9966"/><stop offset="100%" stop-color="#FF5E62"/></radialGradient></defs>
  </svg>`,

  "bike": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <circle cx="28" cy="68" r="18" fill="none" stroke="#374151" stroke-width="5"/>
    <circle cx="28" cy="68" r="14" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
    <circle cx="28" cy="68" r="4" fill="#4ECDC4"/>
    <circle cx="72" cy="68" r="18" fill="none" stroke="#374151" stroke-width="5"/>
    <circle cx="72" cy="68" r="14" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
    <circle cx="72" cy="68" r="4" fill="#4ECDC4"/>
    <!-- Bike frame -->
    <path d="M28 68 L46 44 L68 44 L72 68 M46 44 L52 68 M52 68 L28 68" fill="none" stroke="#FF4757" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M68 44 L72 32 L66 30" fill="none" stroke="#2ED573" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43 40 L50 40" stroke="#2F3542" stroke-width="6" stroke-linecap="round"/>
    <!-- Cute bell basket -->
    <rect x="68" y="34" width="10" height="9" rx="2" fill="#FFA502" />
  </svg>`,

  "book": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <path d="M12 25 C30 20 45 28 50 32 C55 28 70 20 88 25 L88 75 C70 70 55 78 50 82 C45 78 30 70 12 75 Z" fill="#4A90E2"/>
    <path d="M14 27 C30 22 45 30 50 34 C55 30 70 22 86 27 L86 73 C70 68 55 76 50 80 C45 76 30 68 14 73 Z" fill="#FFFDF0"/>
    <line x1="50" y1="34" x2="50" y2="80" stroke="#E2E8F0" stroke-width="2"/>
    <!-- Book lines -->
    <line x1="22" y1="40" x2="42" y2="40" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="50" x2="40" y2="50" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="60" x2="38" y2="60" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="58" y1="40" x2="78" y2="40" stroke="#2ECC71" stroke-width="3" stroke-linecap="round"/>
    <line x1="58" y1="50" x2="76" y2="50" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="58" y1="60" x2="74" y2="60" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <!-- Bookmark ribbon -->
    <path d="M50 32 L50 65 L46 60 L42 65 L42 32" fill="#FF4757"/>
  </svg>`,

  "Bill": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Boy face -->
    <circle cx="50" cy="50" r="32" fill="#FFDFBA"/>
    <!-- Cap -->
    <path d="M22 46 C22 26 40 20 56 20 C72 20 78 30 78 46 Z" fill="#3B82F6"/>
    <path d="M52 26 C68 26 84 32 88 38 C75 42 62 38 52 26 Z" fill="#2563EB"/>
    <!-- Eyes -->
    <circle cx="38" cy="52" r="4.5" fill="#1F2937"/>
    <circle cx="62" cy="52" r="4.5" fill="#1F2937"/>
    <circle cx="40" cy="50" r="1.5" fill="#FFFFFF"/>
    <circle cx="64" cy="50" r="1.5" fill="#FFFFFF"/>
    <!-- Cheeks -->
    <circle cx="32" cy="60" r="4" fill="#FF8A80" opacity="0.6"/>
    <circle cx="68" cy="60" r="4" fill="#FF8A80" opacity="0.6"/>
    <!-- Big cute smile -->
    <path d="M42 64 Q50 72 58 64" fill="none" stroke="#B91C1C" stroke-width="3.5" stroke-linecap="round"/>
    <!-- T-shirt collar -->
    <path d="M30 80 Q50 92 70 80 L76 96 L24 96 Z" fill="#10B981"/>
  </svg>`,

  // UNIT 2: Cc
  "cake": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Cake layers -->
    <rect x="20" y="55" width="60" height="28" rx="6" fill="#F472B6"/>
    <rect x="25" y="38" width="50" height="22" rx="5" fill="#FBCFE8"/>
    <!-- White frosting drips -->
    <path d="M25 45 Q31 52 37 45 Q43 52 50 45 Q57 52 63 45 Q69 52 75 45 L75 38 L25 38 Z" fill="#FFFFFF"/>
    <path d="M20 62 Q27 70 35 62 Q42 70 50 62 Q57 70 65 62 Q72 70 80 62 L80 55 L20 55 Z" fill="#FDF2F8"/>
    <!-- Strawberry on top -->
    <circle cx="50" cy="28" r="8" fill="#EF4444"/>
    <path d="M50 20 L48 16 M50 20 L52 16" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
    <circle cx="48" cy="27" r="1" fill="#FEF08A"/>
    <circle cx="52" cy="29" r="1" fill="#FEF08A"/>
    <!-- Plate -->
    <ellipse cx="50" cy="85" rx="38" ry="6" fill="#E2E8F0"/>
  </svg>`,

  "car": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Car body -->
    <path d="M15 62 L20 48 C22 42 28 36 36 34 L64 34 C72 36 78 42 80 48 L86 56 C89 57 91 60 91 64 L91 70 C91 73 89 74 86 74 L14 74 C11 74 9 72 9 68 L9 65 C9 63 12 62 15 62 Z" fill="#EF4444"/>
    <!-- Windows -->
    <path d="M35 38 L48 38 L48 50 L27 50 C29 44 33 39 35 38 Z" fill="#67E8F9"/>
    <path d="M52 38 L65 38 C68 40 71 45 73 50 L52 50 Z" fill="#67E8F9"/>
    <!-- Wheels -->
    <circle cx="28" cy="74" r="11" fill="#1F2937"/>
    <circle cx="28" cy="74" r="5" fill="#E5E7EB"/>
    <circle cx="72" cy="74" r="11" fill="#1F2937"/>
    <circle cx="72" cy="74" r="5" fill="#E5E7EB"/>
    <!-- Headlight -->
    <circle cx="88" cy="63" r="3" fill="#FBBF24"/>
  </svg>`,

  "cat": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Ears -->
    <polygon points="26,38 32,16 48,30" fill="#F97316"/>
    <polygon points="30,34 35,22 44,30" fill="#FDE047"/>
    <polygon points="74,38 68,16 52,30" fill="#F97316"/>
    <polygon points="70,34 65,22 56,30" fill="#FDE047"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="30" ry="26" fill="#FB923C"/>
    <!-- Eyes -->
    <ellipse cx="40" cy="48" rx="4" ry="5.5" fill="#065F46"/>
    <circle cx="41" cy="46" r="1.5" fill="#FFFFFF"/>
    <ellipse cx="60" cy="48" rx="4" ry="5.5" fill="#065F46"/>
    <circle cx="61" cy="46" r="1.5" fill="#FFFFFF"/>
    <!-- Nose & Mouth -->
    <polygon points="50,56 47,53 53,53" fill="#EC4899"/>
    <path d="M46 58 Q50 62 50 56 Q50 62 54 58" fill="none" stroke="#7C2D12" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Whiskers -->
    <line x1="34" y1="53" x2="16" y2="50" stroke="#7C2D12" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="34" y1="58" x2="18" y2="61" stroke="#7C2D12" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="66" y1="53" x2="84" y2="50" stroke="#7C2D12" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="66" y1="58" x2="82" y2="61" stroke="#7C2D12" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "cup": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Cup body -->
    <path d="M22 36 L28 72 C30 78 38 82 50 82 C62 82 70 78 72 72 L78 36 Z" fill="#06B6D4"/>
    <!-- Pattern heart on cup -->
    <path d="M50 54 A3 3 0 0 0 46 50 A3 3 0 0 0 43 54 Q43 58 50 64 Q57 58 57 54 A3 3 0 0 0 54 50 A3 3 0 0 0 50 54 Z" fill="#FEE2E2"/>
    <!-- Handle -->
    <path d="M74 42 C86 42 88 64 71 66" fill="none" stroke="#0891B2" stroke-width="6" stroke-linecap="round"/>
    <!-- Steam -->
    <path d="M40 28 Q44 20 40 14" fill="none" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 28 Q54 18 50 12" fill="none" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 28 Q64 20 60 14" fill="none" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
    <!-- Saucer -->
    <ellipse cx="50" cy="85" rx="34" ry="5" fill="#E2E8F0"/>
  </svg>`,

  // UNIT 3: Aa
  "apple": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Apple body -->
    <path d="M50 32 C38 18 18 26 18 46 C18 72 38 84 50 84 C62 84 82 72 82 46 C82 26 62 18 50 32 Z" fill="#EF4444"/>
    <!-- Stem & Leaf -->
    <path d="M50 32 Q52 18 58 14" fill="none" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
    <path d="M54 22 C64 16 72 20 70 26 C60 28 56 24 54 22 Z" fill="#22C55E"/>
    <!-- Highlight shine -->
    <path d="M28 38 C24 44 24 54 26 60" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

  "bag": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Backpack body -->
    <path d="M24 40 C24 24 35 18 50 18 C65 18 76 24 76 40 L78 76 C78 82 72 86 66 86 L34 86 C28 86 22 82 22 76 Z" fill="#8B5CF6"/>
    <!-- Front pocket -->
    <rect x="30" y="52" width="40" height="26" rx="6" fill="#A78BFA"/>
    <line x1="32" y1="58" x2="68" y2="58" stroke="#FDE047" stroke-width="3"/>
    <!-- Straps handle -->
    <path d="M40 18 L40 12 C40 9 44 8 50 8 C56 8 60 9 60 12 L60 18" fill="none" stroke="#6D28D9" stroke-width="4" stroke-linecap="round"/>
    <!-- Star badge -->
    <circle cx="50" cy="68" r="4" fill="#FBBF24"/>
  </svg>`,

  "can": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Can cylinder -->
    <rect x="30" y="26" width="40" height="52" fill="#E11D48"/>
    <ellipse cx="50" cy="26" rx="20" ry="7" fill="#CBD5E1" stroke="#94A3B8" stroke-width="2"/>
    <ellipse cx="50" cy="78" rx="20" ry="7" fill="#BE123C"/>
    <!-- Pull ring -->
    <ellipse cx="50" cy="26" rx="6" ry="3" fill="#64748B"/>
    <!-- Wave pattern -->
    <path d="M30 46 Q50 56 70 46 L70 58 Q50 68 30 58 Z" fill="#FFE4E6"/>
    <text x="50" y="55" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11" fill="#E11D48" text-anchor="middle">SODA</text>
  </svg>`,

  "hat": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Hat brim -->
    <ellipse cx="50" cy="70" rx="42" ry="14" fill="#F59E0B"/>
    <!-- Hat crown -->
    <path d="M28 66 C28 35 34 26 50 26 C66 26 72 35 72 66 Z" fill="#FBBF24"/>
    <!-- Ribbon -->
    <path d="M28 62 C34 59 66 59 72 62 L72 67 C66 64 34 64 28 67 Z" fill="#EF4444"/>
    <!-- Ribbon bow -->
    <circle cx="68" cy="62" r="4" fill="#DC2626"/>
  </svg>`,

  // UNIT 4: Dd
  "desk": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Desk top -->
    <polygon points="12,38 34,26 88,26 66,38" fill="#F59E0B"/>
    <rect x="12" y="38" width="54" height="8" fill="#D97706"/>
    <!-- Drawer side -->
    <rect x="44" y="46" width="22" height="32" fill="#B45309"/>
    <rect x="47" y="50" width="16" height="8" fill="#FDE68A"/>
    <circle cx="55" cy="54" r="1.5" fill="#78350F"/>
    <rect x="47" y="62" width="16" height="8" fill="#FDE68A"/>
    <circle cx="55" cy="66" r="1.5" fill="#78350F"/>
    <!-- Legs -->
    <rect x="16" y="46" width="5" height="38" fill="#4B5563"/>
    <rect x="36" y="44" width="4" height="34" fill="#374151"/>
    <rect x="62" y="78" width="4" height="8" fill="#374151"/>
    <rect x="46" y="78" width="4" height="8" fill="#374151"/>
  </svg>`,

  "dog": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Dog ears -->
    <path d="M24 30 C18 42 18 56 26 60 C30 62 32 50 30 38 Z" fill="#92400E"/>
    <path d="M76 30 C82 42 82 56 74 60 C70 62 68 50 70 38 Z" fill="#92400E"/>
    <!-- Head -->
    <circle cx="50" cy="48" r="28" fill="#FBBF24"/>
    <!-- Snout -->
    <ellipse cx="50" cy="56" rx="14" ry="10" fill="#FEF3C7"/>
    <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#1F2937"/>
    <path d="M50 56 L50 60 M46 60 Q50 63 54 60" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Tongue -->
    <path d="M48 62 C48 68 52 68 52 62 Z" fill="#F43F5E"/>
    <!-- Eyes -->
    <circle cx="38" cy="44" r="4" fill="#1F2937"/>
    <circle cx="39" cy="43" r="1.2" fill="#FFFFFF"/>
    <circle cx="62" cy="44" r="4" fill="#1F2937"/>
    <circle cx="63" cy="43" r="1.2" fill="#FFFFFF"/>
  </svg>`,

  "door": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Door frame -->
    <rect x="22" y="14" width="56" height="74" rx="4" fill="#78350F"/>
    <rect x="26" y="18" width="48" height="70" rx="3" fill="#D97706"/>
    <!-- Door panels -->
    <rect x="32" y="24" width="36" height="26" rx="3" fill="#F59E0B"/>
    <rect x="32" y="56" width="36" height="26" rx="3" fill="#F59E0B"/>
    <!-- Door knob -->
    <circle cx="62" cy="54" r="4" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5"/>
  </svg>`,

  "duck": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Duck body -->
    <path d="M22 56 C22 46 36 44 48 44 C64 44 76 52 76 66 C76 76 62 82 46 82 C30 82 22 72 22 56 Z" fill="#FBBF24"/>
    <!-- Wing -->
    <path d="M34 60 C38 52 50 52 56 60 C58 66 52 72 40 70 Z" fill="#F59E0B"/>
    <!-- Head -->
    <circle cx="66" cy="38" r="16" fill="#FBBF24"/>
    <!-- Eye -->
    <circle cx="69" cy="35" r="3.5" fill="#1F2937"/>
    <circle cx="70" cy="34" r="1" fill="#FFFFFF"/>
    <!-- Beak -->
    <path d="M78 36 L92 40 L78 44 Z" fill="#F97316"/>
    <!-- Water ripples -->
    <path d="M14 84 C24 82 34 86 44 84 C54 82 64 86 74 84 C84 82 90 85 92 84" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // UNIT 5: Ii
  "chicken": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Tail & body -->
    <path d="M22 48 C16 38 28 32 36 38 C44 42 54 44 60 48 C68 54 70 66 66 74 C58 82 36 82 28 72 Z" fill="#F59E0B"/>
    <!-- Head -->
    <circle cx="68" cy="36" r="14" fill="#F59E0B"/>
    <!-- Comb -->
    <path d="M64 24 C64 18 70 18 70 24 C72 18 78 20 76 26 Z" fill="#EF4444"/>
    <circle cx="71" cy="34" r="3" fill="#1F2937"/>
    <!-- Beak & wattle -->
    <polygon points="78,36 88,40 78,42" fill="#EA580C"/>
    <ellipse cx="78" cy="44" rx="2.5" ry="4" fill="#EF4444"/>
    <!-- Legs -->
    <line x1="42" y1="80" x2="42" y2="92" stroke="#EA580C" stroke-width="3"/>
    <line x1="52" y1="80" x2="52" y2="92" stroke="#EA580C" stroke-width="3"/>
  </svg>`,

  "chips": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Chip pack box -->
    <path d="M28 44 L32 86 L68 86 L72 44 Z" fill="#EF4444"/>
    <path d="M28 44 Q50 50 72 44" fill="none" stroke="#DC2626" stroke-width="4"/>
    <text x="50" y="72" font-family="'Fredoka', sans-serif" font-weight="700" font-size="16" fill="#FDE047" text-anchor="middle">🍟</text>
    <!-- French fries -->
    <rect x="36" y="16" width="6" height="34" rx="2" fill="#FBBF24" transform="rotate(-12 36 16)"/>
    <rect x="44" y="12" width="6" height="38" rx="2" fill="#FDE047"/>
    <rect x="52" y="14" width="6" height="36" rx="2" fill="#FBBF24" transform="rotate(8 52 14)"/>
    <rect x="60" y="20" width="6" height="30" rx="2" fill="#FDE047" transform="rotate(18 60 20)"/>
  </svg>`,

  "fish": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Tail fin -->
    <polygon points="20,32 34,50 20,68 28,50" fill="#38BDF8"/>
    <!-- Fish body -->
    <ellipse cx="54" cy="50" rx="28" ry="20" fill="#0284C7"/>
    <!-- Stripes -->
    <path d="M48 32 Q54 50 48 68" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round"/>
    <path d="M58 32 Q64 50 58 68" fill="none" stroke="#FDE047" stroke-width="4" stroke-linecap="round"/>
    <!-- Eye -->
    <circle cx="72" cy="46" r="4.5" fill="#FFFFFF"/>
    <circle cx="73" cy="46" r="2.5" fill="#0F172A"/>
    <!-- Bubbles -->
    <circle cx="86" cy="38" r="3" fill="#BAE6FD" opacity="0.8"/>
    <circle cx="92" cy="30" r="2" fill="#BAE6FD" opacity="0.8"/>
  </svg>`,

  "milk": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Milk carton -->
    <polygon points="34,16 66,16 60,26 30,26" fill="#93C5FD"/>
    <rect x="30" y="26" width="40" height="58" rx="3" fill="#DBEAFE"/>
    <path d="M30 46 L70 46 L70 70 L30 70 Z" fill="#3B82F6"/>
    <text x="50" y="62" font-family="'Fredoka', sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" text-anchor="middle">MILK</text>
    <!-- Cow spot -->
    <path d="M36 32 C38 28 44 30 44 34 C44 38 40 40 36 38 Z" fill="#1E3A8A"/>
    <!-- Straw -->
    <line x1="56" y1="6" x2="62" y2="24" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // UNIT 6: Ee
  "bell": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Top hanger -->
    <circle cx="50" cy="18" r="7" fill="none" stroke="#CA8A04" stroke-width="3"/>
    <!-- Bell dome -->
    <path d="M30 68 C30 42 38 26 50 26 C62 26 70 42 70 68 L78 74 L22 74 Z" fill="#FBBF24"/>
    <ellipse cx="50" cy="74" rx="28" ry="6" fill="#D97706"/>
    <!-- Bell clapper -->
    <circle cx="50" cy="82" r="6" fill="#92400E"/>
    <!-- Shine -->
    <path d="M38 42 C38 35 42 32 46 30" fill="none" stroke="#FEF3C7" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "pen": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Pen rotated -->
    <g transform="rotate(45 50 50)">
      <rect x="45" y="16" width="10" height="12" fill="#9CA3AF"/>
      <rect x="44" y="28" width="12" height="42" rx="2" fill="#2563EB"/>
      <polygon points="44,70 56,70 50,86" fill="#D1D5DB"/>
      <polygon points="48,82 52,82 50,88" fill="#1E293B"/>
      <!-- Clip -->
      <rect x="42" y="32" width="3" height="24" rx="1" fill="#93C5FD"/>
    </g>
  </svg>`,

  "pencil": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <g transform="rotate(45 50 50)">
      <!-- Eraser -->
      <rect x="43" y="12" width="14" height="12" rx="3" fill="#F472B6"/>
      <rect x="42" y="24" width="16" height="6" fill="#9CA3AF"/>
      <!-- Wooden body -->
      <rect x="43" y="30" width="14" height="42" fill="#F59E0B"/>
      <!-- Sharpened wood -->
      <polygon points="43,72 57,72 50,86" fill="#FDE68A"/>
      <!-- Lead tip -->
      <polygon points="47,80 53,80 50,86" fill="#1F2937"/>
    </g>
  </svg>`,

  "red": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Paint splash / palette -->
    <circle cx="50" cy="50" r="38" fill="#EF4444"/>
    <circle cx="50" cy="50" r="32" fill="#DC2626"/>
    <!-- Droplets -->
    <circle cx="78" cy="24" r="7" fill="#EF4444"/>
    <circle cx="22" cy="74" r="6" fill="#EF4444"/>
    <text x="50" y="58" font-family="'Fredoka', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF" text-anchor="middle">RED</text>
  </svg>`,

  // UNIT 7: Gg
  "garden": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Green hills -->
    <ellipse cx="30" cy="76" rx="40" ry="20" fill="#22C55E"/>
    <ellipse cx="70" cy="78" rx="40" ry="22" fill="#16A34A"/>
    <!-- Flowers -->
    <circle cx="36" cy="56" r="6" fill="#F43F5E"/>
    <circle cx="36" cy="56" r="2.5" fill="#FEF08A"/>
    <line x1="36" y1="62" x2="36" y2="76" stroke="#15803D" stroke-width="2.5"/>
    <circle cx="64" cy="52" r="7" fill="#A855F7"/>
    <circle cx="64" cy="52" r="3" fill="#FEF08A"/>
    <line x1="64" y1="59" x2="64" y2="76" stroke="#15803D" stroke-width="2.5"/>
    <!-- Cute butterfly -->
    <ellipse cx="50" cy="34" rx="4" ry="7" fill="#F59E0B" transform="rotate(30 50 34)"/>
    <ellipse cx="50" cy="34" rx="4" ry="7" fill="#F59E0B" transform="rotate(-30 50 34)"/>
  </svg>`,

  "gate": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Fence gate -->
    <rect x="16" y="24" width="8" height="64" rx="2" fill="#78350F"/>
    <rect x="76" y="24" width="8" height="64" rx="2" fill="#78350F"/>
    <line x1="24" y1="36" x2="76" y2="36" stroke="#B45309" stroke-width="5"/>
    <line x1="24" y1="68" x2="76" y2="68" stroke="#B45309" stroke-width="5"/>
    <!-- Pickers -->
    <polygon points="34,22 38,16 42,22 42,80 34,80" fill="#D97706"/>
    <polygon points="46,22 50,16 54,22 54,80 46,80" fill="#D97706"/>
    <polygon points="58,22 62,16 66,22 66,80 58,80" fill="#D97706"/>
  </svg>`,

  "girl": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Pigtails -->
    <ellipse cx="24" cy="46" rx="8" ry="14" fill="#92400E"/>
    <ellipse cx="76" cy="46" rx="8" ry="14" fill="#92400E"/>
    <circle cx="28" cy="44" r="3" fill="#F43F5E"/>
    <circle cx="72" cy="44" r="3" fill="#F43F5E"/>
    <!-- Face -->
    <circle cx="50" cy="48" r="26" fill="#FFDFBA"/>
    <!-- Hair bangs -->
    <path d="M26 42 C36 28 64 28 74 42 C70 32 58 24 50 24 C42 24 30 32 26 42 Z" fill="#92400E"/>
    <!-- Eyes -->
    <circle cx="41" cy="48" r="3.5" fill="#1F2937"/>
    <circle cx="59" cy="48" r="3.5" fill="#1F2937"/>
    <circle cx="42" cy="47" r="1" fill="#FFFFFF"/>
    <circle cx="60" cy="47" r="1" fill="#FFFFFF"/>
    <!-- Smile & Cheeks -->
    <circle cx="34" cy="54" r="3" fill="#FDA4AF"/>
    <circle cx="66" cy="54" r="3" fill="#FDA4AF"/>
    <path d="M44 56 Q50 62 56 56" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Dress -->
    <path d="M34 74 L26 94 L74 94 L66 74 Z" fill="#EC4899"/>
  </svg>`,

  "goat": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Horns -->
    <path d="M38 28 C34 16 38 12 42 16" fill="none" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
    <path d="M62 28 C66 16 62 12 58 16" fill="none" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
    <!-- Ears -->
    <ellipse cx="26" cy="40" rx="8" ry="4" fill="#E2E8F0" transform="rotate(-20 26 40)"/>
    <ellipse cx="74" cy="40" rx="8" ry="4" fill="#E2E8F0" transform="rotate(20 74 40)"/>
    <!-- Head -->
    <ellipse cx="50" cy="46" rx="22" ry="20" fill="#F8FAFC"/>
    <!-- Eyes -->
    <circle cx="40" cy="42" r="3" fill="#1F2937"/>
    <circle cx="60" cy="42" r="3" fill="#1F2937"/>
    <!-- Muzzle & Beard -->
    <ellipse cx="50" cy="56" rx="10" ry="7" fill="#F1F5F9"/>
    <ellipse cx="50" cy="54" rx="3" ry="2" fill="#64748B"/>
    <polygon points="46,62 54,62 50,72" fill="#E2E8F0"/>
  </svg>`,

  // UNIT 8: Hh
  "hair": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Girl with long curly hair -->
    <path d="M22 66 C18 42 22 20 50 18 C78 20 82 42 78 66 C86 78 72 88 64 74 C50 86 36 86 28 72 Z" fill="#D97706"/>
    <circle cx="50" cy="48" r="18" fill="#FFDFBA"/>
    <circle cx="44" cy="48" r="2.5" fill="#1F2937"/>
    <circle cx="56" cy="48" r="2.5" fill="#1F2937"/>
    <path d="M47 54 Q50 57 53 54" stroke="#DC2626" stroke-width="2" fill="none"/>
  </svg>`,

  "hand": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Waving hand -->
    <path d="M38 78 L38 52 C38 48 33 48 33 52 L33 42 C33 38 28 38 28 42 L28 46 C28 42 23 42 23 46 L23 60 C23 62 20 62 18 64 C16 66 22 74 28 80 L38 88 L58 88 L68 76 C72 68 72 50 68 44 C66 40 60 42 60 48 L58 36 C58 32 52 32 52 36 L52 32 C52 28 46 28 46 32 L46 78 Z" fill="#FDBA74" transform="translate(15 0)"/>
  </svg>`,

  "head": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <circle cx="50" cy="50" r="34" fill="#FFDFBA"/>
    <!-- Hair cap -->
    <path d="M20 44 C20 22 36 16 50 16 C64 16 80 22 80 44 C72 34 62 30 50 30 C38 30 28 34 20 44 Z" fill="#78350F"/>
    <!-- Ears -->
    <circle cx="16" cy="52" r="6" fill="#FFDFBA"/>
    <circle cx="84" cy="52" r="6" fill="#FFDFBA"/>
    <!-- Face features -->
    <circle cx="38" cy="48" r="4" fill="#1F2937"/>
    <circle cx="62" cy="48" r="4" fill="#1F2937"/>
    <path d="M44 64 Q50 70 56 64" fill="none" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "horse": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Mane -->
    <path d="M28 26 C26 38 32 52 36 62 L48 50 Z" fill="#78350F"/>
    <!-- Horse head profile -->
    <path d="M34 56 C34 40 46 30 58 26 L66 20 L70 28 L64 36 C74 44 80 56 76 66 C72 74 58 76 52 68 L44 76 L34 72 Z" fill="#B45309"/>
    <!-- Snout -->
    <circle cx="72" cy="62" r="3" fill="#451A03"/>
    <!-- Eye -->
    <circle cx="56" cy="40" r="3.5" fill="#1F2937"/>
    <circle cx="57" cy="39" r="1" fill="#FFFFFF"/>
  </svg>`,

  // UNIT 9: Oo
  "clocks": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Wall clock -->
    <circle cx="50" cy="50" r="36" fill="#0EA5E9"/>
    <circle cx="50" cy="50" r="30" fill="#FFFFFF"/>
    <!-- Clock ticks -->
    <circle cx="50" cy="24" r="2" fill="#0284C7"/>
    <circle cx="50" cy="76" r="2" fill="#0284C7"/>
    <circle cx="24" cy="50" r="2" fill="#0284C7"/>
    <circle cx="76" cy="50" r="2" fill="#0284C7"/>
    <!-- Hands -->
    <line x1="50" y1="50" x2="50" y2="32" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="65" y2="50" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="3" fill="#0F172A"/>
  </svg>`,

  "locks": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Padlock shackle -->
    <path d="M34 48 L34 30 C34 20 42 16 50 16 C58 16 66 20 66 30 L66 48" fill="none" stroke="#94A3B8" stroke-width="7" stroke-linecap="round"/>
    <!-- Body -->
    <rect x="24" y="44" width="52" height="42" rx="8" fill="#F59E0B"/>
    <!-- Keyhole -->
    <circle cx="50" cy="60" r="5" fill="#78350F"/>
    <polygon points="48,60 52,60 54,72 46,72" fill="#78350F"/>
  </svg>`,

  "mops": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Handle -->
    <line x1="74" y1="14" x2="44" y2="60" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
    <!-- Head connector -->
    <rect x="36" y="58" width="16" height="8" rx="2" fill="#EF4444" transform="rotate(-35 44 62)"/>
    <!-- Mop strands -->
    <path d="M30 68 C24 82 22 88 20 92 M36 72 C32 84 30 90 28 94 M42 74 C40 86 42 92 42 94 M48 70 C52 82 56 88 60 92" stroke="#E2E8F0" stroke-width="5" stroke-linecap="round"/>
  </svg>`,

  "pots": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Cooking pot -->
    <path d="M24 44 L28 78 C28 82 36 86 50 86 C64 86 72 82 72 78 L76 44 Z" fill="#64748B"/>
    <!-- Handles -->
    <path d="M18 50 C14 50 14 60 18 60 L24 58" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
    <path d="M82 50 C86 50 86 60 82 60 L76 58" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
    <!-- Lid with handle -->
    <ellipse cx="50" cy="44" rx="28" ry="7" fill="#94A3B8"/>
    <circle cx="50" cy="33" r="5" fill="#EF4444"/>
    <line x1="50" y1="38" x2="50" y2="44" stroke="#475569" stroke-width="3"/>
  </svg>`,

  // UNIT 10: Mm
  "mango": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Mango body -->
    <path d="M54 22 C36 18 20 36 22 56 C24 76 44 86 64 84 C80 82 86 64 82 46 C78 28 66 24 54 22 Z" fill="#FBBF24"/>
    <!-- Gradient blush -->
    <path d="M26 46 C24 64 36 78 52 82 C42 80 26 70 26 46 Z" fill="#F87171" opacity="0.6"/>
    <!-- Stem & green leaf -->
    <line x1="54" y1="22" x2="54" y2="14" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
    <path d="M54 18 C64 12 74 16 72 24 C62 26 58 20 54 18 Z" fill="#22C55E"/>
  </svg>`,

  "monkey": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Big ears -->
    <circle cx="24" cy="48" r="12" fill="#B45309"/>
    <circle cx="24" cy="48" r="7" fill="#FDE68A"/>
    <circle cx="76" cy="48" r="12" fill="#B45309"/>
    <circle cx="76" cy="48" r="7" fill="#FDE68A"/>
    <!-- Head -->
    <circle cx="50" cy="48" r="26" fill="#92400E"/>
    <!-- Face mask -->
    <ellipse cx="42" cy="44" rx="9" ry="8" fill="#FDE68A"/>
    <ellipse cx="58" cy="44" rx="9" ry="8" fill="#FDE68A"/>
    <ellipse cx="50" cy="56" rx="16" ry="12" fill="#FDE68A"/>
    <!-- Eyes -->
    <circle cx="43" cy="44" r="3.5" fill="#1F2937"/>
    <circle cx="57" cy="44" r="3.5" fill="#1F2937"/>
    <!-- Nostrils & smile -->
    <circle cx="47" cy="54" r="1.5" fill="#78350F"/>
    <circle cx="53" cy="54" r="1.5" fill="#78350F"/>
    <path d="M44 60 Q50 64 56 60" fill="none" stroke="#78350F" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "mother": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Mom with bun -->
    <circle cx="50" cy="24" r="11" fill="#78350F"/>
    <circle cx="50" cy="48" r="24" fill="#FFDFBA"/>
    <!-- Hair side -->
    <path d="M26 44 C26 28 36 26 50 26 C64 26 74 28 74 44 C66 36 56 34 50 34 C44 34 34 36 26 44 Z" fill="#78350F"/>
    <!-- Eyes & Gentle smile -->
    <path d="M38 46 Q42 43 46 46" fill="none" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M54 46 Q58 43 62 46" fill="none" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M44 58 Q50 63 56 58" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Earrings -->
    <circle cx="26" cy="52" r="2.5" fill="#FBBF24"/>
    <circle cx="74" cy="52" r="2.5" fill="#FBBF24"/>
    <!-- Shirt -->
    <path d="M30 72 Q50 82 70 72 L76 96 L24 96 Z" fill="#EC4899"/>
  </svg>`,

  "mouse": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Big round ears -->
    <circle cx="26" cy="30" r="14" fill="#94A3B8"/>
    <circle cx="26" cy="30" r="8" fill="#FDA4AF"/>
    <circle cx="74" cy="30" r="14" fill="#94A3B8"/>
    <circle cx="74" cy="30" r="8" fill="#FDA4AF"/>
    <!-- Body / Head -->
    <ellipse cx="50" cy="56" rx="24" ry="22" fill="#CBD5E1"/>
    <!-- Eyes -->
    <circle cx="41" cy="48" r="3.5" fill="#0F172A"/>
    <circle cx="59" cy="48" r="3.5" fill="#0F172A"/>
    <circle cx="42" cy="47" r="1" fill="#FFFFFF"/>
    <circle cx="60" cy="47" r="1" fill="#FFFFFF"/>
    <!-- Pink nose & whiskers -->
    <circle cx="50" cy="56" r="3.5" fill="#F43F5E"/>
    <line x1="36" y1="56" x2="20" y2="54" stroke="#475569" stroke-width="2"/>
    <line x1="36" y1="60" x2="22" y2="64" stroke="#475569" stroke-width="2"/>
    <line x1="64" y1="56" x2="80" y2="54" stroke="#475569" stroke-width="2"/>
    <line x1="64" y1="60" x2="78" y2="64" stroke="#475569" stroke-width="2"/>
  </svg>`,

  // UNIT 11: Uu
  "bus": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Bus body -->
    <rect x="14" y="30" width="72" height="42" rx="8" fill="#FBBF24"/>
    <!-- Windows -->
    <rect x="20" y="38" width="14" height="14" rx="2" fill="#67E8F9"/>
    <rect x="38" y="38" width="14" height="14" rx="2" fill="#67E8F9"/>
    <rect x="56" y="38" width="14" height="14" rx="2" fill="#67E8F9"/>
    <rect x="74" y="38" width="8" height="20" rx="2" fill="#67E8F9"/>
    <!-- Wheels -->
    <circle cx="32" cy="72" r="10" fill="#1F2937"/>
    <circle cx="32" cy="72" r="4" fill="#E5E7EB"/>
    <circle cx="68" cy="72" r="10" fill="#1F2937"/>
    <circle cx="68" cy="72" r="4" fill="#E5E7EB"/>
    <!-- Stripe -->
    <rect x="14" y="58" width="72" height="4" fill="#EF4444"/>
  </svg>`,

  "running": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Runner stick figure kid cartoon -->
    <circle cx="56" cy="24" r="10" fill="#FDBA74"/>
    <path d="M50 20 C54 16 62 16 64 22 Z" fill="#78350F"/>
    <!-- Torso -->
    <line x1="54" y1="34" x2="46" y2="56" stroke="#2563EB" stroke-width="7" stroke-linecap="round"/>
    <!-- Arms -->
    <path d="M40 42 L52 38 L66 42" fill="none" stroke="#FDBA74" stroke-width="5" stroke-linecap="round"/>
    <!-- Legs in run stride -->
    <path d="M46 56 L30 68 L24 82" fill="none" stroke="#1D4ED8" stroke-width="5" stroke-linecap="round"/>
    <path d="M46 56 L64 66 L78 62" fill="none" stroke="#1D4ED8" stroke-width="5" stroke-linecap="round"/>
    <!-- Wind streaks -->
    <line x1="16" y1="40" x2="26" y2="40" stroke="#93C5FD" stroke-width="3" stroke-linecap="round"/>
    <line x1="12" y1="50" x2="24" y2="50" stroke="#93C5FD" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "sun": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Sun rays -->
    <g stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
      <line x1="50" y1="12" x2="50" y2="20"/>
      <line x1="50" y1="80" x2="50" y2="88"/>
      <line x1="12" y1="50" x2="20" y2="50"/>
      <line x1="80" y1="50" x2="88" y2="50"/>
      <line x1="24" y1="24" x2="30" y2="30"/>
      <line x1="70" y1="70" x2="76" y2="76"/>
      <line x1="24" y1="76" x2="30" y2="70"/>
      <line x1="70" y1="30" x2="76" y2="24"/>
    </g>
    <!-- Sun face -->
    <circle cx="50" cy="50" r="26" fill="#FBBF24"/>
    <circle cx="42" cy="46" r="3" fill="#1F2937"/>
    <circle cx="58" cy="46" r="3" fill="#1F2937"/>
    <circle cx="36" cy="52" r="3" fill="#F87171" opacity="0.6"/>
    <circle cx="64" cy="52" r="3" fill="#F87171" opacity="0.6"/>
    <path d="M44 54 Q50 60 56 54" fill="none" stroke="#B45309" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "truck": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Cargo box -->
    <rect x="12" y="32" width="46" height="38" rx="4" fill="#3B82F6"/>
    <!-- Cab -->
    <path d="M58 44 L72 44 C76 44 82 50 84 56 L86 70 L58 70 Z" fill="#10B981"/>
    <!-- Cab window -->
    <path d="M62 48 L72 48 C74 48 78 52 79 56 L62 56 Z" fill="#E0F2FE"/>
    <!-- Wheels -->
    <circle cx="26" cy="72" r="9" fill="#1F2937"/>
    <circle cx="26" cy="72" r="4" fill="#9CA3AF"/>
    <circle cx="44" cy="72" r="9" fill="#1F2937"/>
    <circle cx="44" cy="72" r="4" fill="#9CA3AF"/>
    <circle cx="74" cy="72" r="9" fill="#1F2937"/>
    <circle cx="74" cy="72" r="4" fill="#9CA3AF"/>
  </svg>`,

  // UNIT 12: Ll
  "lake": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Mountain in back -->
    <polygon points="14,60 38,32 58,60" fill="#93C5FD"/>
    <polygon points="46,60 68,36 88,60" fill="#60A5FA"/>
    <!-- Lake water -->
    <ellipse cx="50" cy="70" rx="42" ry="18" fill="#38BDF8"/>
    <!-- Water ripples -->
    <path d="M30 68 Q40 64 50 68" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M54 74 Q64 70 74 74" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  "leaf": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Vibrant green leaf -->
    <path d="M22 78 C22 78 28 40 54 26 C80 12 84 34 82 50 C80 66 52 82 22 78 Z" fill="#22C55E"/>
    <!-- Center vein -->
    <path d="M22 78 Q50 56 80 28" fill="none" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Side veins -->
    <path d="M40 62 Q52 64 62 70" fill="none" stroke="#16A34A" stroke-width="2"/>
    <path d="M54 50 Q66 48 76 52" fill="none" stroke="#16A34A" stroke-width="2"/>
  </svg>`,

  "lemons": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Yellow lemon -->
    <path d="M20 50 C26 30 52 22 70 34 C82 42 88 56 74 72 C56 88 30 76 20 50 Z" fill="#FDE047"/>
    <!-- Tips -->
    <circle cx="18" cy="46" r="3" fill="#EAB308"/>
    <circle cx="82" cy="54" r="3" fill="#EAB308"/>
    <!-- Leaf -->
    <path d="M54 26 C64 18 72 20 70 28 C60 30 56 26 54 26 Z" fill="#22C55E"/>
    <!-- Texture dots -->
    <circle cx="42" cy="46" r="1" fill="#CA8A04"/>
    <circle cx="56" cy="56" r="1" fill="#CA8A04"/>
  </svg>`,

  "Lucy": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Blonde girl -->
    <circle cx="50" cy="48" r="24" fill="#FFDFBA"/>
    <!-- Hair with flowers -->
    <path d="M26 44 C26 26 36 22 50 22 C64 22 74 26 74 44 C76 60 70 66 68 70 C64 54 60 36 50 34 C40 36 36 54 32 70 C30 66 24 60 26 44 Z" fill="#FDE047"/>
    <circle cx="36" cy="32" r="5" fill="#F43F5E"/>
    <circle cx="36" cy="32" r="2" fill="#FEF08A"/>
    <!-- Eyes & smile -->
    <circle cx="42" cy="48" r="3.5" fill="#0284C7"/>
    <circle cx="58" cy="48" r="3.5" fill="#0284C7"/>
    <path d="M45 56 Q50 60 55 56" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Dress -->
    <path d="M34 72 L24 94 L76 94 L66 72 Z" fill="#8B5CF6"/>
  </svg>`,

  // UNIT 13: Nn
  "bananas": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Bunch of bananas -->
    <path d="M30 32 C48 34 68 50 64 74 C58 74 48 56 26 44 Z" fill="#FBBF24"/>
    <path d="M36 28 C54 30 76 44 74 70 C68 70 56 52 32 38 Z" fill="#FDE047"/>
    <path d="M28 26 C32 22 38 22 40 28 L36 34 L26 30 Z" fill="#78350F"/>
    <circle cx="74" cy="70" r="2" fill="#78350F"/>
    <circle cx="64" cy="74" r="2" fill="#78350F"/>
  </svg>`,

  "Nick": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Boy with spiky hair -->
    <polygon points="26,38 34,20 44,30 52,18 60,30 68,20 74,38" fill="#1E293B"/>
    <circle cx="50" cy="50" r="24" fill="#FFDFBA"/>
    <!-- Eyes -->
    <circle cx="41" cy="48" r="3.5" fill="#1F2937"/>
    <circle cx="59" cy="48" r="3.5" fill="#1F2937"/>
    <path d="M44 60 Q50 65 56 60" fill="none" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>
    <!-- Shirt with stripe -->
    <path d="M30 74 Q50 86 70 74 L76 96 L24 96 Z" fill="#F97316"/>
  </svg>`,

  "noodles": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Bowl -->
    <path d="M20 50 C20 74 34 84 50 84 C66 84 80 74 80 50 Z" fill="#EF4444"/>
    <ellipse cx="50" cy="50" rx="30" ry="10" fill="#FDE68A"/>
    <!-- Chopsticks -->
    <line x1="28" y1="20" x2="68" y2="54" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="36" y1="16" x2="74" y2="52" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Steam -->
    <path d="M44 38 Q48 30 44 24" fill="none" stroke="#CBD5E1" stroke-width="2.5"/>
    <path d="M54 38 Q58 30 54 24" fill="none" stroke="#CBD5E1" stroke-width="2.5"/>
  </svg>`,

  "nuts": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Peanut shell -->
    <path d="M36 34 C36 24 48 24 54 30 C58 36 54 44 48 48 C44 52 48 60 56 64 C64 70 58 82 46 80 C36 78 36 66 42 58 C46 52 42 44 36 40 C34 38 36 34 36 34 Z" fill="#D97706"/>
    <!-- Acorn next to it -->
    <path d="M62 44 C72 44 78 52 74 64 C70 74 62 78 62 78 C62 78 54 74 50 64 C46 52 52 44 62 44 Z" fill="#92400E"/>
    <ellipse cx="62" cy="44" rx="12" ry="5" fill="#78350F"/>
    <line x1="62" y1="39" x2="62" y2="34" stroke="#78350F" stroke-width="2.5"/>
  </svg>`,

  // UNIT 14: Tt
  "teddy bear": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Bear ears -->
    <circle cx="32" cy="30" r="10" fill="#B45309"/>
    <circle cx="32" cy="30" r="5" fill="#FDE68A"/>
    <circle cx="68" cy="30" r="10" fill="#B45309"/>
    <circle cx="68" cy="30" r="5" fill="#FDE68A"/>
    <!-- Head -->
    <circle cx="50" cy="46" r="24" fill="#D97706"/>
    <!-- Muzzle -->
    <ellipse cx="50" cy="52" rx="11" ry="8" fill="#FEF3C7"/>
    <polygon points="50,49 46,46 54,46" fill="#78350F"/>
    <path d="M50 51 L50 54 M47 54 Q50 57 53 54" stroke="#78350F" stroke-width="2"/>
    <!-- Eyes -->
    <circle cx="42" cy="42" r="3" fill="#1F2937"/>
    <circle cx="58" cy="42" r="3" fill="#1F2937"/>
    <!-- Cute red bow tie -->
    <polygon points="42,72 50,76 42,80" fill="#EF4444"/>
    <polygon points="58,72 50,76 58,80" fill="#EF4444"/>
    <circle cx="50" cy="76" r="2.5" fill="#DC2626"/>
  </svg>`,

  "tiger": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Ears -->
    <circle cx="28" cy="30" r="9" fill="#EA580C"/>
    <circle cx="28" cy="30" r="4" fill="#FFFFFF"/>
    <circle cx="72" cy="30" r="9" fill="#EA580C"/>
    <circle cx="72" cy="30" r="4" fill="#FFFFFF"/>
    <!-- Head -->
    <circle cx="50" cy="48" r="26" fill="#F97316"/>
    <!-- Stripes -->
    <polygon points="50,22 47,32 53,32" fill="#1E293B"/>
    <polygon points="34,34 40,40 32,42" fill="#1E293B"/>
    <polygon points="66,34 60,40 68,42" fill="#1E293B"/>
    <!-- Muzzle -->
    <ellipse cx="50" cy="56" rx="14" ry="10" fill="#FFFFFF"/>
    <polygon points="50,52 46,48 54,48" fill="#DC2626"/>
    <circle cx="40" cy="44" r="3.5" fill="#1F2937"/>
    <circle cx="60" cy="44" r="3.5" fill="#1F2937"/>
  </svg>`,

  "top": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Spinning top toy -->
    <polygon points="50,88 24,46 76,46" fill="#EF4444"/>
    <ellipse cx="50" cy="46" rx="26" ry="10" fill="#FBBF24"/>
    <rect x="47" y="24" width="6" height="22" rx="2" fill="#3B82F6"/>
    <circle cx="50" cy="22" r="5" fill="#10B981"/>
    <!-- Spin lines -->
    <ellipse cx="50" cy="58" rx="16" ry="4" fill="#FDE047"/>
    <circle cx="50" cy="88" r="3" fill="#4B5563"/>
  </svg>`,

  "turtle": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Shell -->
    <ellipse cx="50" cy="54" rx="28" ry="22" fill="#15803D"/>
    <!-- Shell pattern -->
    <polygon points="50,42 60,48 60,60 50,66 40,60 40,48" fill="#22C55E"/>
    <!-- Head -->
    <circle cx="80" cy="54" r="10" fill="#86EFAC"/>
    <circle cx="82" cy="52" r="2.5" fill="#065F46"/>
    <!-- Flippers -->
    <ellipse cx="36" cy="34" rx="8" ry="5" fill="#86EFAC" transform="rotate(-30 36 34)"/>
    <ellipse cx="64" cy="34" rx="8" ry="5" fill="#86EFAC" transform="rotate(30 64 34)"/>
    <ellipse cx="36" cy="74" rx="7" ry="4" fill="#86EFAC" transform="rotate(30 36 74)"/>
    <ellipse cx="64" cy="74" rx="7" ry="4" fill="#86EFAC" transform="rotate(-30 64 74)"/>
  </svg>`,

  // UNIT 15: Ff
  "face": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Happy smiling face -->
    <circle cx="50" cy="50" r="36" fill="#FDE047"/>
    <!-- Cheeks -->
    <circle cx="32" cy="54" r="5" fill="#F87171" opacity="0.6"/>
    <circle cx="68" cy="54" r="5" fill="#F87171" opacity="0.6"/>
    <!-- Big joyful eyes -->
    <ellipse cx="38" cy="42" rx="4" ry="6" fill="#1F2937"/>
    <circle cx="40" cy="40" r="1.5" fill="#FFFFFF"/>
    <ellipse cx="62" cy="42" rx="4" ry="6" fill="#1F2937"/>
    <circle cx="64" cy="40" r="1.5" fill="#FFFFFF"/>
    <!-- Open wide smile -->
    <path d="M34 54 Q50 74 66 54 Z" fill="#DC2626"/>
    <path d="M42 66 Q50 62 58 66" fill="#F472B6"/>
  </svg>`,

  "father": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Dad with neat hair & glasses -->
    <circle cx="50" cy="48" r="26" fill="#FFDFBA"/>
    <!-- Hair -->
    <path d="M24 42 C24 24 38 20 50 20 C62 20 76 24 76 42 C68 34 60 30 50 30 C40 30 32 34 24 42 Z" fill="#374151"/>
    <!-- Glasses -->
    <rect x="32" y="42" width="14" height="10" rx="3" fill="none" stroke="#1F2937" stroke-width="2.5"/>
    <rect x="54" y="42" width="14" height="10" rx="3" fill="none" stroke="#1F2937" stroke-width="2.5"/>
    <line x1="46" y1="46" x2="54" y2="46" stroke="#1F2937" stroke-width="2.5"/>
    <!-- Eyes inside glasses -->
    <circle cx="39" cy="47" r="2.5" fill="#1F2937"/>
    <circle cx="61" cy="47" r="2.5" fill="#1F2937"/>
    <path d="M44 60 Q50 64 56 60" fill="none" stroke="#B91C1C" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Shirt & collar -->
    <path d="M28 74 Q50 86 72 74 L78 96 L22 96 Z" fill="#0284C7"/>
    <polygon points="50,78 44,72 56,72" fill="#FFFFFF"/>
  </svg>`,

  "foot": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Cute footprint cartoon -->
    <ellipse cx="50" cy="58" rx="18" ry="24" fill="#FDBA74"/>
    <!-- 5 Toes -->
    <circle cx="32" cy="26" r="6" fill="#FDBA74"/>
    <circle cx="44" cy="22" r="5" fill="#FDBA74"/>
    <circle cx="55" cy="24" r="4.5" fill="#FDBA74"/>
    <circle cx="64" cy="28" r="4" fill="#FDBA74"/>
    <circle cx="71" cy="34" r="3.5" fill="#FDBA74"/>
  </svg>`,

  "football": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Classic soccer ball -->
    <circle cx="50" cy="50" r="38" fill="#FFFFFF" stroke="#1F2937" stroke-width="4"/>
    <!-- Center pentagon -->
    <polygon points="50,38 60,45 56,58 44,58 40,45" fill="#1F2937"/>
    <!-- Connecting lines to edges -->
    <line x1="50" y1="38" x2="50" y2="20" stroke="#1F2937" stroke-width="3"/>
    <line x1="60" y1="45" x2="76" y2="38" stroke="#1F2937" stroke-width="3"/>
    <line x1="56" y1="58" x2="70" y2="72" stroke="#1F2937" stroke-width="3"/>
    <line x1="44" y1="58" x2="30" y2="72" stroke="#1F2937" stroke-width="3"/>
    <line x1="40" y1="45" x2="24" y2="38" stroke="#1F2937" stroke-width="3"/>
  </svg>`,

  // UNIT 16: Ww
  "washing": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Washing machine or soap bubbles washing -->
    <rect x="22" y="20" width="56" height="66" rx="8" fill="#E0F2FE" stroke="#38BDF8" stroke-width="3"/>
    <!-- Washing window door -->
    <circle cx="50" cy="56" r="20" fill="#0284C7"/>
    <circle cx="50" cy="56" r="15" fill="#38BDF8"/>
    <!-- Swirling water inside -->
    <path d="M42 56 Q50 48 58 56 Q50 64 42 56" fill="#FFFFFF" opacity="0.8"/>
    <!-- Control knobs -->
    <circle cx="34" cy="28" r="4" fill="#0284C7"/>
    <circle cx="46" cy="28" r="3" fill="#64748B"/>
    <circle cx="56" cy="28" r="3" fill="#64748B"/>
    <!-- Bubbles on top -->
    <circle cx="70" cy="18" r="5" fill="#BAE6FD" opacity="0.8"/>
    <circle cx="78" cy="26" r="3" fill="#BAE6FD" opacity="0.8"/>
  </svg>`,

  "water": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Water droplet with cute smile -->
    <path d="M50 16 C50 16 22 52 22 66 C22 80 34 88 50 88 C66 88 78 80 78 66 C78 52 50 16 50 16 Z" fill="#38BDF8"/>
    <!-- Highlight reflection -->
    <path d="M34 60 C32 64 34 74 42 80" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <!-- Cute friendly face -->
    <circle cx="43" cy="62" r="3" fill="#0369A1"/>
    <circle cx="57" cy="62" r="3" fill="#0369A1"/>
    <circle cx="38" cy="66" r="3" fill="#FDA4AF"/>
    <circle cx="62" cy="66" r="3" fill="#FDA4AF"/>
    <path d="M46 70 Q50 74 54 70" fill="none" stroke="#0369A1" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "Wendy": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Girl Wendy with cute headband -->
    <circle cx="50" cy="48" r="25" fill="#FFDFBA"/>
    <!-- Hair -->
    <path d="M26 44 C26 26 36 22 50 22 C64 22 74 26 74 44 C72 64 68 72 64 74 C60 56 58 36 50 36 C42 36 40 56 36 74 C32 72 28 64 26 44 Z" fill="#92400E"/>
    <!-- Headband with flower -->
    <path d="M27 38 C32 26 68 26 73 38" fill="none" stroke="#EC4899" stroke-width="4"/>
    <circle cx="66" cy="34" r="5" fill="#F43F5E"/>
    <circle cx="66" cy="34" r="2" fill="#FEF08A"/>
    <!-- Eyes & smile -->
    <circle cx="42" cy="48" r="3.5" fill="#1F2937"/>
    <circle cx="58" cy="48" r="3.5" fill="#1F2937"/>
    <circle cx="36" cy="54" r="3" fill="#FDA4AF"/>
    <circle cx="64" cy="54" r="3" fill="#FDA4AF"/>
    <path d="M45 57 Q50 62 55 57" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Clothes -->
    <path d="M32 73 L22 95 L78 95 L68 73 Z" fill="#A855F7"/>
  </svg>`,

  "window": `<svg viewBox="0 0 100 100" class="vocab-svg">
    <!-- Window frame -->
    <rect x="18" y="16" width="64" height="68" rx="6" fill="#F59E0B" stroke="#B45309" stroke-width="4"/>
    <!-- 4 glass panes -->
    <rect x="24" y="22" width="23" height="26" fill="#E0F2FE"/>
    <rect x="53" y="22" width="23" height="26" fill="#E0F2FE"/>
    <rect x="24" y="52" width="23" height="26" fill="#BAE6FD"/>
    <rect x="53" y="52" width="23" height="26" fill="#BAE6FD"/>
    <!-- Curtains -->
    <path d="M20 20 Q30 36 20 52 L20 20 Z" fill="#F472B6"/>
    <path d="M80 20 Q70 36 80 52 L80 20 Z" fill="#F472B6"/>
    <!-- Window sill -->
    <rect x="12" y="84" width="76" height="6" rx="3" fill="#78350F"/>
    <!-- Glint -->
    <line x1="30" y1="28" x2="40" y2="38" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </svg>`
};

function getVocabIllustration(word) {
  if (VOCAB_ILLUSTRATIONS[word]) {
    return VOCAB_ILLUSTRATIONS[word];
  }
  // Fallback if ever missing
  return `<svg viewBox="0 0 100 100" class="vocab-svg"><circle cx="50" cy="50" r="40" fill="#FFEAA7"/><text x="50" y="58" font-size="28" text-anchor="middle">⭐</text></svg>`;
}
