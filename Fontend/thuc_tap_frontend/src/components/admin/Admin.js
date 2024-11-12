import { useState } from "react";
import AdminSidebar from "./layout/AdminSidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function Admin(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState("");

  const handleTitleFromChild = (childTitle) => {
    document.title = childTitle;
    setTitle(childTitle);
  };
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <AdminSidebar image={true} collapsed={collapsed}></AdminSidebar>
        </div>
        <div className="admin-content">
          <div className="admin-header">
            <FaBars size={30} onClick={() => setCollapsed(!collapsed)}></FaBars>
            <div className="header-title">
              <div className="admin-title">
                <Row className="mx-1">
                  <Col>
                    <h2>{title}</h2>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="">
            <Outlet context={{ onTitleChange: handleTitleFromChild }}></Outlet>
          </div>
        
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default Admin;
