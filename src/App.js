import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Registration from './Pages/Registration';
import Signup from './Pages/Signup';

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
