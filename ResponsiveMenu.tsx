'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const ResponsiveMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          aria-label="Main menu"
          aria-expanded={isOpen}
        >
          {/* SVG for Hamburger Icon */}
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              首页
            </span>
          </Link>
          <Link href="/about">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
              关于我们
            </span>
          </Link>
          {/* 更多导航链接... */}
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveMenu;
