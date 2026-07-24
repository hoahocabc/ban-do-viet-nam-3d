# 🇻🇳 Bản Đồ Việt Nam 3D - Interactive Web App

Ứng dụng bản đồ Việt Nam 3D tương tác chạy trực tiếp trên trình duyệt, xây dựng bằng **Three.js**, **D3.js** và **GSAP**.

## 🌟 Tính năng nổi bật
- **Hiển thị 3D:** Khối bản đồ Việt Nam với đường viền rực rỡ trong không gian 3 chiều.
- **Tương tác trực quan:** 
  - Cuộn chuột để **Phóng to / Thu nhỏ**.
  - Nhấn giữ chuột trái và kéo để **Xoay góc nhìn 3D**.
- **Hiệu ứng nổi khối (Extrusive Animation):** Click vào bất kỳ tỉnh/thành nào, tỉnh đó sẽ **tự động nổi cao lên khỏi mặt đất** và đổi màu nổi bật.
- **Bảng thông tin chi tiết:** Hiển thị diện tích, dân số ước tính và vùng miền ngay khi chọn tỉnh.

## 🚀 Cách đưa lên GitHub Pages (Chạy Online Miễn Phí)

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com/) và bấm nút **New Repository**.
2. Đặt tên Repo (ví dụ: `vietnam-3d-map`), chọn **Public** và bấm **Create repository**.

### Bước 2: Tải code lên GitHub
Tải 4 file (`index.html`, `style.css`, `main.js`, `README.md`) lên repo vừa tạo bằng cách kéo thả vào trang GitHub (hoặc dùng Git lệnh tay):

```bash
git init
git add .
git commit -m "Initial commit 3D Vietnam Map"
git branch -M main
git remote add origin [https://github.com/](https://github.com/)<tên_tài_khoản_của_bạn>/vietnam-3d-map.git
git push -u origin main