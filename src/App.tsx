"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With strawberry cake on top",
      "What about a hello kitty cake?",
      "PLEASE :(",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to my ghost",
      "please jabroni",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center ${
        yesPressed ? "gap-10" : ""
      } overflow-hidden`}
    >
      {yesPressed ? (
        <>
          <img className="-mt-16 relative z-10" src="/hkdd.png" />
          <div className="relative w-full">
            <div className="my-4 text-4xl font-boldins font-bold relative z-10 w-full text-center text-[#632624]">
              <span className="block text-center">WOOOOOO!!!</span>
              <span className="block text-center">
                I love you!! <span className="text-3xl">🥹</span>
              </span>
            </div>
            <div className="bg-[#fab6cd] w-full h-[1200px] border-t-8 border-[#632624] absolute -top-14 left-0 z-0"></div>
          </div>
        </>
      ) : (
        <>
          <img
            className="max-h-[400px] w-auto -mt-16 relative z-10 px-5 md:px-0"
            src="/invitation.png"
          />
          <div className="relative w-full">
            <h1 className="relative z-10 text-4xl text-center my-4 font-boldins text-[#632624]">
              Will you be my Valentine?
            </h1>
            <div className="bg-[#fab6cd] w-full h-[1200px] border-t-8 border-[#632624] absolute -top-5 left-0 z-0"></div>
          </div>
          <div className="flex items-center relative">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
