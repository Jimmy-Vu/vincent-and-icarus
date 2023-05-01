import React from "react";
import MessageForm from "../components/MessageForm";

export default function GetStarted(): React.ReactElement {
  return (
    <>
      <main className="w-full flex flex-col mb-6 px-6 lg:px-48">
        <section className="pt-3 flex flex-col items-center">
          <MessageForm />
        </section>
      </main>
    </>
  );
}
