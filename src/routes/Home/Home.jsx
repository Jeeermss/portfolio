import { useEffect, useRef } from 'react';
import Hero from '../../components/Hero/Hero';
import CaseStudiesDirectory from '../../components/CaseStudiesDirectory/CaseStudiesDirectory';

import { CASE_STUDIES } from '../../constants/routes';
import './home.css';

const Home = () => {
  const caseStudiesRef = useRef();

  useEffect(() => {
    if (caseStudiesRef.current && window.location.pathname === CASE_STUDIES) {
      window.scrollTo(0, caseStudiesRef.current.offsetTop);
    }
  });

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

export default Home;
