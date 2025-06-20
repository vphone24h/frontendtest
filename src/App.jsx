import { Routes, Route } from "react-router-dom";
import NhapHang from "./pages/NhapHang";
import XuatHang from "./pages/XuatHang";
import TonKhoSoLuong from "./pages/TonKhoSoLuong";
import BaoCao from "./BaoCao"; // Nếu BaoCao.jsx nằm ngoài thư mục pages
import CongNo from "./pages/CongNo";
import DanhSachCanhBao from "./pages/DanhSachCanhBao";

// Nếu muốn xóa sạch luôn: bỏ import Login, DangKy, QuenMatKhau, ResetMatKhau, PrivateRoute, NotAuthorized

function App() {
  return (
    <Routes>
      {/* Trang chính: Không kiểm tra đăng nhập */}
      <Route path="/" element={<BaoCao />} /> {/* Trang mặc định vào là báo cáo */}
      <Route path="/nhap-hang" element={<NhapHang />} />
      <Route path="/xuat-hang" element={<XuatHang />} />
      <Route path="/ton-kho-so-luong" element={<TonKhoSoLuong />} />
      <Route path="/bao-cao" element={<BaoCao />} />
      <Route path="/cong-no" element={<CongNo />} />
      <Route path="/canh-bao-ton-kho" element={<DanhSachCanhBao />} />
    </Routes>
  );
}

export default App;
