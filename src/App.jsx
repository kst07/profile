import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
    <Nav /> 
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Skills />
            <Projects />
            <About />
          </>
        }
      />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
  );
}

export default App;