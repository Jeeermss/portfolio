import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Container } from '@mui/material';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaBehance } from '@react-icons/all-files/fa/FaBehance';
import { FaRegCopyright } from '@react-icons/all-files/fa/FaRegCopyright';

import './footer.css';

const Footer = () => {
  const location = useLocation();
  const menus = [
    {
      path: '/',
      menuLabel: 'Home',
    },
    {
      path: '/case-studies',
      menuLabel: 'Case Studies',
    },
    {
      path: '/about-me',
      menuLabel: 'About Me',
    },
  ];

  return (
    <div className="footer">
      <Container className="footer__container">
        <div className="footer__first-row">
          <div className="footer__message">
            <h4 className="text-white">Thank you for visiting.</h4>
            <p className="text-white">
              May today remind you of your purpose and to love yourself
              immensely.
            </p>
          </div>
          <div className="footer__social-media">
            <p>Let's Connect</p>
            <div className="footer__social-media-icons">
              <FaBehance size={30} style={{ marginRight: 30 }} />
              <FaInstagram size={30} style={{ marginRight: 30 }} />
              <FaLinkedin size={30} />
            </div>
          </div>
        </div>
        <div className="footer__second-row">
          <div>
            <FaRegCopyright size={16} style={{ marginRight: 4 }} />
            <p>Copyright 2022. Intellectual property of Jeremie Montero.</p>
          </div>
          <ul className="footer__navigation">
            {menus.map(({ path, menuLabel }) => {
              const isActive = !!matchPath(
                { path, end: true },
                location.pathname
              );
              return (
                <li key={path}>
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
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
