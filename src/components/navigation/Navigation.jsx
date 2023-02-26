import { useState } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';

import { CASE_STUDIES, ABOUT_ME } from '../../constants/routes';
import './navigation.css';

const StyledList = styled('ul')(({ theme }) => ({
  padding: theme.spacing(1),
}));
const StyledImg = styled('img')(() => ({}));
const StyledNav = styled('nav')(() => ({}));
const StyledBurgerMenu = styled('div')(() => ({}));
const StyledDiv = styled('div')(() => ({}));

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflowY = 'auto';
    }
  };

  const handleMobileMenusClick = (path) => {
    setIsMenuOpen(false);
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';
    navigate(path);
  };

  return (
    <>
      <Container>
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
            onClick={() => navigate('/')}
            src="/assets/logo.svg"
            alt="placeholder"
            sx={{
              width: {
                xs: '60px',
                md: 'auto',
              },
              ':hover': {
                cursor: 'pointer',
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
              const isActive = !!matchPath(
                { path, end: true },
                location.pathname
              );
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
          {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        // onClick={handleDrawerToggle}
        sx={{
          p: 1,
          display: { md: 'none' },
        }}
      >
        <MenuIcon sx={{ width: 30, height: 'auto' }} />
      </IconButton> */}
          <StyledDiv
            sx={{
              p: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            <StyledBurgerMenu
              id="navbar__burger-menu"
              onClick={() => handleMenuOpen()}
              className={`${isMenuOpen ? 'open' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </StyledBurgerMenu>
          </StyledDiv>
        </StyledNav>
      </Container>
      <nav
        className={`navbar-list-items__mobile ${
          isMenuOpen ? 'navbar-list-items__mobile-open' : ''
        }`}
      >
        <StyledDiv
          className="navbar-list-items__mobile-menus"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            className="navbar-list-items__mobile-menus-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {menus.map(({ path, menuLabel }) => {
              const isActive = !!matchPath(
                { path, end: true },
                location.pathname
              );
              return (
                <div
                  className="navbar-list-item"
                  key={path}
                  style={{
                    width: '100%',
                    border: '1px solid #2F2C2F',
                    padding: '15px',
                    textAlign: 'left',
                  }}
                  onClick={() => handleMobileMenusClick(path)}
                >
                  <span className={`${isActive ? 'active-link-mobile' : ''}`}>
                    {menuLabel}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="navbar-list-item-contact" style={{ width: '100%' }}>
            <a
              href="mailto:jeremie.montero@gmail.com"
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              style={{ justifyContent: 'center' }}
            >
              <div
                className={`status-indicator ${
                  isContactHovered ? 'navbar-list-item-contact__blink' : ''
                }`}
              ></div>
              Available for work
            </a>
          </div>
        </StyledDiv>
      </nav>
    </>
  );
};

export default Navigation;
