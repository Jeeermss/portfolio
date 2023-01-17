import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Container } from '@mui/material';

import { CASE_STUDIES, ABOUT_ME } from '../../constants/routes';

import './footer.css';

const Footer = () => {
  const location = useLocation();
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

  const FooterNavigation = ({ className }) => {
    return (
      <ul className={className}>
        {menus.map(({ path, menuLabel }) => {
          const isActive = !!matchPath({ path, end: true }, location.pathname);
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
    );
  };

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
          <FooterNavigation className="footer__navigation-mobile" />
          <div className="footer__social-media">
            <p>Let's Connect</p>
            <div className="footer__social-media-icons">
              <img src="images/social_media/behance_2.svg" alt="behance" />
              <img src="images/social_media/instagram.svg" alt="instagram" />
              <img src="images/social_media/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="footer__second-row">
          <div>
            <img
              src="images/copyright.svg"
              alt="behance"
              style={{ marginRight: 4 }}
            />
            <p>Copyright 2022. Intellectual property of Jeremie Montero.</p>
          </div>
          <FooterNavigation className="footer__navigation" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
