import React from 'react'
import type messageFormStageProps from './interfaces/messageFormStageProps';

export default function SecondStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack } = props;

  return (
    <>
      <h1>Second</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onBack}>Back</button>
    </>
  )
}
