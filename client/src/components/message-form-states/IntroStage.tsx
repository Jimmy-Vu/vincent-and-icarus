import React, { useEffect, useState } from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function IntroStage(props: messageFormStageProps): React.ReactElement {
  if (props.setFormState === undefined) {
    return;
  }
  const { setFormState } = props;
  if (props.setUserInfo === undefined) {
    return;
  }
  const { setUserInfo } = props;
  const [introAnswer, setIntroAnswer] = useState('');
  const [onNext, setOnNext] = useState(() => {
    setFormState({ currentState: 'intro' })
  })

  switch (introAnswer) {
    case 'vincent':
      setUserInfo((prev) => ({
        ...prev,
        archetype: 'Vincent'
      }))
      console.log('Im in');
      setOnNext(() => { setFormState({ currentState: 'archetype' }) });
      break;
    case 'icarus':
      setUserInfo((prev) => ({
        ...prev,
        archetype: 'Icarus'
      }));
      setOnNext(() => { setFormState({ currentState: 'archetype' }) });
      break;
  }

  return (
    <div className="h-full flex flex-col">
      <h1 className="pt-5 text-center text-xl font-semibold">Let&apos;s get started by answering some questions.</h1>
      <section className="h-full pt-5 flex flex-col">
        <span className="mb-5 text-lg font-medium">Do you know if you&apos;re a Vincent or Icarus today?</span>
        <div className="mb-3">
          <input onClick={() => { setIntroAnswer('vincent'); }} type="radio" name="intro-q" id="vincent" />
          <label className="ml-3" htmlFor="vincent">I&apos;m feeling like a Vincent.</label>
        </div>
        <div className="mb-3">
          <input onClick={() => { setIntroAnswer('icarus'); }} type="radio" name="intro-q" id="icarus" />
          <label className="ml-3" htmlFor="icarus">I&apos;m feeling like an Icarus.</label>
        </div>
        <div className="mb-3">
          <input type="radio" name="intro-q" id="idk" />
          <label className="ml-3" htmlFor="idk">I don&apos;t know.</label>
        </div>
      </section>
      <div className="w-full flex justify-end">
        <button className="text-2xl" onClick={onNext}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
