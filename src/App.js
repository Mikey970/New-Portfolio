import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import About from './components/About';
function App() {
  return (
    <div>
      <Router >
        <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          
           </Routes>
           </Router>
        
       
    </div>
  );
}

export default App;
