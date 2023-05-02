import { type Dispatch, type SetStateAction } from "react";
export default interface messageFormStageProps {
  onNext?: () => void;
  onBack?: () => void;
  setUserInfo?: Dispatch<SetStateAction<userInfoState>>;
  userInfo?: userInfoState;
  setUserScore?: Dispatch<SetStateAction<number>>;
}

interface userInfoState {
  archetype: string;
  name: string;
  number: string;
}
