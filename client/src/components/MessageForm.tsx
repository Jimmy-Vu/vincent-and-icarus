import React, { useEffect, useState } from 'react';
import IntroStage from './message-form-states/IntroStage';
import FirstStage from './message-form-states/FirstStage';
import SecondStage from './message-form-states/SecondStage';
import ArchetypeResultStage from './message-form-states/ArchetypeResultStage';

export default function MessageForm(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useState({
    archetype: 'Pending',
    name: '',
    number: ''
  });

  const [answers, setAnswers] = useState({
    'mood-q': 0,
    'accomplishments-q': 0
  });

  function handleAnswer(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement & { 'data-score': number };
    const score = target.getAttribute('data-score');

    setAnswers?.(prev => ({
      ...prev,
      [target.name]: score
    }))
  }

  useEffect(() => { console.log(answers) }, [answers])

  const [formState, setFormState] = useState({
    currentState: 'intro'
  })

  const [userScore, setUserScore] = useState(0);

  function tallyScore(value: number): void {
    setUserScore(prev => prev + value);
  }

  function handleQuestionsCompletion(): void {
    const computedType = computeArchetype(userScore);
    setUserInfo((prev) => ({
      ...prev,
      archetype: computedType
    }));
  }

  let stagedComponent;
  switch (formState.currentState) {
    case 'intro':
      stagedComponent = <IntroStage onNext={(() => { setFormState({ currentState: 'first' }) })} />;
      break;
    case 'first':
      stagedComponent = <FirstStage handleAnswer={handleAnswer} setUserScore={setUserScore} onNext={(() => { setFormState({ currentState: 'second' }); })} onBack={(() => { setFormState({ currentState: 'intro' }); })} />;
      break;
    case 'second':
      stagedComponent = <SecondStage handleQuestionsCompletion={handleQuestionsCompletion} setUserScore={setUserScore} onNext={(() => { setFormState({ currentState: 'archetype' }); })} onBack={(() => { setFormState({ currentState: 'first' }); })} />;
      break;
    case 'archetype':
      stagedComponent = <ArchetypeResultStage userInfo={userInfo} onNext={(() => { setFormState({ currentState: 'archetype' }); })} onBack={(() => { setFormState({ currentState: 'third' }); })} />;
      break;
  }

  return (
    <form className="h-fit min-h-[408px] w-full flex justify-center items-center p-5 rounded bg-bg-secondary drop-shadow">
      {stagedComponent}
    </form>
  );
}

function computeArchetype(score: number): string {
  if (score <= -2) {
    return 'Vincent';
  } else if (score > -2 && score < 2) {
    return 'Neutral';
  } else {
    return 'Icarus';
  }
}
