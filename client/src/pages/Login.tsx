import React, { JSX } from 'react';

function Login(): JSX.Element {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
      <p className="text-lg text-gray-600">Sign in to access your courses.</p>
    </section>
  );
}

export default Login;
