import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.tsx';
import Home from './pages/home.tsx'; 
import NotFound from './pages/notfoundpage.tsx'; 
import Projects from './pages/projects.tsx'; 
import Intro from './pages/intro.tsx'; 
import Contact from './pages/contact.tsx';
 
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
