import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import CaseStudiesDirectory from '../../components/CaseStudiesDirectory/CaseStudiesDirectory';
import { observer } from 'mobx-react';

import { CASE_STUDIES } from '../../constants/routes';
import './home.css';

const Home = () => {
  const caseStudiesRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (caseStudiesRef.current && location.pathname === CASE_STUDIES) {
      window.scrollTo(0, caseStudiesRef.current.offsetTop);
    }
  }, [location]);

  return (
    <main>
      <div className="home-container">
        <Hero />
        <div ref={caseStudiesRef}>
          <CaseStudiesDirectory />
        </div>
      </div>
    </main>
  );
};

export default observer(Home);
