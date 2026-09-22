// Danh sách bài hát Tiếng Anh thiếu nhi lớp 1 kèm video ca nhạc thực tế, lời song ngữ (Lyrics) & Giai điệu
const SONGS_DATA = [
  {
    id: "abc-song",
    title: "The Alphabet Song (ABC)",
    titleVi: "Bài ca Bảng chữ cái tiếng Anh",
    icon: "🔤",
    color: "#FF6B6B",
    theme: "Chữ cái & Phonics",
    youtubeId: "ccEpTTZW34g",
    description: "Bài hát ca nhạc hoạt hình kinh điển giúp bé vừa nghe hát vừa thuộc trọn vẹn 26 chữ cái tiếng Anh từ A đến Z.",
    lyrics: [
      { en: "A - B - C - D - E - F - G,", vi: "A - B - C - D - E - F - G," },
      { en: "H - I - J - K - L - M - N - O - P,", vi: "H - I - J - K - L - M - N - O - P," },
      { en: "Q - R - S, T - U - V,", vi: "Q - R - S, T - U - V," },
      { en: "W - X, Y and Z.", vi: "W - X, Y và Z." },
      { en: "Now I know my ABCs,", vi: "Bây giờ em đã thuộc bảng chữ cái ABC rồi," },
      { en: "Next time won't you sing with me?", vi: "Lần tới bạn hãy cùng hát với em nhé!" }
    ],
    notes: [
      { f: 261.63, d: 0.4 }, { f: 261.63, d: 0.4 }, { f: 392.00, d: 0.4 }, { f: 392.00, d: 0.4 },
      { f: 440.00, d: 0.4 }, { f: 440.00, d: 0.4 }, { f: 392.00, d: 0.8 },
      { f: 349.23, d: 0.4 }, { f: 349.23, d: 0.4 }, { f: 329.63, d: 0.4 }, { f: 329.63, d: 0.4 },
      { f: 293.66, d: 0.4 }, { f: 293.66, d: 0.4 }, { f: 261.63, d: 0.8 }
    ]
  },
  {
    id: "hello-song",
    title: "Hello! How Are You?",
    titleVi: "Xin chào! Bạn có khỏe không?",
    icon: "👋",
    color: "#4ECDC4",
    theme: "Chào hỏi & Cảm xúc (Unit 1)",
    youtubeId: "tVlcKp3bWH8",
    description: "Bài hát ca nhạc vui tươi có giai điệu bắt tai giúp bé hát theo các câu chào hỏi tiếng Anh hàng ngày.",
    lyrics: [
      { en: "Hello, hello, hello! How are you?", vi: "Xin chào, xin chào! Bạn có khỏe không?" },
      { en: "I'm good! I'm great! I'm wonderful!", vi: "Mình rất khỏe! Mình rất vui! Thật tuyệt vời!" },
      { en: "Hello, hello, hello! How are you?", vi: "Xin chào, xin chào! Bạn có khỏe không?" },
      { en: "I'm tired. I'm hungry. I'm not so good.", vi: "Mình hơi mệt. Mình đói bụng. Mình không khỏe lắm." },
      { en: "Hello, hello, hello! How are you?", vi: "Xin chào, xin chào! Bạn có khỏe không?" }
    ],
    notes: [
      { f: 261.63, d: 0.3 }, { f: 329.63, d: 0.3 }, { f: 392.00, d: 0.3 }, { f: 523.25, d: 0.6 },
      { f: 440.00, d: 0.3 }, { f: 392.00, d: 0.3 }, { f: 329.63, d: 0.6 },
      { f: 261.63, d: 0.3 }, { f: 329.63, d: 0.3 }, { f: 392.00, d: 0.3 }, { f: 440.00, d: 0.3 }
    ]
  },
  {
    id: "twinkle-star",
    title: "Twinkle, Twinkle, Little Star",
    titleVi: "Ngôi sao nhỏ lấp lánh",
    icon: "⭐",
    color: "#FBBF24",
    theme: "Thiên nhiên & Bầu trời (Unit 11)",
    youtubeId: "yCjJyiqpAuU",
    description: "Giai điệu ca nhạc êm dịu, ngọt ngào giúp bé thư giãn, hòa giọng và luyện phát âm từ vựng ngôi sao, bầu trời.",
    lyrics: [
      { en: "Twinkle, twinkle, little star,", vi: "Lấp lánh, lấp lánh, ngôi sao nhỏ ơi," },
      { en: "How I wonder what you are!", vi: "Em tự hỏi bạn là điều kỳ diệu gì thế!" },
      { en: "Up above the world so high,", vi: "Tỏa sáng tít trên cao của thế giới," },
      { en: "Like a diamond in the sky.", vi: "Như một viên kim cương lung linh trên bầu trời." },
      { en: "Twinkle, twinkle, little star,", vi: "Lấp lánh, lấp lánh, ngôi sao nhỏ ơi," },
      { en: "How I wonder what you are!", vi: "Em tự hỏi bạn là điều kỳ diệu gì thế!" }
    ],
    notes: [
      { f: 261.63, d: 0.4 }, { f: 261.63, d: 0.4 }, { f: 392.00, d: 0.4 }, { f: 392.00, d: 0.4 },
      { f: 440.00, d: 0.4 }, { f: 440.00, d: 0.4 }, { f: 392.00, d: 0.8 }
    ]
  },
  {
    id: "head-shoulders",
    title: "Head, Shoulders, Knees and Toes",
    titleVi: "Đầu, Vai, Đầu gối và Ngón chân",
    icon: "🤸",
    color: "#8B5CF6",
    theme: "Bộ phận cơ thể (Unit 8 & Unit 15)",
    youtubeId: "QA48wTGbU7A",
    description: "Bài hát vận động theo nhịp nhạc cực kỳ sôi nổi giúp bé vừa nhún nhảy vừa hát tên các bộ phận cơ thể.",
    lyrics: [
      { en: "Head, shoulders, knees and toes, knees and toes!", vi: "Đầu, vai, đầu gối và ngón chân, đầu gối và ngón chân!" },
      { en: "Head, shoulders, knees and toes, knees and toes!", vi: "Đầu, vai, đầu gối và ngón chân, đầu gối và ngón chân!" },
      { en: "And eyes and ears and mouth and nose!", vi: "Và mắt, tai, miệng và mũi xinh!" },
      { en: "Head, shoulders, knees and toes, knees and toes!", vi: "Đầu, vai, đầu gối và ngón chân, đầu gối và ngón chân!" }
    ],
    notes: [
      { f: 392.00, d: 0.3 }, { f: 329.63, d: 0.3 }, { f: 261.63, d: 0.3 }, { f: 329.63, d: 0.3 }, { f: 392.00, d: 0.5 },
      { f: 523.25, d: 0.3 }, { f: 523.25, d: 0.3 }, { f: 493.88, d: 0.6 }
    ]
  },
  {
    id: "wheels-on-bus",
    title: "The Wheels on the Bus",
    titleVi: "Bánh xe buýt quay tròn tròn",
    icon: "🚌",
    color: "#3B82F6",
    theme: "Phương tiện giao thông (Unit 11)",
    youtubeId: "e_04ZrNroTo",
    description: "Bài ca vui nhộn về chuyến xe buýt chở học sinh đi học mỗi ngày với tiếng còi kêu và bánh xe quay vui vẻ.",
    lyrics: [
      { en: "The wheels on the bus go round and round,", vi: "Bánh xe trên chiếc xe buýt cứ quay tròn tròn," },
      { en: "Round and round, round and round.", vi: "Quay tròn tròn, rồi quay tròn tròn." },
      { en: "The wheels on the bus go round and round,", vi: "Bánh xe buýt cứ quay tròn tròn mãi," },
      { en: "All through the town!", vi: "Đi khắp mọi nẻo đường trong thị trấn!" },
      { en: "The horn on the bus goes beep, beep, beep!", vi: "Còi xe buýt kêu bíp, bíp, bíp!" },
      { en: "All through the town!", vi: "Vang khắp cả thị trấn thân yêu!" }
    ],
    notes: [
      { f: 261.63, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 349.23, d: 0.35 },
      { f: 440.00, d: 0.25 }, { f: 523.25, d: 0.25 }, { f: 440.00, d: 0.25 }
    ]
  },
  {
    id: "old-macdonald",
    title: "Old MacDonald Had a Farm",
    titleVi: "Trang trại của bác MacDonald",
    icon: "🚜",
    color: "#10B981",
    theme: "Động vật nuôi (Unit 2, Unit 4 & Unit 7)",
    youtubeId: "_6HzoUcx3eo",
    description: "Khám phá trang trại rộn ràng tiếng hát cùng các loài động vật dễ thương (vịt duck, mèo cat, chó dog...).",
    lyrics: [
      { en: "Old MacDonald had a farm, E-I-E-I-O!", vi: "Bác MacDonald có một trang trại, E-I-E-I-O!" },
      { en: "And on that farm he had a duck, E-I-E-I-O!", vi: "Và trong trang trại bác có chú vịt con, E-I-E-I-O!" },
      { en: "With a quack-quack here and a quack-quack there,", vi: "Với tiếng cạp cạp ở đây và tiếng cạp cạp ở đằng kia," },
      { en: "Here a quack, there a quack, everywhere a quack-quack!", vi: "Chỗ này cạp, chỗ kia cạp, đâu đâu cũng rộn ràng tiếng cạp cạp!" },
      { en: "Old MacDonald had a farm, E-I-E-I-O!", vi: "Bác MacDonald có một trang trại, E-I-E-I-O!" }
    ],
    notes: [
      { f: 392.00, d: 0.35 }, { f: 392.00, d: 0.35 }, { f: 392.00, d: 0.35 }, { f: 293.66, d: 0.35 },
      { f: 329.63, d: 0.35 }, { f: 329.63, d: 0.35 }, { f: 293.66, d: 0.7 }
    ]
  }
];
