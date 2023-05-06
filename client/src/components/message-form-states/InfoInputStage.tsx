import React from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function InfoInputStage(props: messageFormStageProps): React.ReactElement {
  const { onNext, onBack, setUserInfo, handleSubmit } = props;

  function handleChange(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement;
    setUserInfo?.(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  }
  return (
    <div className="w-full">
      <section>
        <h1 className="font-medium">Hey there, almost done! We&apos;re excited to send you a personalized message to help keep you balanced.
          To finish things off, could you share a name to call you by and your phone number with us? Don&apos;t worry, we promise not to
          share your info with anyone else. And no need to stress - your information won&apos;t be stored on our servers either. </h1>
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} className="border border-solid border-black" type="text" name="name" id="name" />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="number">Phone Number</label>
            <input onChange={handleChange} className="border border-solid border-black" type="tel" name="number" id="number" />
          </div>
          <div className="flex items-start mb-5">
            <input className="mt-1" type="checkbox" name="consent" id="consent" />
            <label className="ml-1 text-sm" htmlFor="consent">I understand that Vincent&Icarus will use the information I provide to send me a personalized message. I consent to the name and phone number I provide for this purpose.</label>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-between mt-3">
        <button className="text-2xl" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="text-2xl" onClick={handleSubmit}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
