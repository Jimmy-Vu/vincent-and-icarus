import React from "react";

export default function IntroStage(props) {
  const { onNext } = props;

  return (
    <>
      <h1>intro</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
}
