import { type Dispatch, type SetStateAction } from "react";
export default interface messageFormStageProps {
  onNext?: () => void;
  onBack?: () => void;
  setUserInfo?: Dispatch<SetStateAction<userInfoState>>;
  userInfo?: userInfoState;
  handleQuestionsCompletion?: () => void;
  handleAnswer?: (e: React.SyntheticEvent<Element, Event>) => void;
  setFormState?: Dispatch<SetStateAction<{
    currentState: string,
    prevState: string,
  }>>;
  navSetUp?: (prev: string, next: string) => (() => void);
  handleSubmit?: () => void;
}

interface userInfoState {
  archetype: string;
  name: string;
  number: string;
}
