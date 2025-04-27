import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
    </div>
  );
}

export default App;