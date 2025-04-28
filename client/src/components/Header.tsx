import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header className="bg-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TradeLearn</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-200">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-200">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
