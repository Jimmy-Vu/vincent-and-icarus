export default interface messageFormStageProps {
  onNext?: () => void;
  onBack?: () => void;
  setUserInfo?: (arg0: userInfoState) => void;
}

interface userInfoState {
  archetype: string;
  name: string;
  number: string;
}
