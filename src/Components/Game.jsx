import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import { usePlayers } from "../utils/PlayerController";

const Game = () => {
  const { players } = usePlayers();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[28rem] w-[28rem] rounded-2xl">
        <Box />
        <div className="flex justify-center">
          <button className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg">
            Reset
          </button>
          <Link to="/players">
            <button className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg">
              New Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
