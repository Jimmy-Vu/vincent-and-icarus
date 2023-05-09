import React, { useEffect, useState, useRef } from "react";
import type messageFormStageProps from "./interfaces/messageFormStageProps";

export default function InfoInputStage(props: messageFormStageProps): React.ReactElement | null {
  const { onNext, onBack, setUserInfo, handleSubmit } = props;

  const [infoValidity, setInfoValidity] = useState({
    name: false,
    number: false,
    consent: false
  });

  const [allIsValid, setAllIsValid] = useState(false);
  useEffect(() => {
    setAllIsValid(Object.values(infoValidity).every(currValue => currValue));
  }, [infoValidity]);

  function handleNameChange(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement;
    setUserInfo?.(prev => ({
      ...prev,
      name: target.value
    }));

    if (target.value.length !== undefined && target.value.length >= 2) {
      setInfoValidity(prev => ({ ...prev, name: true }))
    } else {
      setInfoValidity(prev => ({ ...prev, name: false }))
    }
  }

  function handleNumChange(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement;
    setUserInfo?.(prev => ({
      ...prev,
      number: target.value
    }));

    const phoneNumRegEx = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (target.value.length !== undefined && phoneNumRegEx.test(target.value)) {
      setInfoValidity(prev => ({ ...prev, number: true }))
    } else {
      setInfoValidity(prev => ({ ...prev, number: false }))
    }
  }

  return (
    <div className="w-full">
      <section className="px-5 pt-5">
        <h1 className="font-medium">Hey there, almost done! We&apos;re excited to send you a personalized message to help keep you balanced.
          Don&apos;t worry, we promise not to
          share your info with anyone else. And no need to stress - your information won&apos;t be stored on our servers either.</h1>
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <label htmlFor="name">First Name</label>
            <input onChange={handleNameChange} className="border border-solid border-black" type="text" name="name" id="name"/>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="number">Phone Number (USA Only)</label>
            <input onChange={handleNumChange} className="border border-solid border-black" type="tel" name="number" id="number" />
          </div>
          <div className="flex items-start mb-5">
            <input onChange={() => { setInfoValidity(prev => ({ ...prev, consent: !prev.consent })); }} className="mt-1" type="checkbox" name="consent" id="consent" />
            <label className="ml-1 text-sm" htmlFor="consent">I understand that Vincent&Icarus will use the information I provide to send me a personalized message. I consent to the name and phone number I provide for this purpose.</label>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-between mt-3">
        <button className="text-2xl" type="button" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>
        <button disabled={!allIsValid} className={`text-2xl ${allIsValid ? '' : 'disabled:opacity-50'}`} type="submit" onClick={handleSubmit}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
