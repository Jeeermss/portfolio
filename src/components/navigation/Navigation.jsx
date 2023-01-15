import { useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { CASE_STUDIES, ABOUT_ME } from '../../constants/routes';
import './navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isContactHovered, setIsContactHovered] = useState(false);
  const menus = [
    {
      path: '/',
      menuLabel: 'Home',
    },
    {
      path: CASE_STUDIES,
      menuLabel: 'Case Studies',
    },
    {
      path: ABOUT_ME,
      menuLabel: 'About Me',
    },
  ];

  return (
    <nav className="navbar">
      <img src="/assets/logo.svg" alt="placeholder" />
      <ul className="navbar-list-items">
        {menus.map(({ path, menuLabel }) => {
          const isActive = !!matchPath({ path, end: true }, location.pathname);
          return (
            <li className="navbar-list-item" key={path}>
              <Link
                to={path}
                className={`${isActive ? 'active-link' : ''}`}
                state={{ location }}
                replace
              >
                {menuLabel}
              </Link>
            </li>
          );
        })}
        <li className="navbar-list-item-contact">
          <a
            href="mailto:jeremie.montero@gmail.com"
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            <div
              className={`status-indicator ${
                isContactHovered ? 'navbar-list-item-contact__blink' : ''
              }`}
            ></div>
            Available for work
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
