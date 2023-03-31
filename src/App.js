import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/landing/landing';
import Login from './components/authentication/Login/Login'
import AboutUs from './components/about/aboutUs';
import Instrument from './components/Instruments/Instrument';
import Signup from './components/authentication/Signup/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/trade" element={<Instrument />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<Signup/>} />
          {/* <Route path="/Dashboard" element={<Dashboard/> } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
