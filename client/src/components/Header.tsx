import React, { type Dispatch, type SetStateAction, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(props: { setIsMiniHeader: Dispatch<SetStateAction<boolean>>, isMiniHeader: boolean }): React.ReactElement {
  const { isMiniHeader, setIsMiniHeader } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyle = {
    closed:
      "w-full max-h-0 overflow-hidden absolute flex flex-col items-center mt-28 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-300",
    opened:
      "w-full max-h-96 absolute flex flex-col items-center mt-28 pb-5 px-5 text-2xl text-center shadow-md bg-white font-medium transition-all ease-in-out duration-300"
  };

  return (
    <header className={`fixed w-full h-28 z-20 bg-white ${isMenuOpen ? '' : 'shadow-md'}`}>
      <nav className={`md:shadow-md flex justify-center`}>
        <div className="w-full max-w-screen-2xl h-28 px-5 absolute flex flex-row justify-between items-center ">
          <Link onClick={() => { setIsMenuOpen(false); }} className="text-4xl font-semibold" to="/">Vincent&Icarus</Link>
          <button onClick={() => { setIsMenuOpen(!isMenuOpen); }} className="w-12 md:hidden h-12 border border-solid border-black rounded">
            <i className="fa-sharp fa-solid fa-bars text-4xl"></i>
          </button>
          {/* Desktop Nav */}
          <ul className="hidden w-6/12 md:flex flex-row justify-between items-center">
            <li className="text-2xl font-semibold">
              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "text-2xl underline underline-offset-8 decoration-2 font-semibold hover:text-neutral-600"
                  : isPending
                    ? "pending"
                    : "text-2xl font-semibold hover:text-neutral-700"
              } to="/vincent">Meet Vincent</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "text-2xl underline underline-offset-8 decoration-2 font-semibold hover:text-neutral-600"
                  : isPending
                    ? "pending"
                    : "text-2xl font-semibold hover:text-neutral-700"
              } to="/icarus">Meet Icarus</NavLink>
            </li>
            <li>
              <Link className="w-52 h-14 flex justify-center items-center bg-black rounded hover:bg-neutral-800 hover:ring-slate-500" to="/get-started">
                <button className=" text-white text-xl font-bold">Get Started</button>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Dropdown Nav */}
        <ul className={`md:hidden ${isMenuOpen ? menuStyle.opened : menuStyle.closed}`}>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-300` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-300`}>
            <NavLink onClick={() => { setIsMenuOpen(false); }} className={({ isActive, isPending }) =>
              isActive
                ? "before:content-['>']"
                : isPending
                  ? "pending"
                  : ""
            } to="/vincent">Meet Vincent</NavLink>
          </li>
          <li className={isMenuOpen ? `w-full border-b border-black pb-4 mb-4 transition-all ease-in-out duration-300` : `w-full border-b border-black pb-4 mb-4 opacity-0 transition-all ease-in-out duration-300`}>
            <NavLink onClick={() => { setIsMenuOpen(false); }} className={({ isActive, isPending }) =>
              isActive
                ? "before:content-['>']"
                : isPending
                  ? "pending"
                  : ""
            } to="/icarus">Meet Icarus</NavLink>
          </li>
          <li>
            <Link onClick={() => { setIsMenuOpen(false); }} to="/get-started" className={isMenuOpen ? 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white transition-all ease-in-out duration-300' : 'w-44 h-12 flex justify-center items-center rounded text-xl bg-black text-white opacity-0 transition-all ease-in-out duration-300'}>Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
