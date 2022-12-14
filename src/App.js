import { Routes, Route } from 'react-router-dom';

import CareerStarter from './routes/CareerStarter';
import TalentPipelines from './routes/TalentPipelines';
import Home from './routes/Home';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<TalentPipelines/>} path='/talent-pipelines' />
        <Route element={<CareerStarter/>} path='/career-starter' />
      </Routes>
    </div>
  );
}

export default App;
