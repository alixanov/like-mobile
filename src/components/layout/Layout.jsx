import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/love-search-logo.svg";
import "./layout.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const Layout = () => {
     const location = useLocation();
     const navigate = useNavigate();

     return (
          <div className="layout__container">
               {/* Навигация */}
               <nav className="nav__container">
                    {/* Логотип */}
                    <div className="nav__logo">
                         <button
                              onClick={() => navigate("/reactjs-js-template/")}
                              className={location.pathname === "/reactjs-js-template/" ? "active" : ""}
                              aria-label="Главная"
                         >
                              <img src={logo} alt="Love Search Logo" />
                         </button>
                    </div>

                    {/* Навигационные кнопки */}
                    <div className="nav__links">
                         <button
                              onClick={() => navigate("/heart")}
                              className={`nav__link ${location.pathname === "/heart" ? "active" : ""}`}
                              aria-label="Лайки"
                         >
                              <FavoriteBorderIcon />
                              <div className="nav__alert">12</div>
                         </button>

                         <button
                              onClick={() => navigate("/header/mutually")}
                              className={`nav__link ${location.pathname === "/header/mutually" ? "active" : ""}`}
                              aria-label="Группы"
                         >
                              <GroupsOutlinedIcon />
                              <div className="nav__alert">12</div>
                         </button>

                         <button
                              onClick={() => navigate("/heart/chat")}
                              className={`nav__link ${location.pathname === "/heart/chat" ? "active" : ""}`}
                              aria-label="Чат"
                         >
                              <ChatBubbleOutlineOutlinedIcon />
                              <div className="nav__alert">12</div>
                         </button>
                    </div>
               </nav>

               {/* Динамический контент */}
               <main className="layout__content">
                    <Outlet />
               </main>
          </div>
     );
};

export default Layout;
