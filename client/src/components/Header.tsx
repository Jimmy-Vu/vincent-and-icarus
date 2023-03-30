import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="w-full bg-blue-500 text-white">
      <ul className=" flex flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="ml-4">
          <Link to="/vincent">Vincent</Link>
        </li>
        <li className="ml-4">
          <Link to="/icarus">Icarus</Link>
        </li>
      </ul>
    </nav>
  );
}
