import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledEngineProvider, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import useStore from './hooks/useStore';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ScrollToTop from './routes/ScrollToTop';
import ProtectedRoute from './routes/ProtectedRoute';
import LoadingScreen from './components/LoadingScreen';

import {
  CASE_STUDIES,
  TALENT_PIPELINE,
  CAREER_STARTER,
  ABOUT_ME,
  EVALUATION_TOOL,
  PROFILES_AND_VERIFICATIONS,
  PRIVATE_URL,
} from './constants/routes';

import './App.css';
import './global_styles/typography.css';
import './global_styles/mui-breakpoints.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'animate.css/animate.min.css';

const TalentPipeline = React.lazy(() =>
  import('./routes/TalentPipeline/TalentPipeline')
);
const CareerStarter = React.lazy(() =>
  import('./routes/CareerStarter/CareerStarter')
);
const EvaluationTool = React.lazy(() =>
  import('./routes/EvaluationTool/EvaluationTool')
);
const ProfilesAndVerifications = React.lazy(() =>
  import('./routes/ProfilesAndVerifications/ProfilesAndVerifications')
);
const AboutMe = React.lazy(() => import('./routes/AboutMe/AboutMe'));
const Home = React.lazy(() => import('./routes/Home/Home'));

function App() {
  const { authStore } = useStore();

  useEffect(() => {
    if (window.location.pathname === PRIVATE_URL) {
      authStore.setIsAuthenticated(true);
      return;
    }
    // authStore.setIsAuthenticated(false);
  });

  return (
    <StyledEngineProvider injectFirst>
      <Container sx={{ minHeight: '100vh' }}>
        <ScrollToTop>
          <Navigation />
          <React.Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route index element={<Home />} path="/" />
              <Route element={<Home />} path={CASE_STUDIES} />
              <Route element={<Home />} path={PRIVATE_URL} />
              <Route
                element={
                  <ProtectedRoute>
                    <TalentPipeline />
                  </ProtectedRoute>
                }
                path={TALENT_PIPELINE}
              />
              <Route
                element={
                  <ProtectedRoute>
                    <CareerStarter />
                  </ProtectedRoute>
                }
                path={CAREER_STARTER}
              />
              <Route
                element={
                  <ProtectedRoute>
                    <EvaluationTool />
                  </ProtectedRoute>
                }
                path={EVALUATION_TOOL}
              />
              <Route
                element={
                  <ProtectedRoute>
                    <ProfilesAndVerifications />
                  </ProtectedRoute>
                }
                path={PROFILES_AND_VERIFICATIONS}
              />
              <Route element={<AboutMe />} path={ABOUT_ME} />
            </Routes>
          </React.Suspense>
          <ToastContainer position="top-right" autoClose={3000} limit={1} />
        </ScrollToTop>
      </Container>
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
