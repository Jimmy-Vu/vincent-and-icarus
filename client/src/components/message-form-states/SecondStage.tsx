import React from 'react'
import type messageFormStageProps from './interfaces/messageFormStageProps';

export default function SecondStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack, handleAnswer, handleQuestionsCompletion } = props;

  return (
    <div className="h-full flex flex-col">
      <h1 className="pt-5 text-center text-xl font-semibold">It&apos;s okay not to know. We&apos;ll help you figure it out.</h1>
      <section className="h-full pt-5 flex flex-col">
        <span className="mb-5 text-lg font-medium">Are you currently feeling overwhelmed or stressed out?</span>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={-1} type="radio" name="overwhelmed-q" id="definitely" />
          <label className="ml-3" htmlFor="definitely">Yes, definitely</label>
        </div>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={0} type="radio" name="overwhelmed-q" id="little-bit" />
          <label className="ml-3" htmlFor="little-bit">Maybe a little bit </label>
        </div>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={1} type="radio" name="overwhelmed-q" id="not-really" />
          <label className="ml-3" htmlFor="not-really">Not really</label>
        </div>
      </section>
      <section className="h-full pt-5 flex flex-col">
        <span className="mb-5 text-lg font-medium">How confident are you in your abilities to achieve your goals?</span>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={-1} type="radio" name="confident-q" id="not-confident" />
          <label className="ml-3" htmlFor="not-confident">Not very confident at all</label>
        </div>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={0} type="radio" name="confident-q" id="somewhat-confident" />
          <label className="ml-3" htmlFor="somewhat-confident">Somewhat confident</label>
        </div>
        <div className="mb-3">
          <input onClick={handleAnswer} data-score={1} type="radio" name="confident-q" id="extremely-confident" />
          <label className="ml-3" htmlFor="extremely-confident">Extremely confident</label>
        </div>
      </section>
      <div className="w-full flex justify-between mt-3">
        <button className="text-2xl" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="text-2xl" onClick={() => { handleQuestionsCompletion?.(); onNext?.(); }}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}
