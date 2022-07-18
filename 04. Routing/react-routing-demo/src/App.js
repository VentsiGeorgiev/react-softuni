import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Starship from './components/Starships';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/*" element={<Pricing />} />
        <Route path="/pricing/premium" element={<h2>Premium Pricing</h2>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/millennium-falcon" element={<Navigate to="/products/10" replace />} />
        <Route path="/starships/:starshipId" element={<Starship id="1" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
