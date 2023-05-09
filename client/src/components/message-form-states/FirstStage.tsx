import React, { ReactElement, useEffect, useState } from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function FirstStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack, handleAnswer } = props;

  const [isError, setIsError] = useState(false);
  function requiredAnswers(): void {
    const inputs = Array.from(document.querySelectorAll("input"));
    const atLeastTwoChecked = inputs.filter(input => input.checked).length === 2;
    if (atLeastTwoChecked) {
      setIsError(false);
      onNext?.();
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="pt-5 text-center text-xl font-semibold">It&apos;s okay not to know. We&apos;ll help you figure it out.</h1>
      <fieldset className="h-full pt-5 flex flex-col">
        <span className="mb-5 text-lg font-medium">Which of the following best describes your current mood?</span>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={-1} type="radio" name="mood-q" id="unmotivated" />
          <label className="ml-3" htmlFor="unmotivated">I&apos;m feeling a bit down and unmotivated </label>
        </div>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={0} type="radio" name="mood-q" id="good" />
          <label className="ml-3" htmlFor="good">I&apos;m feeling okay about things</label>
        </div>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={1} type="radio" name="mood-q" id="confident" />
          <label className="ml-3" htmlFor="confident">I&apos;m feeling really confident and on top of the world </label>
        </div>
      </fieldset>
      <fieldset className="h-full pt-5 flex flex-col">
        <span className="mb-5 text-lg font-medium">How are you feeling about your recent accomplishments?</span>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={1} type="radio" name="accomplishments-q" id="proud" />
          <label className="ml-3" htmlFor="proud">I&apos;m feeling pretty proud of what I&apos;ve done</label>
        </div>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={0} type="radio" name="accomplishments-q" id="uncertain" />
          <label className="ml-3" htmlFor="uncertain">I&apos;m feeling a bit uncertain about my achievements</label>
        </div>
        <div className="ml-2 mb-3">
          <input onClick={handleAnswer} data-score={-1} type="radio" name="accomplishments-q" id="unaccomplished" />
          <label className="ml-3" htmlFor="unaccomplished"> I&apos;m feeling like I haven&apos;t accomplished much lately</label>
        </div>
      </fieldset>
      {isError &&
        <p className="text-center text-red-600">Please choose an answer for each question.</p>
      }
      <div className="w-full flex justify-between mt-3">
        <button className="text-2xl" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="text-2xl" type="button" onClick={requiredAnswers}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
