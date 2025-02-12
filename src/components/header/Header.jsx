import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import "./header.css";

const Header = () => {
     const location = useLocation(); // ✅ Используем useLocation()

     return (
          <div className="header__layout__container">
               <div className="header__container">
                    {/* Навигационные ссылки */}
                    <div className="header__links">
                         <NavLink to="/header" className="header__link" aria-label="Ваши лайки">
                              Ваши лайки
                         </NavLink>

                         <NavLink to="gost" className="header__link" aria-label="Гости">
                              Гости
                         </NavLink>

                         <NavLink to="mutually" className="header__link" aria-label="Это взаимно">
                              Это взаимно
                         </NavLink>
                    </div>

                    {/* Динамический контент */}
                    <main className="layout__content">
                         <Outlet key={location.pathname} />
                         {/* ✅ Теперь location берется правильно */}
                    </main>
               </div>
      </div>
     );
};

export default Header;
