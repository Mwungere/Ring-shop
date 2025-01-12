import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './sections/Hero.jsx';
import Landing from './sections/Landing.jsx';
import Navbar from './sections/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <main className="max-h-screen overflow-hidden mx-auto relative">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
