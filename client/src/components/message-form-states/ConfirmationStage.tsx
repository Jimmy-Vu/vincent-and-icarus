import React from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function ConfirmationStage(props: messageFormStageProps): React.ReactElement {
  return (
    <div className="w-full">
      <h1 className="text-center text-xl font-semibold">Your message has been sent!</h1>
    </div>
  );
}
