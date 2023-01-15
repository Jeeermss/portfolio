import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.pathname !== '/case-studies') {
      const prevLocation = location.state.location.pathname;
      if (location.pathname !== prevLocation) {
        window.scrollTo(0, 0);
      }
    }
  });

  return children;
};

export default ScrollToTop;
