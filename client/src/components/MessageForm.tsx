import React, { useState } from 'react';
import IntroStage from './message-form-states/IntroStage';
import FirstStage from './message-form-states/FirstStage';
import SecondStage from './message-form-states/SecondStage';
import ArchtypeResultStage from './message-form-states/ArchetypeResultStage';

export default function MessageForm(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useState({
    archetype: 'Pending',
    name: '',
    number: ''
  });
  const [userScore, setUserScore] = useState(0);

  const [formState, setFormState] = useState({
    currentState: 'intro'
  })

  let stagedComponent;
  switch (formState.currentState) {
    case 'intro':
      stagedComponent = <IntroStage onNext={(() => { setFormState({ currentState: 'first' }) })} />;
      break;
    case 'first':
      stagedComponent = <FirstStage setUserScore={setUserScore} onNext={(() => { setFormState({ currentState: 'second' }); })} onBack={(() => { setFormState({ currentState: 'intro' }); })} />;
      break;
    case 'second':
      stagedComponent = <SecondStage setUserScore={setUserScore} onNext={(() => { setFormState({ currentState: 'archetype' }); })} onBack={(() => { setFormState({ currentState: 'first' }); })} />;
      break;
    case 'archetype':
      stagedComponent = <ArchtypeResultStage userInfo={userInfo} onNext={(() => { setFormState({ currentState: 'archetype' }); })} onBack={(() => { setFormState({ currentState: 'third' }); })} />;
      break;
  }

  return (
    <form className="h-fit min-h-[408px] w-full flex justify-center items-center p-5 rounded bg-bg-secondary drop-shadow">
      {stagedComponent}
    </form>
  );
}
