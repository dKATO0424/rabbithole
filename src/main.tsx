import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import leftIcon from "../src/assets/rabbit_left.svg";
import rightIcon from "../src/assets/rabbit_right.svg"
import Menu from "./components/Menu.tsx";
import Home from "./Pages/Home.tsx";
import History from "./Pages/History.tsx";
import Footer from "./components/Footer.tsx";
import InstagramLink from "./components/instagramlink.tsx"
import "./style.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <div className="title-wrapper">
        <img src={leftIcon} alt="rabbit_left" className="title-icon" />
        <h1 className="title-text">Rabbit Hole</h1>
        <img src={rightIcon} alt="rabbit_right" className="title-icon" />
      </div>
      <Menu />
      <hr className="divider" />
      <InstagramLink url="https://www.instagram.com/rabbithole0x0/" />
      <div>
        最新情報は、Instagramをチェック！
      </div>
      <hr className="divider" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <hr className="divider" />
      <Footer />
    </HashRouter>
  </React.StrictMode>
);