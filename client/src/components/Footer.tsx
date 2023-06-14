import React from "react";
import { Link } from "react-router-dom";

export default function Footer(): React.ReactElement {
  return (
    <footer className="h-32 min-h-min w-full mt-6 p-6 lg:px-48 shadow-md bg-slate-200 flex justify-center">
      <section className="h-full w-full max-w-screen-2xl flex flex-col">
        <div className="h-full flex justify-between">
          <section className="flex flex-col justify-between">
            <span className="text-xl font-semibold">Vincent&Icarus</span>
            <div id="footer__social-links">
              <ul className="flex flex-row">
                <li className="mr-3"><Link to="https://www.linkedin.com/in/jimmyvu2/"><i className="fa-brands fa-linkedin text-2xl"></i></Link></li>
                <li className="mr-3"><Link to="https://twitter.com/thrownewJimmy"><i className="fa-brands fa-twitter text-2xl"></i></Link></li>
                <li className="mr-3"><Link to="https://github.com/Jimmy-Vu"><i className="fa-brands fa-github text-2xl"></i></Link></li>
              </ul>
            </div>
          </section>
          <ul>
            <li><Link to="/about#top">About</Link></li>
            {/* <li><Link to="/faq">FAQ</Link></li> */}
          </ul>
        </div>
      </section>
    </footer>
  );
}
