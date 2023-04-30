import React from 'react'

export default function SecondStage (props) {
  const { onNext, onBack } = props;

  return (
    <>
      <h1>Second</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onBack}>Back</button>
    </>
  )
}
