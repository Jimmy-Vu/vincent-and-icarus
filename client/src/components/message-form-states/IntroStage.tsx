import React from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function IntroStage(props: messageFormStageProps): React.ReactElement {
  const { onNext } = props;

  return (
    <>
      <h1>intro</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
}
