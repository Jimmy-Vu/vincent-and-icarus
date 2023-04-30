import React from "react";

export default function FirstStage(props) {
  const { onNext, onBack } = props;

  return (
    <>
      <h1>First</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onBack}>Back</button>
    </>
  );
}
