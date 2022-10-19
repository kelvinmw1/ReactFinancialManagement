import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Registration from './Pages/Registration';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

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
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
