import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/admin/Admin";
import ThongKe from "./components/admin/content/ThongKe";
import BanHangTaiQuay from "./components/admin/content/BanHangTaiQuay";
import QuanLyDonHang from "./components/admin/content/hoaDon/QuanLyDonHang";
import SanPham from "./components/admin/content/quanLySanPham/SanPham";
import DeGiay from "./components/admin/content/quanLySanPham/DeGiay";
import LoaiGiay from "./components/admin/content/quanLySanPham/LoaiGiay";
import ChatLieu from "./components/admin/content/quanLySanPham/ChatLieu";
import ThuongHieu from "./components/admin/content/quanLySanPham/ThuongHieu";
import TraHang from "./components/admin/traHang/TraHang";
import DotGiamGia from "./components/admin/content/giamGia/DotGiamGia";
import PhieuGiamGia from "./components/admin/content/giamGia/phieuGiamGia/PhieuGiamGia";
import NhanVien from "./components/admin/content/TaiKhoan/NhanVien";
import KhachHang from "./components/admin/content/TaiKhoan/KhachHang";
import AddDotGiamGia from "./components/admin/content/giamGia/AddDotGiamGia";
import AddNhanVien from "./components/admin/content/TaiKhoan/AddNhanVien";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import store đã tạo

import NhanVienDetail from "./components/admin/content/TaiKhoan/nhanVien/NhanVienDetail";

import AddKhachHang from "./components/admin/content/TaiKhoan/AddKhachHang";
import SanPhamChiTiet from "./components/admin/content/quanLySanPham/SanPhamChiTiet";
import MauSac from "./components/admin/content/quanLySanPham/MauSac";
import KichThuoc from "./components/admin/content/quanLySanPham/KichThuoc";
import LopLot from "./components/admin/content/quanLySanPham/LopLot";
import DotGiamGiaChiTiet from "./components/admin/content/giamGia/giamGiaChiTiet/DotGiamGiaChiTiet";
import Login from "./login/client/Login";
import Register from "./login/client/Register";
import ForgotPasswordForm from "./login/client/ForgotPasswordForm";
import HomePage from "./components/client/layout/content/HomePage";
import User from "./components/client/layout/content/user/User";
import Cart from "./components/client/layout/content/cart/Cart";
import Product from "./components/client/layout/content/products/Products";
import ProductDetail from "./components/client/layout/content/products/ProductDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPasswordForm></ForgotPasswordForm>}
        ></Route>

        <Route path="/" element={<App></App>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route index element={<ThongKe></ThongKe>}></Route>
          <Route path="thong-ke" element={<ThongKe></ThongKe>}></Route>
          <Route
            path="ban-hang-tai-quay"
            element={<BanHangTaiQuay></BanHangTaiQuay>}
          ></Route>
          <Route
            path="quan-ly-don-hang"
            element={<QuanLyDonHang></QuanLyDonHang>}
          ></Route>
          <Route path="san-pham" element={<SanPham></SanPham>}></Route>
          <Route
            path="san-pham-chi-tiet"
            element={<SanPhamChiTiet></SanPhamChiTiet>}
          ></Route>
          <Route path="de-giay" element={<DeGiay></DeGiay>}></Route>
          <Route path="mau-sac" element={<MauSac></MauSac>}></Route>
          <Route path="kich-thuoc" element={<KichThuoc></KichThuoc>}></Route>
          <Route path="lop-lot" element={<LopLot></LopLot>}></Route>
          <Route path="loai-giay" element={<LoaiGiay></LoaiGiay>}></Route>
          <Route path="chat-lieu" element={<ChatLieu></ChatLieu>}></Route>
          <Route path="thuong-hieu" element={<ThuongHieu></ThuongHieu>}></Route>
          <Route path="tra-hang" element={<TraHang></TraHang>}></Route>
          <Route
            path="dot-giam-gia"
            element={<DotGiamGia></DotGiamGia>}
          ></Route>
          <Route
            path="dot-giam-gia/add"
            element={<AddDotGiamGia></AddDotGiamGia>}
          ></Route>
          <Route
            path="dot-giam-gia/:id"
            element={<DotGiamGiaChiTiet></DotGiamGiaChiTiet>}
          ></Route>

          <Route
            path="phieu-giam-gia"
            element={<PhieuGiamGia></PhieuGiamGia>}
          ></Route>
          <Route path="nhan-vien" element={<NhanVien></NhanVien>}></Route>

          <Route
            path="nhan-vien/add"
            element={<AddNhanVien></AddNhanVien>}
          ></Route>

          <Route path="khach-hang" element={<KhachHang></KhachHang>}></Route>

          <Route
            path="nhan-vien/detail"
            element={<NhanVienDetail></NhanVienDetail>}
          ></Route>

          <Route
            path="khach-hang/add"
            element={<AddKhachHang></AddKhachHang>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
