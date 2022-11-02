import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import Registration from './Pages/Registration';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Income from './Pages/Income';
import Addincome from './Pages/Addincome';

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Income" element={<Income />} />
          <Route path="Addincome" element={<Addincome />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
