import React from "react";
import startGame from "../assets/startGame.jpg";

const StartGame = () => {
  return;
  <div className="flex justify-center items-center h-4/6">
    <div className="relative">
      <img
        src={startGame}
        alt="startGame"
        className="object-cover h-96 rounded-2xl"
      />
      <div className="absolute top-16 left-16">
        <button className="text-3xl bg-[#F1FAEE] p-5 w-52 rounded-2xl hover:bg-transparent hover:border-2 hover:text-[#F1FAEE]">
          Start
        </button>
      </div>
    </div>
  </div>;
};

export default StartGame;
