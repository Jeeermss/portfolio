import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledEngineProvider, Container } from '@mui/material';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ScrollToTop from './routes/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

import {
  CASE_STUDIES,
  TALENT_PIPELINE,
  CAREER_STARTER,
  ABOUT_ME,
  EVALUATION_TOOL,
} from './constants/routes';

import './App.css';
import './global_styles/typography.css';
import './global_styles/mui-breakpoints.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import EvaluationTool from './routes/EvaluationTool/EvaluationTool';
// import 'animate.css/animate.min.css';

const TalentPipeline = React.lazy(() =>
  import('./routes/TalentPipeline/TalentPipeline')
);
const CareerStarter = React.lazy(() =>
  import('./routes/CareerStarter/CareerStarter')
);
const AboutMe = React.lazy(() => import('./routes/AboutMe/AboutMe'));
const Home = React.lazy(() => import('./routes/Home/Home'));

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container sx={{ minHeight: '100vh' }}>
        <ScrollToTop>
          <Navigation />
          <React.Suspense fallback={<LoadingScreen />}>
            {/* <LoadingScreen /> */}
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Home />} path={CASE_STUDIES} />
              <Route element={<TalentPipeline />} path={TALENT_PIPELINE} />
              <Route element={<CareerStarter />} path={CAREER_STARTER} />
              <Route element={<EvaluationTool />} path={EVALUATION_TOOL} />
              <Route element={<AboutMe />} path={ABOUT_ME} />
            </Routes>
          </React.Suspense>
        </ScrollToTop>
      </Container>
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
