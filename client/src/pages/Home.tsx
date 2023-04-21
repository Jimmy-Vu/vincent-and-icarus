import React from "react";

export default function Home(props) {
  return (
    <>
      <main className="w-full h-full flex flex-col">
        <section className="relative h-full pt-10 pb-5 px-6 flex grow flex-col items-center">
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
          <button className="absolute bottom-1 mx-auto text-3xl animate-bounce-slow">
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </section>

        <section className="w-full h-screen">
          <h1>content</h1>
        </section>
      </main>
    </>
  );
}
