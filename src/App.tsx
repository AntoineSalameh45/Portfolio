import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';
import Intro from './pages/intro.tsx'; 
import NotFound from './pages/notfoundpage.tsx'; 
import Projects from './pages/projects.tsx'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/projects" element={<Projects />} />
			<Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
