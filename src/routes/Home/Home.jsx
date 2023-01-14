import Hero from '../../components/Hero/Hero';
import CaseStudiesDirectory from '../../components/CaseStudiesDirectory/CaseStudiesDirectory';

import './home.css';

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <Hero />
        <CaseStudiesDirectory />
      </div>
    </main>
  );
};

export default Home;
