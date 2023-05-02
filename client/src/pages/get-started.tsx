import React from "react";
import MessageForm from "../components/MessageForm";

export default function GetStarted(): React.ReactElement {
  return (
    <>
      <main className="w-full flex flex-col mb-6 mt-6 px-6 lg:px-48">
        <section className="h-full flex flex-col justify-center items-center">
          <MessageForm />
        </section>
      </main>
    </>
  );
}
