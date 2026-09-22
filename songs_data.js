// Danh sách 6 bài hát Tiếng Anh thiếu nhi lớp 1 có FILE ÂM THANH CA HÁT THỰC TẾ (Real Vocal Singing Audio)
// Tích hợp phát nhạc HTML5 trực tiếp, hoàn toàn tương thích với GitHub Pages, di động và cả khi chạy offline!
const SONGS_DATA = [
  {
    id: "abc-song",
    title: "The Alphabet Song (ABC)",
    titleVi: "Bài ca Bảng chữ cái tiếng Anh",
    icon: "🔤",
    color: "#FF6B6B",
    theme: "Chữ cái & Phonics (A-Z)",
    audioSrc: "./audio/abc-song.ogg",
    description: "Bài hát ca nhạc thiếu nhi thực tế kinh điển, bé vừa nghe hát vừa thuộc làu 26 chữ cái tiếng Anh từ A đến Z.",
    lyrics: [
      { en: "A - B - C - D - E - F - G,", vi: "A - B - C - D - E - F - G," },
      { en: "H - I - J - K - L - M - N - O - P,", vi: "H - I - J - K - L - M - N - O - P," },
      { en: "Q - R - S, T - U - V,", vi: "Q - R - S, T - U - V," },
      { en: "W - X, Y and Z.", vi: "W - X, Y và Z." },
      { en: "Now I know my ABCs,", vi: "Bây giờ em đã thuộc bảng chữ cái ABC rồi," },
      { en: "Next time won't you sing with me?", vi: "Lần tới bạn hãy cùng hát với em nhé!" }
    ]
  },
  {
    id: "twinkle-star",
    title: "Twinkle, Twinkle, Little Star",
    titleVi: "Ngôi sao nhỏ lấp lánh",
    icon: "⭐",
    color: "#FBBF24",
    theme: "Thiên nhiên & Bầu trời (Unit 11)",
    audioSrc: "./audio/twinkle-star.ogg",
    description: "Giai điệu ca nhạc êm dịu ngọt ngào có giọng hát trong trẻo giúp bé thư giãn, hòa giọng và luyện phát âm từ vựng ngôi sao, bầu trời.",
    lyrics: [
      { en: "Twinkle, twinkle, little star,", vi: "Lấp lánh, lấp lánh, ngôi sao nhỏ ơi," },
      { en: "How I wonder what you are!", vi: "Em tự hỏi bạn là điều kỳ diệu gì thế!" },
      { en: "Up above the world so high,", vi: "Tỏa sáng tít trên cao của thế giới," },
      { en: "Like a diamond in the sky.", vi: "Như một viên kim cương lung linh trên bầu trời." },
      { en: "When the blazing sun is gone,", vi: "Khi ánh mặt trời rực rỡ lặn dần," },
      { en: "When he nothing shines upon,", vi: "Khi màn đêm bao phủ khắp mọi nơi," },
      { en: "Then you show your little light,", vi: "Thì bạn tỏa ra tia sáng nhỏ bé lung linh," },
      { en: "Twinkle, twinkle, all the night.", vi: "Lấp lánh, lấp lánh suốt cả đêm dài." }
    ]
  },
  {
    id: "wheels-on-bus",
    title: "The Wheels on the Bus",
    titleVi: "Bánh xe buýt quay tròn tròn",
    icon: "🚌",
    color: "#3B82F6",
    theme: "Phương tiện giao thông (Unit 11)",
    audioSrc: "./audio/wheels-on-bus.ogg",
    description: "Bài ca vui nhộn về chuyến xe buýt chở học sinh đến trường với tiếng còi kêu và bánh xe lăn tròn vui nhộn.",
    lyrics: [
      { en: "The wheels on the bus go round and round,", vi: "Bánh xe trên chiếc xe buýt cứ quay tròn tròn," },
      { en: "Round and round, round and round.", vi: "Quay tròn tròn, rồi quay tròn tròn." },
      { en: "The wheels on the bus go round and round,", vi: "Bánh xe buýt cứ quay tròn tròn mãi," },
      { en: "All through the town!", vi: "Đi khắp mọi nẻo đường trong thị trấn!" },
      { en: "The wipers on the bus go swish, swish, swish,", vi: "Cần gạt nước trên xe kêu vun vút, vù vù," },
      { en: "The horn on the bus goes beep, beep, beep!", vi: "Còi xe buýt kêu bíp, bíp, bíp vui tai!" },
      { en: "All through the town!", vi: "Vang khắp cả thị trấn thân thương!" }
    ]
  },
  {
    id: "old-macdonald",
    title: "Old MacDonald Had a Farm",
    titleVi: "Trang trại của bác MacDonald",
    icon: "🚜",
    color: "#10B981",
    theme: "Động vật nuôi (Unit 2, Unit 4 & Unit 7)",
    audioSrc: "./audio/old-macdonald.mp3",
    description: "Khám phá trang trại rộn ràng tiếng hát cùng các loài động vật dễ thương (vịt duck, mèo cat, chó dog...).",
    lyrics: [
      { en: "Old MacDonald had a farm, E-I-E-I-O!", vi: "Bác MacDonald có một trang trại, E-I-E-I-O!" },
      { en: "And on that farm he had a duck, E-I-E-I-O!", vi: "Và trong trang trại bác có chú vịt con, E-I-E-I-O!" },
      { en: "With a quack-quack here and a quack-quack there,", vi: "Với tiếng cạp cạp ở đây và tiếng cạp cạp ở đằng kia," },
      { en: "Here a quack, there a quack, everywhere a quack-quack!", vi: "Chỗ này cạp, chỗ kia cạp, đâu đâu cũng rộn ràng tiếng cạp cạp!" },
      { en: "Old MacDonald had a farm, E-I-E-I-O!", vi: "Bác MacDonald có một trang trại, E-I-E-I-O!" }
    ]
  },
  {
    id: "row-boat",
    title: "Row, Row, Row Your Boat",
    titleVi: "Chèo thuyền xuôi dòng sông",
    icon: "🚣",
    color: "#06B6D4",
    theme: "Hoạt động & Trò chơi (Unit 12)",
    audioSrc: "./audio/row-boat.ogg",
    description: "Bài hát đồng dao ngắn có nhịp điệu chèo thuyền nhịp nhàng, câu từ đơn giản giúp các bé học sinh lớp 1 dễ dàng thuộc.",
    lyrics: [
      { en: "Row, row, row your boat,", vi: "Chèo, chèo, chèo chiếc thuyền của bạn đi nào," },
      { en: "Gently down the stream.", vi: "Nhẹ nhàng trôi xuôi theo dòng suối mát lành." },
      { en: "Merrily, merrily, merrily, merrily,", vi: "Thật là vui vẻ, thật là hân hoan rộn rã," },
      { en: "Life is but a dream.", vi: "Cuộc đời tươi đẹp tựa như một giấc mơ cổ tích." }
    ]
  },
  {
    id: "good-morning",
    title: "Good Morning to All",
    titleVi: "Chào buổi sáng cô giáo & bạn bè",
    icon: "☀️",
    color: "#F59E0B",
    theme: "Chào hỏi lớp học (Unit 1 & Unit 3)",
    audioSrc: "./audio/good-morning.ogg",
    description: "Bài ca chào buổi sáng thân thương quen thuộc nhất, giúp các em tự tin cất lời chào thầy cô và bạn bè mỗi sớm mai đến trường.",
    lyrics: [
      { en: "Good morning to you,", vi: "Em xin chúc bạn một buổi sáng tốt lành," },
      { en: "Good morning to you,", vi: "Em xin gửi lời chào buổi sáng thân thương," },
      { en: "Good morning dear teacher,", vi: "Em xin kính chào cô giáo yêu quý của em," },
      { en: "Good morning to all!", vi: "Em xin gửi lời chào nồng nhiệt tới tất cả mọi người!" }
    ]
  }
];
