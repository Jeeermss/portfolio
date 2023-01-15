import { useEffect, useRef } from 'react';
import Hero from '../../components/Hero/Hero';
import CaseStudiesDirectory from '../../components/CaseStudiesDirectory/CaseStudiesDirectory';

import './home.css';

const Home = () => {
  const caseStudiesRef = useRef();

  useEffect(() => {
    if (
      caseStudiesRef.current &&
      window.location.pathname === '/case-studies'
    ) {
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
