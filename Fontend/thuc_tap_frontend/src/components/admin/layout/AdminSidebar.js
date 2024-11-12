import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaGem, FaGithub } from "react-icons/fa";
import sidebarBg from "../../../assets/bg.jpg";
import "react-pro-sidebar/dist/css/styles.css";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminSidebar = (props) => {
  const { image, collapsed, rtl, toggled, handleToggleSidebar } = props;

  return (
    <>
      <ProSidebar
        image={image ? sidebarBg : false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        style={{
          background: "linear-gradient(135deg, #00bbff, #003399)", // Colorful gradient background
        }}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 16,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "#ffffff", // Text color
            }}
          >
            <span>
              <DiReact size={"3em"} color={"#00ffcc"} /> FPoly Shop
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard color="#ffdf00" />} suffix={<span className="badge red"></span>}>
              <Link to="/admin/thong-ke" style={{ color: "#fff" }}>Thống kê</Link>
            </MenuItem>
            <MenuItem icon={<MdDashboard color="#ffdf00" />} suffix={<span className="badge red"></span>}>
              <Link to="/admin/ban-hang-tai-quay" style={{ color: "#fff" }}>Bán hàng tại quầy</Link>
            </MenuItem>
            <MenuItem icon={<MdDashboard color="#ffdf00" />} suffix={<span className="badge red"></span>}>
              <Link to="/admin/quan-ly-don-hang" style={{ color: "#fff" }}>Quản lý đơn hàng</Link>
            </MenuItem>
          </Menu>

          <Menu iconShape="circle">
            <SubMenu title="Quản lý sản phẩm" icon={<FaGem color="#ff66cc" />}>
              <MenuItem><Link to="/admin/san-pham" style={{ color: "#fff" }}>Sản phẩm</Link></MenuItem>
              <MenuItem><Link to="/admin/de-giay" style={{ color: "#fff" }}>Đế giày</Link></MenuItem>
              <MenuItem><Link to="/admin/mau-sac" style={{ color: "#fff" }}>Màu sắc</Link></MenuItem>
              <MenuItem><Link to="/admin/loai-giay" style={{ color: "#fff" }}>Danh mục</Link></MenuItem>
              <MenuItem><Link to="/admin/kich-thuoc" style={{ color: "#fff" }}>Kích thước</Link></MenuItem>
              <MenuItem><Link to="/admin/lop-lot" style={{ color: "#fff" }}>Lớp lót</Link></MenuItem>
              <MenuItem><Link to="/admin/chat-lieu" style={{ color: "#fff" }}>Chất liệu</Link></MenuItem>
              <MenuItem><Link to="/admin/thuong-hieu" style={{ color: "#fff" }}>Thương hiệu</Link></MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard color="#ffdf00" />} suffix={<span className="badge red"></span>}>
              <Link to="/admin/tra-hang" style={{ color: "#fff" }}>Trả hàng</Link>
            </MenuItem>
          </Menu>

          <Menu>
            <SubMenu title="Giảm giá" icon={<FaGem color="#ff66cc" />}>
              <MenuItem><Link to="/admin/dot-giam-gia" style={{ color: "#fff" }}>Đợt giảm giá</Link></MenuItem>
              <MenuItem><Link to="/admin/phieu-giam-gia" style={{ color: "#fff" }}>Phiếu giảm giá</Link></MenuItem>
            </SubMenu>
            <SubMenu title="Tài khoản" icon={<FaGem color="#ff66cc" />}>
              <MenuItem><Link to="/admin/nhan-vien" style={{ color: "#fff" }}>Nhân viên</Link></MenuItem>
              <MenuItem><Link to="/admin/khach-hang" style={{ color: "#fff" }}>Khách hàng</Link></MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
          
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default AdminSidebar;
