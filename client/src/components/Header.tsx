import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuStyle = {
    closed:
      "w-full max-h-0 overflow-hidden absolute flex flex-col items-center mt-28 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-500",
    opened:
      "w-full max-h-96 absolute flex flex-col items-center mt-28 pb-5 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-500",
  };

  return (
    <header>
      <nav className={isMenuOpen ? 'w-full h-28' : 'w-full h-28 shadow-md'}>
        <div className="w-full h-28 px-5 absolute flex flex-row justify-between items-center ">
          <Link className="text-4xl font-semibold" to="/">Vincent&Icarus</Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 h-12 border border-solid border-black rounded">
            <i className="fa-sharp fa-solid fa-bars text-4xl"></i>
          </button>
        </div>
        <ul className={isMenuOpen ? menuStyle.opened : menuStyle.closed}>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-500` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-500`}>
            <Link to="/vincent">Meet Vincent</Link>
          </li>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-500` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-500`}>
            <Link to="/icarus"> Meet Icarus</Link>
          </li>
          <li className={isMenuOpen ? 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white transition-all ease-in-out duration-500' : 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white opacity-0 transition-all ease-in-out duration-500'}>
            <Link to="/get-started">Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
