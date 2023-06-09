import React, { type ReactElement, useState, useEffect } from 'react';
import IntroStage from './message-form-states/IntroStage';
import FirstStage from './message-form-states/FirstStage';
import SecondStage from './message-form-states/SecondStage';
import ArchetypeResultStage from './message-form-states/ArchetypeResultStage';
import InfoInputStage from './message-form-states/InfoInputStage';
import ConfirmationStage from './message-form-states/ConfirmationStage';

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
    currentState: 'intro',
    prevState: ''
  });

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
    if (score <= -2) {
      return 'vincent';
    } else if (score > -2 && score < 2) {
      return 'neutral';
    } else {
      return 'icarus';
    }
  }

  function navSetUp(prev: string, next: string): ReturnType<typeof setFormState> {
    setFormState(prevState => ({ ...prevState, currentState: next, prevState: prev }));
    setFormState({ currentState: next, prevState: prev });
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const formData = new FormData();
    for (const key in userInfo) {
      formData.append(key, userInfo[key as keyof typeof userInfo]);
    }

    fetch('/api/message', {
      method: 'POST',
      body: formData
    })
      .then(async res => await res.json())
      .then(result => {
        navSetUp('', 'confirmation');
      })
      .catch(err => { console.error(err); })
  }

  function renderStage(): ReactElement {
    switch (formState.currentState) {
      case 'intro':
        return <IntroStage navSetUp={navSetUp} setUserInfo={setUserInfo} />;
      case 'first':
        return <FirstStage handleAnswer={handleAnswer} onNext={() => { navSetUp('first', 'second') }} onBack={() => { navSetUp('first', 'intro') }} />;
      case 'second':
        return <SecondStage handleAnswer={handleAnswer} handleQuestionsCompletion={handleQuestionsCompletion} onNext={() => { navSetUp('second', 'archetype') }} onBack={() => { navSetUp('second', 'first') }} />;
      case 'archetype':
        return <ArchetypeResultStage userInfo={userInfo} onNext={() => { navSetUp('archetype', 'infoInput') }} onBack={() => { navSetUp('archetype', 'intro') }} />;
      case 'infoInput':
        return <InfoInputStage handleSubmit={handleSubmit} userInfo={userInfo} setUserInfo={setUserInfo} onNext={() => { navSetUp('infoInput', 'confirmation') }} onBack={() => { navSetUp('infoInput', 'archetype') }} />
      case 'confirmation':
        return <ConfirmationStage />
      default:
        return <div>Error!</div>
    }
  }

  return (
    <form className="min-h-[408px] min-w-fit lg:w-[640px] flex justify-center items-center p-5 lg:p-10 rounded bg-bg-secondary drop-shadow">
      {renderStage()}
    </form>
  );
}
