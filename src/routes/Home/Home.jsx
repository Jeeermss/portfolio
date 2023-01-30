import Hero from '../../components/Hero/Hero';
import CaseStudiesDirectory from '../../components/CaseStudiesDirectory/CaseStudiesDirectory';
import { observer } from 'mobx-react';

import './home.css';

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <Hero />
        <div>
          <CaseStudiesDirectory />
        </div>
      </div>
    </main>
  );
};

export default observer(Home);
