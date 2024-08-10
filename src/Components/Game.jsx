import React from "react";
import Box from "./Box";
import { Link, useNavigate } from "react-router-dom";
import { initialValues, usePlayers } from "../utils/Store/PlayerController";
import SingleBox from "./SingleBox";

const Game = () => {
  const { players, setPlayers } = usePlayers();
  const navigate = useNavigate();

  const boxes = [];

  for (let i = 0; i < 9; i++) {
    boxes.push(<SingleBox />);
  }

  const handleNewGame = () => {
    setPlayers(initialValues);
    navigate("/players");
  };

  return (
    <div className="flex justify-center">
      <div className="relative m-8 flex flex-col h-[28rem] w-[28rem] rounded-2xl">
        <div className="m-2 flex justify-center items-center flex-wrap">
          {boxes.map((box, i) => (
            <SingleBox obj={box} key={i} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg">
            Reset
          </button>
          <button
            className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg"
            onClick={handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>

      <div className="absolute top-[11%] px-4 py-2 bg-[#457B9D] text-center text-2xl text-[#F1FAEE] font-semibold rounded-2xl">
        {players.players[0].name}'s turn
      </div>
    </div>
  );
};

export default Game;
