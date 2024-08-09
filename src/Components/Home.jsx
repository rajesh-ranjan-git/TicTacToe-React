import React from "react";
import StartGame from "./StartGame";
import startGame from "../assets/startGame.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-5/6">
      <div className="relative">
        <img src={startGame} alt="startGame" className="h-96 rounded-2xl" />
        <div className="absolute top-16 left-16">
          <button className="text-3xl bg-[#F1FAEE] p-5 w-52 rounded-2xl hover:bg-transparent hover:border-2 hover:text-[#F1FAEE]">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
