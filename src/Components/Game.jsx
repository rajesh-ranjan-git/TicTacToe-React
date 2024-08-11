import React, { useEffect, useState } from "react";
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

  const { players, setPlayers } = usePlayers();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);
  const [turn, setTurn] = useState(true);
  const [playerTurn, setPlayerTurn] = useState(players.players[0].name);
  const [boxValue, setBoxValue] = useState({});
  const [winner, setWinner] = useState(false);

  const boxes = [];

  for (let i = 0; i < 9; i++) {
    boxes.push(<SingleBox />);
  }

  let count = 0;

  const handleNewGame = () => {
    setPlayers(initialValues);
    navigate("/players");
  };

  const reset = () => {
    setPlayers(initialValues);
    setCounter(0);
    setTurn(true);
    setPlayerTurn(players.players[0].name);
    setBoxValue({});
    setWinner(false);
  };

  const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1 = boxValue[pattern[0]];
      let pos2 = boxValue[pattern[1]];
      let pos3 = boxValue[pattern[2]];

      if (pos1 != undefined && pos2 != undefined && pos3 != undefined) {
        if (pos1 === pos2 && pos2 === pos3) {
          reset();
          setWinner(true);
          navigate("/winner");
        }
      }
    }
  };

  const checkDraw = () => {
    console.log(counter);
    if (winner !== true && counter === 9) {
      reset();
      navigate("/draw");
    }
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
          setPlayerTurn(players.players[1].name);
          checkWinner();
        } else {
          valueRef = "O";
          boxValue[id] = valueRef;
          setBoxValue({ ...boxValue });
          setTurn(true);
          setPlayerTurn(players.players[0].name);
          checkWinner();
        }
      }
    }
  };

  useEffect(() => {
    checkDraw();
  }, [counter]);

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
        {playerTurn}'s turn
      </div>
    </div>
  );
};

export default Game;
