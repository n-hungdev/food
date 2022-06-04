import React from 'react';

import logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 md:px-10 md:py-6 bg-white">
      <div className="flex justify-between items-end md:items-center">
        <div className="h-14 md:h-24">
          <img src={logo} alt="logo" className="object-cover h-full" />
        </div>

        <button
          onClick={() => toggle()}
          className="w-8 cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`flex gap-24 md:flex-row md:relative md:right-0 md:bg-white md:justify-end flex-col fixed bg-slate-400 top-0 bottom-0 items-center justify-center duration-200 ease-in-out w-2/3 -right-[100vw] z-50 ${
            isOpen ? '!right-0' : ''
          }`}
        >
          <button
            onClick={() => toggle()}
            className="absolute right-8 top-12 cursor-pointer md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <li className="text-gray-800 hover:text-orange-500 tracking-wider cursor-pointer font-bold">
            Home
          </li>
          <li className="text-gray-800 hover:text-orange-500 tracking-wider cursor-pointer font-bold">
            Product
          </li>
          <li className="text-gray-800 hover:text-orange-500 tracking-wider cursor-pointer font-bold">
            Faq
          </li>
          <li className="text-gray-800 hover:text-orange-500 tracking-wider cursor-pointer font-bold">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
