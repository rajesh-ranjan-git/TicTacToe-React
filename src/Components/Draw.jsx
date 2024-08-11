import React from "react";

const Draw = ({ handleNewGame }) => {
  return (
    <div className="absolute top-60 flex justify-center items-center p-3 bg-[#457B9D] text-[#F1FAEE] text-center rounded-2xl backdrop-blur-0">
      <div className="w-72">
        <p className="p-10 text-5xl">Draw !!</p>
        <div>
          <button
            className="m-1 p-3 rounded-2xl w-40 bg-[#1D3557] text-[#F1FAEE] font-bold text-lg"
            onClick={handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Draw;
