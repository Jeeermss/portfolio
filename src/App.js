import { Routes, Route } from 'react-router-dom';
import { StyledEngineProvider, Container } from '@mui/material';
import CareerStarter from './routes/CareerStarter';
import TalentPipelines from './routes/TalentPipelines';
import Home from './routes/Home/Home';
import AboutMe from './routes/AboutMe/AboutMe';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import './global_styles/typography.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TalentPipelines />} path="/talent-pipelines" />
          <Route element={<CareerStarter />} path="/career-starter" />
          <Route element={<AboutMe />} path="/about-me" />
        </Routes>
      </Container>
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
