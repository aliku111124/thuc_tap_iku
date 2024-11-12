import { Outlet } from "react-router-dom";
import "./App.scss";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/client/layout/header/Header";
import Navigation from "./components/client/layout/navigation/Navigation";
import Footer from "./components/client/layout/footer/Footer";

function App() {
  const handleTitleFromChild = (childTitle) => {
    document.title = childTitle;
  };
  return (
    <>
      <div className="App">
        <div className="client-header">
          <Header></Header>
        </div>
        <div className="client-navigation">
          <Navigation></Navigation>
        </div>
        <div className="client-content">
          <Outlet context={{ onTitleChange: handleTitleFromChild }}></Outlet>
        </div>
        <div className="client-footer">
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
