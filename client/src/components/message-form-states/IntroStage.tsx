import React, { useEffect, useState } from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function IntroStage(props: messageFormStageProps): React.ReactElement {
  if (props.navSetUp === undefined) {
    return <div>Error: setFormState is undefined.</div>;
  }
  const { navSetUp } = props;
  if (props.setUserInfo === undefined) {
    return <div>Error: setUserInfo is undefined.</div>;
  }
  const { setUserInfo } = props;
  const [introAnswer, setIntroAnswer] = useState('');
  const [onNextVal, setOnNextVal] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    switch (introAnswer) {
      case 'vincent':
        setUserInfo((prev) => ({
          ...prev,
          archetype: 'Vincent'
        }))
        setOnNextVal('archetype');
        break;
      case 'icarus':
        setUserInfo((prev) => ({
          ...prev,
          archetype: 'Icarus'
        }));
        setOnNextVal('archetype');
        break;
      case 'idk':
        setOnNextVal('first');
        break;
      default:
        setOnNextVal('first');
    }
  }, [introAnswer]);

  function requiredAnswerCheck(): void {
    const inputs = Array.from(document.querySelectorAll("input"));
    const atLeastOneChecked = inputs.some(input => input.checked)
    if (atLeastOneChecked) {
      setIsError(false);
      navSetUp('intro', onNextVal);
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="h-full flex flex-col">
      <h1 className="pt-5 text-center text-xl font-semibold">Let&apos;s get started by answering some questions.</h1>
      <fieldset className="h-full pt-5 flex flex-col">
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
          <input onClick={() => { setIntroAnswer('idk'); }} type="radio" name="intro-q" id="idk" />
          <label className="ml-3" htmlFor="idk">I don&apos;t know.</label>
        </div>
      </fieldset>
      {isError &&
        <p className="text-center text-red-600">Please choose an answer.</p>
      }
      <div className="w-full flex justify-end">
        <button className="text-2xl" type="button" onClick={requiredAnswerCheck}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
