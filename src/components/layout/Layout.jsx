import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/love-search-logo.svg";
import "./layout.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Layout = () => {
     return (
          <div className="layout__container">
               {/* Навигация */}
               <nav className="nav__container">
                    {/* Логотип */}
                    <div className="nav__logo">
                         <NavLink to={"/reactjs-js-template/"} aria-label="Главная">
                              <img src={logo} alt="Love Search Logo" />
                         </NavLink>
                    </div>

                    {/* Навигационные ссылки */}
                    <div className="nav__links">
                         <NavLink to={"/heart"} className="nav__link" aria-label="Лайки">
                              <FavoriteBorderIcon />
                              <div className="nav__alert">12</div>
                         </NavLink>

                         <NavLink to="/header/mutually" className="nav__link" aria-label="Группы">
                              <GroupsOutlinedIcon />
                              <div className="nav__alert">12</div>
                         </NavLink>

                         <NavLink to="/heart/chat" className="nav__link" aria-label="Чат">
                              <ChatBubbleOutlineOutlinedIcon />
                              <div className="nav__alert">12</div>
                         </NavLink>
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
