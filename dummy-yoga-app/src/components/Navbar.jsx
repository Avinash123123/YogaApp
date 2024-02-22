
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-lg font-semibold">Yoga Booking</h1>
      </div>
      <div>
        <button className="mr-4">Explore</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
