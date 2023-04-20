import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyle = {
    closed:
      "w-full max-h-0 overflow-hidden absolute flex flex-col items-center mt-28 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-300",
    opened:
      "w-full max-h-96 absolute flex flex-col items-center mt-28 pb-5 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-300",
  };

  return (
    <header>
      <nav className={`md:shadow-md flex justify-center ${isMenuOpen ? 'w-full h-28' : 'w-full h-28 shadow-md'}`}>
        <div className="w-full max-w-screen-2xl h-28 px-5 absolute flex flex-row justify-between items-center ">
          <Link className="text-4xl font-semibold" to="/">Vincent&Icarus</Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 md:hidden h-12 border border-solid border-black rounded">
            <i className="fa-sharp fa-solid fa-bars text-4xl"></i>
          </button>
          <ul className="hidden w-6/12 md:flex flex-row justify-between items-center" >
            <li className="text-2xl font-semibold">
              <Link to="/vincent">Meet Vincent</Link>
            </li>
            <li className="text-2xl font-semibold">
              <Link to="/icarus">Meet Icarus</Link>
            </li>
            <li className="w-60 h-16 flex justify-center items-center bg-black rounded">
              <Link to="/get-started">
                <button className=" text-white text-2xl font-bold">Get Started</button>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`md:hidden ${isMenuOpen ? menuStyle.opened : menuStyle.closed}`}>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-300` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-300`}>
            <Link to="/vincent">Meet Vincent</Link>
          </li>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-300` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-300`}>
            <Link to="/icarus"> Meet Icarus</Link>
          </li>
          <li className={isMenuOpen ? 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white transition-all ease-in-out duration-300' : 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white opacity-0 transition-all ease-in-out duration-300'}>
            <Link to="/get-started">Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
