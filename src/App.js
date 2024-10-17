import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Service from './components/Service';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Blog />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
