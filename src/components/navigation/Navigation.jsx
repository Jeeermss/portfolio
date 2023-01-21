import { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { CASE_STUDIES, ABOUT_ME } from '../../constants/routes';
import './navigation.css';

const StyledList = styled('ul')(({ theme }) => ({
  padding: theme.spacing(1),
}));
const StyledImg = styled('img')(() => ({}));
const StyledNav = styled('nav')(() => ({}));

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
    <StyledNav
      className="navbar"
      sx={{
        mx: {
          xs: '8px',
          sm: 'auto',
        },
        mt: {
          xs: '24px',
          sm: '64px',
        },
        mb: {
          xs: '72px',
          sm: '120px',
        },
      }}
    >
      <StyledImg
        src="/assets/logo.svg"
        alt="placeholder"
        sx={{
          width: {
            xs: '60px',
            md: 'auto',
          },
        }}
      />
      <StyledList
        className="navbar-list-items"
        sx={{
          display: {
            xs: 'none !important',
            md: 'flex !important',
          },
        }}
      >
        {menus.map(({ path, menuLabel }) => {
          const isActive = !!matchPath({ path, end: true }, location.pathname);
          return (
            <li className="navbar-list-item" key={path}>
              <Link
                to={path}
                className={`${isActive ? 'active-link' : ''}`}
                state={{ location }}
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
      </StyledList>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        // onClick={handleDrawerToggle}
        sx={{
          p: 1,
          display: { md: 'none' },
        }}
      >
        <MenuIcon sx={{ width: 30, height: 'auto' }} />
      </IconButton>
    </StyledNav>
  );
};

export default Navigation;
