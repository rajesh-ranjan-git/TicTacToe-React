import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialValues, usePlayers } from "../utils/Store/PlayerController";
import SingleBox from "./SingleBox";

const Game = () => {
  const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const [counter, setCounter] = useState(0);
  const [turn, setTurn] = useState(true);
  const [boxValue, setBoxValue] = useState({});

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

  const handleTurns = (id, valueRef) => {
    if (counter != 9) {
      setCounter((count) => count + 1);
      if (valueRef == "") {
        if (turn == true) {
          valueRef = "X";
          boxValue[id] = valueRef;
          setBoxValue({ ...boxValue });
          setTurn(false);
          // click_check = checkWinner(box.innerText);
        } else {
          valueRef = "0";
          boxValue[id] = valueRef;
          setBoxValue({ ...boxValue });
          setTurn(true);
          // click_check = checkWinner(box.innerText);
        }
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative m-8 flex flex-col h-[28rem] w-[28rem] rounded-2xl">
        <div className="m-2 flex justify-center items-center flex-wrap">
          {boxes.map((box, id) => (
            <SingleBox
              box={box}
              id={id}
              key={id}
              handleTurns={handleTurns}
              boxValue={boxValue}
              // setBoxValue={setBoxValue}
            />
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
