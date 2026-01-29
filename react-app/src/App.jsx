import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Legal from './components/Legal';
import RegistrationForm from './components/RegistrationForm';
import './App.css';


function App() {
  return (
    <Router initialEntries={['/']}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/:cityId" element={<RegistrationForm />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

