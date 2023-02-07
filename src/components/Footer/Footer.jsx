import React from 'react';
import {
  Link,
  useLocation,
  // matchPath
} from 'react-router-dom';
import { Container } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import { CASE_STUDIES, ABOUT_ME } from '../../constants/routes';

import './footer.css';

const Footer = ({ scrollPosition }) => {
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
          // const isActive = !!matchPath({ path, end: true }, location.pathname);
          return (
            <li key={path}>
              <Link
                to={path}
                // className={`${isActive ? 'active-link' : ''}`}
                state={{ location }}
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
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/social_media/behance.svg"
                effect="blur"
                alt="behance"
              />
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/social_media/instagram.svg"
                effect="blur"
                alt="instagram"
              />
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/social_media/linkedin.svg"
                effect="blur"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="footer__second-row">
          <div>
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect="blur"
              src="images/copyright.svg"
              alt="copyright"
              style={{ marginRight: 4 }}
            />
            <p>Intellectual property of Jeremie Montero.</p>
          </div>
          <FooterNavigation className="footer__navigation" />
        </div>
      </Container>
    </div>
  );
};

export default trackWindowScroll(Footer);
