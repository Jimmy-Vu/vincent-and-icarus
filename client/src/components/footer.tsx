import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <>
      <footer className="h-32 min-h-min w-full p-6 shadow-md bg-slate-200">
        <section className="max-w-screen-2xl">
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Vincent&Icarus</span>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/temp">Temp</Link></li>
            </ul>
          </div>
          <div id="footer__social-links">
            <ul className="flex flex-row">
              <li className="mr-3"><Link to="https://www.linkedin.com/in/jimmyvu2/"><i className="fa-brands fa-linkedin text-2xl"></i></Link></li>
              <li className="mr-3"><Link to="https://twitter.com/thrownewJimmy"><i className="fa-brands fa-twitter text-2xl"></i></Link></li>
              <li className="mr-3"><Link to="https://github.com/Jimmy-Vu"><i className="fa-brands fa-github text-2xl"></i></Link></li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
