# ShopHub - Cửa hàng bán hàng trực tuyến

Một website bán hàng đơn giản được xây dựng bằng HTML, CSS và JavaScript. Ứng dụng chạy hoàn toàn trên trình duyệt mà không cần backend.

## 🎯 Tính năng

### ✅ Trang chủ
- Hiển thị danh sách sản phẩm dưới dạng lưới (grid)
- Mỗi sản phẩm có:
  - Hình ảnh/icon
  - Tên sản phẩm
  - Mô tả ngắn
  - Giá
  - Nút "Mua ngay" để thêm vào giỏ hàng

### 🛒 Giỏ hàng
- Thêm sản phẩm vào giỏ khi bấm "Mua ngay"
- Hiển thị số lượng sản phẩm trong giỏ (badge trên icon)
- Xem chi tiết giỏ hàng (danh sách sản phẩm, giá, số lượng)
- Thay đổi số lượng sản phẩm (tăng/giảm)
- Xóa sản phẩm khỏi giỏ
- Tính toán tổng tiền tự động
- Hiển thị phí vận chuyển

### 💳 Thanh toán
- Nút "Thanh toán" để hoàn tất đơn hàng
- Hiển thị thông tin đơn hàng
- Lưu giỏ hàng vào localStorage (giỏ hàng không bị mất khi làm mới trang)

### 🎨 Giao diện
- **Thiết kế hiện đại**: Sử dụng gradient màu sắc đẹp mắt
- **Responsive**: Tự động điều chỉnh với mọi kích thước màn hình
- **Mượt mà**: Các animation và transition tự nhiên
- **User-friendly**: Dễ sử dụng, trực quan

## 📱 Responsive Design
- ✅ Desktop (≥1200px)
- ✅ Tablet (≥768px)
- ✅ Mobile (< 480px)

## 🎨 Màu sắc
- Màu chính: Indigo (#6366f1)
- Màu phụ: Pink (#ec4899)
- Màu thành công: Green (#10b981)
- Màu lỗi: Red (#ef4444)

## 🚀 Cách sử dụng

1. **Mở file `index.html`** trong trình duyệt
2. **Xem danh sách sản phẩm** trên trang chủ
3. **Bấm "Mua ngay"** để thêm sản phẩm vào giỏ
4. **Bấm icon giỏ hàng** để xem giỏ hàng
5. **Điều chỉnh số lượng** hoặc **xóa sản phẩm** nếu cần
6. **Bấm "Thanh toán"** để hoàn tất đơn hàng

## 📂 Cấu trúc file
```
kehoachhoctap/
├── index.html      # File HTML chính
├── styles.css      # Stylesheet cho giao diện
├── script.js       # JavaScript cho chức năng
└── README.md       # File hướng dẫn này
```

## 💾 Lưu trữ dữ liệu
- Giỏ hàng được lưu tự động trong **localStorage** của trình duyệt
- Dữ liệu giỏ hàng sẽ được giữ lại ngay cả sau khi làm mới trang

## 🔧 Công nghệ sử dụng
- **HTML5**: Cấu trúc semantic
- **CSS3**: Flexbox, Grid, Gradient, Animation
- **JavaScript (ES6+)**: DOM manipulation, localStorage API

## 📊 Sản phẩm mẫu
Website có sẵn 6 sản phẩm mẫu:
1. Laptop Gaming Pro - 25.000.000₫
2. Tai nghe Bluetooth - 2.500.000₫
3. Điện thoại Smartphone - 15.000.000₫
4. Chuột gaming RGB - 1.200.000₫
5. Bàn phím cơ - 3.500.000₫
6. Webcam 4K - 2.000.000₫

## ✨ Tính năng bổ sung
- 🔔 Thông báo khi thêm/xóa sản phẩm
- 🚚 Phí vận chuyển 50.000₫ (cộng vào tổng)
- 🎯 Navigation giữa trang chủ và giỏ hàng mượt mà
- 📱 Giao diện tối ưu cho mobile

## 🎓 Bài học
Đây là một dự án tuyệt vời để học:
- Cách sử dụng DOM APIs
- Quản lý state với JavaScript
- Làm việc với localStorage
- Thiết kế responsive CSS
- Tạo giao diện người dùng thân thiện

---

**Tác giả**: tongvotanphat12-coder  
**Năm**: 2024  
**Giấy phép**: MIT
