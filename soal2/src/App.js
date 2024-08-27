import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
