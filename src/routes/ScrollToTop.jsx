import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CASE_STUDIES } from '../constants/routes';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.pathname !== CASE_STUDIES) {
      const prevLocation = location.state.location.pathname;
      if (location.pathname !== prevLocation) {
        window.scrollTo(0, 0);
      }
    }
  });

  return children;
};

export default ScrollToTop;
