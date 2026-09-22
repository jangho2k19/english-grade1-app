# 🎈 Tiếng Anh 1 - Global Success Web App 🌟

Ứng dụng web học Tiếng Anh lớp 1 tương tác sinh động, bám sát bộ sách giáo khoa **Tiếng Anh 1 - Global Success** (Bộ GD&ĐT).

---

## ✨ Tính năng nổi bật mới nâng cấp

1. **🔊 Giọng đọc Nữ trong trẻo, cao và rõ ràng (Female Voice TTS):**
   - Tự động ưu tiên các giọng nữ tiếng Anh chất lượng cao (*Microsoft Jenny, Aria, Google US English, Samantha...*).
   - Tinh chỉnh cao độ trong trẻo (`pitch: 1.15`), nhịp độ rõ ràng (`rate: 0.85`) dành riêng cho học sinh tiểu học.
   - Nút cài đặt giọng đọc ⚙️: Dễ dàng nghe thử, lựa chọn giọng và điều chỉnh cao độ/tốc độ.
   - Cơ chế chống ngắt tiếng và đồng bộ âm thanh trôi chảy.

2. **🎨 Hình ảnh Vector SVG rực rỡ, sắc nét & cuốn hút:**
   - Bộ hình minh họa vector chuẩn hoạt hình rực rỡ sắc màu cho toàn bộ **64 từ vựng** thuộc 16 Units.
   - Hiệu ứng nổi bật, tương tác mượt mà, không bị vỡ hạt hay lỗi font ô vuông.

3. **🎮 Trò chơi Trắc nghiệm (Quiz) 2 chế độ:**
   - 👁️ **Nhìn hình đoán chữ:** Nhìn hình minh họa sinh động $\rightarrow$ chọn từ tiếng Anh.
   - 🎧 **Luyện nghe (Listening Quiz):** Bấm nghe giọng cô giáo đọc $\rightarrow$ chọn hình ảnh tương ứng.
   - Tùy chọn phạm vi: Luyện tập theo từng Unit riêng biệt hoặc ôn tập tất cả 16 Units.
   - Hiệu ứng âm thanh vui nhộn (ting ting, pháo hoa confetti).

4. **🎴 Thẻ Flashcards thông minh:**
   - Hỗ trợ chọn luyện tập theo từng Unit.
   - Lật thẻ 3D mượt mà kèm tự động phát âm chuẩn.
   - Hỗ trợ phím tắt: Mũi tên trái/phải (`←` / `→`) để chuyển thẻ, phím `Space` hoặc `Enter` để lật thẻ.

5. **⭐ Tích lũy sao & Lưu tiến độ (`localStorage`):**
   - Bé làm đúng sẽ nhận được sao thưởng ⭐ theo từng Unit, được lưu tự động trên trình duyệt.

---

## 🚀 Hướng dẫn chạy ứng dụng

### Cách 1: Chạy trên Windows (Nhanh nhất)
Chỉ cần nhấp đúp chuột vào file:
```
start_server.bat
```
Sau đó trình duyệt mở tại `http://localhost:3000`.

### Cách 2: Chạy lệnh dòng lệnh
```bash
# Trên Windows hoặc Linux/macOS
python -m http.server 3000
```
Hoặc trên Linux/macOS:
```bash
bash start_server.sh
```

### Cách 3: Mở trực tiếp không cần mạng (Offline)
Bạn có thể nhấp đúp trực tiếp vào file `index.html` trong trình duyệt bất kỳ, ứng dụng đã tích hợp sẵn dữ liệu dự phòng và thư viện hình ảnh vector để chạy offline hoàn hảo!
