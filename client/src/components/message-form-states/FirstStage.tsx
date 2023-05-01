import React from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function FirstStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack } = props;

  return (
    <>
      <h1>First</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onBack}>Back</button>
    </>
  );
}
