import React from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function ArchetypeResultStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack, userInfo } = props;
  let message = 'Empty';
  if (userInfo !== undefined) {
    switch (userInfo.archetype) {
      case 'Vincent':
        message = 'a Vincent.';
        break;
      case 'Neutral':
        message = 'feeling a bit neutral right now.';
        break;
      case 'Icarus':
        message = 'an Icarus.';
        break;
    }
  }
  const result = '';
  return (
    <div className="h-full flex flex-col">
      <h1 className="pt-5 text-center text-xl font-semibold">{`Seems like you're ${message}`}</h1>
      <p>Sounds about right? If so, let’s continue!</p>
      <div className="w-full flex justify-between mt-3">
        <button className="text-2xl" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="text-2xl" onClick={onNext}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
