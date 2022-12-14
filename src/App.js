import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CareerStarter from './routes/CareerStarter';
import TalentPipelines from './routes/TalentPipelines';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/talent-pipelines'>Talent Pipelines</Link></li>
          <li><Link to='/career-starter'>CareerStarter</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<TalentPipelines/>} path='/talent-pipelines' />
        <Route element={<CareerStarter/>} path='/career-starter' />
      </Routes>
    </div>
  );
}

export default App;
