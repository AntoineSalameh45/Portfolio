import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';
import Home from './pages/home.tsx'; 
import NotFound from './pages/notfoundpage.tsx'; 
import Projects from './pages/projects.tsx'; 
import Intro from './pages/intro.tsx'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/projects" element={<Projects />} />
			<Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
