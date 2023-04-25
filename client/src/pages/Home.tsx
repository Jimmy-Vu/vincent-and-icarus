import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col px-6 lg:px-48">
        <section id="1" className="h-[calc(100vh-7rem)] pt-3 flex flex-col items-center">
          <div className="h-full flex flex-col lg:flex-row items-center lg:justify-center">
            <div className="lg:basis-1/2">
              <h1 className="text-4xl lg:text-5xl font-semibold lg:font-bold">Stay balanced with Vincent&Icarus - text messages to keep your Icarus in check or uplift your Vincent.</h1>
              <ul className="mt-4 lg:text-xl">
                <li className="mb-4 before:content-['>']">
                  Stay grounded with text reminders to keep your Icarus from flying too high
                </li>
                <li className="mb-4 before:content-['>']">
                  Uplift your spirits with personalized messages to channel your inner Vincent
                </li>
                <li className="mb-4 before:content-['>']">
                  Soar to new heights while staying grounded
                </li>
              </ul>
            </div>
            <div className="lg:basis-1/2 lg:flex lg:justify-end">
              <img className="max-w-[160px] lg:max-w-[385px] aspect-[160/204]" src="client/src/assets/Humaaans - Standing.png" />
            </div>
          </div>
          <a href="#2" className="absolute bottom-1 mx-auto text-3xl animate-bounce-slow">
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </section>

        <section id="2" className="h-screen  pt-28 -mt-28 pb-5">
          <section className="flex flex-col items-center">
            <div className="my-10 text-center">
              <p className="mb-3">Are you held back by <b>self-doubt or overconfidence</b>?</p>
              <p className="mb-3">Struggling to balance your time and <b>achieve your goals</b>?</p>
              <p className="mb-3"><b>Missed opportunities</b> due to hesitation or impulsiveness?</p>
            </div>
            <h2 className="text-3xl font-bold mb-10">Sound familiar?</h2>
            <div className="mb-10 text-center">
              <p className="mb-3">Feeling like you're ever good enough, or feeling like you can do no wrong?</p>
              <p className="mb-3">Starting a project with great enthusiasm, only to become overwhelmed and lose motivation?</p>
              <p className="mb-3">Feeling like your flaws hold you back, or feeling like you're invincible and can take on anything?</p>
            </div>
          </section>
          <section className="flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold mb-5">Vincent and Icarus are here to guide you.</h1>
            <div className="my-10 text-center">
              <p className="mb-3">Vincent understands that some days are harder than others and that self doubt boggles us down from our true potential.</p>
              <p className="mb-3">Icarus knows that that the thrill of success blind us, leading to us to take falls from grace.</p>
            </div>
            <Link className="w-52 h-14 flex justify-center items-center bg-black rounded hover:bg-neutral-800 hover:ring-slate-500" to="/get-started">
              <button className=" text-white text-xl font-bold">Get Started</button>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
