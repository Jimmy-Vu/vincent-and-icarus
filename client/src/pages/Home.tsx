import React from "react";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col">
        <section id="1" className="max-h-screen pt-10 pb-5 px-6 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Stay balanced with Vincent&Icarus - text messages to keep your Icarus in check or uplift your Vincent.</h1>
            <ul className="mt-4">
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
            <img src="client/src/assets/Humaaans - Standing.png" className="max-w-[160px] aspect-[160/204]" />
          </div>
          <a href="#2" className="absolute bottom-1 mx-auto text-3xl animate-bounce-slow">
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </section>

        <section id="2" className="h-screen pt-28 pb-5 px-6 flex flex-col items-center">
          <div className="mt-5">
            <p className="mb-3">Do you ever find yourself torn between <b>self-doubt</b> and <b>overconfidence</b>?</p>
            <p className="mb-3">Do you struggle to find balance in managing your time and achieving your goals?</p>
            <p className="mb-3">Have you <b>missed out on opportunities</b> because you were either too hesitant or too impulsive?</p>
            <p className="mb-3">Find the right balance between <b>self-confidence</b> and <b>humility</b>, and manage your time effectively to achieve success and avoid costly mistakes.</p>
          </div>
        </section>
      </main>
    </>
  );
}
