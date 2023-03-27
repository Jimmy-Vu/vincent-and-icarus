import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vincent">Vincent</Link>
        </li>
        <li>
          <Link to="/icarus">Icarus</Link>
        </li>
      </ul>
    </nav>
  );
}
