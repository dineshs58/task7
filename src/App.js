import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import About from './Components/About';
import Alumni from './Components/Alumni';
import Login from './Components/Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Service" element={<Service />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Alumni" element={<Alumni />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
