import { type Dispatch, type SetStateAction } from "react";
export default interface messageFormStageProps {
  onNext?: () => void;
  onBack?: () => void;
  setUserInfo?: Dispatch<SetStateAction<userInfoState>>;
  userInfo?: userInfoState;
  setUserScore?: Dispatch<SetStateAction<number>>;
  handleQuestionsCompletion?: () => void;
  handleAnswer?: (e: React.SyntheticEvent<Element, Event>) => void;
}

interface userInfoState {
  archetype: string;
  name: string;
  number: string;
}
