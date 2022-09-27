import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './Pages/Home/Home';
import DetailDay from './Pages/DetailDay/DetailDay';
import Settings from './Pages/Settings/Settings';
import EditCity from './Pages/EditCity/EditCity'
import EditHourly from './Pages/EditHourly/EditHourly'
import NewCity from './Pages/NewCity/NewCity'

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/detail/:id_city/:friday' element= {<DetailDay />} />
      <Route path='/settings' element= {<Settings />} />
      <Route path='/editcity' element= {<EditCity />} />
      <Route path='/edithourly' element= {<EditHourly />} />
      <Route path='/newcity' element= {<NewCity />} />
    </Routes>
  </Router>
  );
}

export default App;
