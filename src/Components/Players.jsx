import React, { useState } from "react";
import { Link } from "react-router-dom";

const Players = () => {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  const handlePlayers = () => {
    console.log(player1, player2);
  };

  return (
    <div className="flex justify-center h-4/6">
      <div className="flex justify-center items-center flex-col bg-[#A8DADC] h-[28rem] w-[28rem] rounded-2xl text-center">
        <label className="m-2 p-2 text-2xl w-60 font-semibold">
          Player 1 Name :
        </label>
        <input
          placeholder="Player 1"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <label className="m-2 p-2 text-2xl w-60 font-semibold">
          Player 2 Name :
        </label>
        <input
          placeholder="Player 2"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <Link to={"/game"}>
          <button
            className="mt-12 p-4 bg-[#1D3557] w-60 rounded-2xl text-lg text-[#F1FAEE] font-semibold"
            onClick={handlePlayers}
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Players;
