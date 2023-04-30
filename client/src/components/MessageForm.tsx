import React, { useState } from 'react';
import IntroStage from './message-form-states/IntroStage';
import FirstStage from './message-form-states/FirstStage';

export default function MessageForm () {
  const [userInfo, setUserInfo] = useState({
    archetype: 'Pending',
    name: '',
    number: ''
  });

  const [formState, setFormState] = useState({
    currentState: 'intro'
  })

  let stagedComponent;
  switch (formState.currentState) {
    case 'intro':
      stagedComponent = <IntroStage onNext={(() => { setFormState({ currentState: 'first' }) })} />;
      break;
    case 'first':
      stagedComponent = <FirstStage onNext={(() => { setFormState({ currentState: 'second' }); })} onBack={(() => { setFormState({ currentState: 'intro' }); })} />;
      break;
  }

  return (
    <>
      {stagedComponent}
    </>
  );
}
