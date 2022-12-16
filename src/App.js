import { Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import CareerStarter from './routes/CareerStarter';
import TalentPipelines from './routes/TalentPipelines';
import Home from './routes/Home';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import './global_styles/typography.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<TalentPipelines />} path='/talent-pipelines' />
          <Route element={<CareerStarter />} path='/career-starter' />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
