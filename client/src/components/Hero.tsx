import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Learn Skilled Trades Anytime, Anywhere
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Master your trade with bite-sized, AI-powered lessons.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;