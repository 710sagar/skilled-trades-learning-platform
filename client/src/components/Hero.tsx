import React, { JSX, useEffect, useState } from 'react';

function Hero(): JSX.Element {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('Loading....');
  useEffect(() => {
    fetch('http://localhost:3000/welcome')
      .then((response) => response.text())
      .then((data) => setWelcomeMessage(data))
      .catch((error) => {
        console.error('Error fetching welcome message:', error);
        setWelcomeMessage('Failed to load welcome message');
      });
  }, []);
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Learn Skilled Trades Anytime, Anywhere
        </h2>
        <p className="text-lg text-gray-600 mb-6">{welcomeMessage}</p>
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
