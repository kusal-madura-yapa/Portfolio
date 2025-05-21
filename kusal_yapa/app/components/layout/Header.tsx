import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/portfolio" className="ml-4">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
