import React, { useEffect, useState } from 'react';
import IntroStage from './message-form-states/IntroStage';
import FirstStage from './message-form-states/FirstStage';
import SecondStage from './message-form-states/SecondStage';
import ArchetypeResultStage from './message-form-states/ArchetypeResultStage';

export default function MessageForm(): React.ReactElement {
  const [userInfo, setUserInfo] = useState({
    archetype: 'Pending',
    name: '',
    number: ''
  });

  const [answers, setAnswers] = useState({
    'mood-q': 0,
    'accomplishments-q': 0,
    'overwhelmed-q': 0,
    'confident-q': 0
  });

  function handleAnswer(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement & { 'data-score': number };
    const score = parseInt(target.getAttribute('data-score') ?? '0', 10);

    setAnswers?.(prev => ({
      ...prev,
      [target.name]: score
    }))
  }

  const [formState, setFormState] = useState({
    currentState: 'intro'
  })

  function handleQuestionsCompletion(): void {
    const computedType = computeArchetype();
    setUserInfo((prev) => ({
      ...prev,
      archetype: computedType
    }));
  }

  function computeArchetype(): string {
    let score = 0;
    for (const i of Object.values(answers)) {
      score += i;
    }
    console.log('score', score);
    if (score <= -2) {
      return 'Vincent';
    } else if (score > -2 && score < 2) {
      return 'Neutral';
    } else {
      return 'Icarus';
    }
  }

  let stagedComponent;
  switch (formState.currentState) {
    case 'intro':
      stagedComponent = <IntroStage onNext={(() => { setFormState({ currentState: 'first' }) })} />;
      break;
    case 'first':
      stagedComponent = <FirstStage handleAnswer={handleAnswer} onNext={(() => { setFormState({ currentState: 'second' }); })} onBack={(() => { setFormState({ currentState: 'intro' }); })} />;
      break;
    case 'second':
      stagedComponent = <SecondStage handleAnswer={handleAnswer} handleQuestionsCompletion={handleQuestionsCompletion} onNext={(() => { setFormState({ currentState: 'archetype' }); })} onBack={(() => { setFormState({ currentState: 'first' }); })} />;
      break;
    case 'archetype':
      stagedComponent = <ArchetypeResultStage userInfo={userInfo} onNext={(() => { setFormState({ currentState: 'second' }); })} onBack={(() => { setFormState({ currentState: 'confirmation' }); })} />;
      break;
  }

  return (
    <form className="h-fit min-h-[408px] w-full flex justify-center items-center p-5 rounded bg-bg-secondary drop-shadow">
      {stagedComponent}
    </form>
  );
}
