import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './PageLayout';
import Home from './Home';
import Maintenance from './Maintenance/Maintenance';
import Secret from './Secret';

function App() {
  return (
      <Router>
          <App2 />
      </Router>
  );
}

function App2() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path='secret' element={<Secret />} />
      </Route>
    </Routes>
  );
}

export default App;
