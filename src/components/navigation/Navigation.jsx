import { Link, matchPath, useLocation } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const { pathname } = useLocation();
  const menus = [
    {
      path: '/',
      menuLabel: 'Home',
    },
    {
      path: '/talent-pipelines',
      menuLabel: 'Case Studies',
    },
    {
      path: '/career-starter',
      menuLabel: 'About Me',
    },
  ];

  return (
    <nav className="navbar">
      <img src="/assets/logo.svg" alt="placeholder" />
      <ul className="navbar-list-items">
        {menus.map(({ path, menuLabel }) => {
          const isActive = !!matchPath({ path, end: true }, pathname);
          return (
            <li className="navbar-list-item" key={path}>
              <Link to={path} className={`${isActive ? 'active-link' : ''}`}>
                {menuLabel}
              </Link>
            </li>
          );
        })}
        <li className="navbar-list-item-contact">
          <a href="mailto:jeremie.montero@gmail.com">
            <div className="status-indicator"></div>
            Available for work
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
