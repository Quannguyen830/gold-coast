import React, { useState } from 'react';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg rounded-2xl w-full fixed top-0 z-100">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Title */}
          <div className="">
            <h1 className="text-xl font-bold text-gray-800 truncate">
              Khu Pho Glenferrie
            </h1>
          </div>

          {/* Dropdown Menu */}
          <div className="">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center p-2 rounded-md hover:bg-gray-100"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Dropdown Content */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Menu Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Menu Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Menu Item 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
    </nav>
  );
};
