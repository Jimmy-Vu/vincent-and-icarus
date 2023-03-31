import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuStyle = {
    closed: "w-full h-28 flex flex-row items-center px-5 shadow-md transition ease-in-out duration-700",
    opened: "w-full h-80 flex flex-col items-center px-5 shadow-md transition ease-in-out duration-700"
  }
  return (
    <nav className={isMenuOpen ? menuStyle.opened : menuStyle.closed}>
      <div className="w-full h-28 flex flex-row justify-between items-center">
        <Link className="text-4xl font-semibold" to="/">Vincent&Icarus</Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 h-12 border border-solid border-black rounded">
          <i className="fa-sharp fa-solid fa-bars text-4xl"></i>
        </button>
      </div>
      {isMenuOpen &&
        <ul className="w-full flex flex-col items-center text-2xl text-center font-medium">
          <li className="w-full border-b border-black pb-4 mb-4">
            <Link to="/vincent">Meet Vincent</Link>
          </li>
          <li className="w-full border-b border-black pb-4 mb-4">
            <Link to="/icarus"> Meet Icarus</Link>
          </li>
          <li className="w-44 h-12 flex justify-center items-center rounded bg-black text-white">
            <Link  to="/get-started">Get Started</Link>
          </li>
        </ul>
      }
    </nav>
  );
}
