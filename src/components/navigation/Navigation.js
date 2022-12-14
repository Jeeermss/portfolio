import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    return (
      <nav className="navbar">
        <img src="https://via.placeholder.com/106x70" alt="placeholder" />
        <ul className="navbar-list-items">
          <li className="navbar-list-item">
            <Link to='/'>Home</Link>
            </li>
          <li className="navbar-list-item">
            <Link to='/talent-pipelines'>Talent Pipelines</Link>
            </li>
          <li className="navbar-list-item">
            <Link to='/career-starter'>CareerStarter</Link>
          </li>
          <li className="navbar-list-item-contact">
            <button>
              <div className="status-indicator"></div>
              Available for work
            </button>
          </li>
        </ul>
      </nav>
  )
};

export default Navigation;