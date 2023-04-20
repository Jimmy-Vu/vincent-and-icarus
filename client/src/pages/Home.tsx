import React from "react";

export default function Home(props) {
  return (
    <>
      <main className="w-full pt-10 px-6">
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
        <img src="client/src/assets/Humaaans - Standing.png"/>
      </main>
    </>
  );
}
