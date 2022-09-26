import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './Pages/Home/Home';
import DetailDay from './Pages/DetailDay/DetailDay';

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/detail/:id/:friday' element= {<DetailDay />} />
    </Routes>
  </Router>
  );
}

export default App;