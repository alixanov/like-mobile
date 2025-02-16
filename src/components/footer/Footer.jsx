import { NavLink } from 'react-router-dom';

import diamondActive from '../../assets/diamond-active.svg';
import diamond from '../../assets/diamond.svg';
import historyActive from '../../assets/history-active.svg';
import history from '../../assets/history.svg';
import likeActive from '../../assets/like-active.svg';
import like from '../../assets/like.svg';
import searchIconActive from '../../assets/searchIcon-active.svg';
import searchIcon from '../../assets/searchIcon.svg';

import './footer.css';

const navItems = [
     {
          activeIcon: searchIconActive,
          inactiveIcon: searchIcon,
          path: '/',
     },
     {
          activeIcon: historyActive,
          inactiveIcon: history,
          path: '/history',
     },
     {
          activeIcon: diamondActive,
          inactiveIcon: diamond,
          path: '/tarifs',
     },
     {
          activeIcon: likeActive,
          inactiveIcon: like,
          path: '/heart',
     },
];

const Footer = () => {
     return (
          <footer className='footer'>
               {navItems.map((item) => (
                    <NavLink
                         key={item.path}
                         to={item.path}
                         className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                         {({ isActive }) => (
                              <img
                                   src={isActive ? item.activeIcon : item.inactiveIcon}
                                   className='footerIcon'
                                   style={{ width: 24, height: 24, opacity: isActive ? 1 : 0.5 }}
                              />
                         )}
                    </NavLink>
               ))}
          </footer>
     );
};

export default Footer;
