import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlayers } from "../utils/PlayerController";

const Players = () => {
  const navigate = useNavigate();

  const { players, setPlayers } = usePlayers();

  const handlePlayerNames = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "player1") {
      players.players[0].name = value;
    } else if (name === "player2") {
      players.players[1].name = value;
    }
  };

  const handlePlayers = () => {
    console.log(players);
    navigate("/game");
  };

  return (
    <div className="flex justify-center h-4/6">
      <div className="flex justify-center items-center flex-col bg-[#A8DADC] h-[28rem] w-[28rem] rounded-2xl text-center">
        <label className="m-2 p-2 text-2xl w-60 font-semibold">
          Player 1 Name :
        </label>
        <input
          name="player1"
          placeholder="Player 1"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={handlePlayerNames}
        />
        <label className="m-2 p-2 text-2xl w-60 font-semibold">
          Player 2 Name :
        </label>
        <input
          name="player2"
          placeholder="Player 2"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={handlePlayerNames}
        />
        <button
          className="mt-12 p-4 bg-[#1D3557] w-60 rounded-2xl text-lg text-[#F1FAEE] font-semibold"
          onClick={handlePlayers}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Players;
