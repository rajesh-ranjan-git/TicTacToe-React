import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialValues, usePlayers } from "../utils/Store/PlayerController";
import SingleBox from "./SingleBox";
import Draw from "./Draw";
import Winner from "./Winner";
import gameReset from "../assets/sounds/game-reset.mp3";
import gameDraw from "../assets/sounds/draw.mp3";
import gameWinner from "../assets/sounds/winner.mp3";

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
  const [winningPlayer, setWinningPlayer] = useState("");
  const [draw, setDraw] = useState(false);

  const boxes = [];

  for (let i = 0; i < 9; i++) {
    boxes.push(<SingleBox />);
  }

  const handleNewGame = () => {
    reset();
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

  const handleReset = () => {
    new Audio(gameReset).play();
    reset();
  };

  const checkWinner = (winningPlayer) => {
    for (let pattern of winPattern) {
      let pos1 = boxValue[pattern[0]];
      let pos2 = boxValue[pattern[1]];
      let pos3 = boxValue[pattern[2]];

      if (pos1 != undefined && pos2 != undefined && pos3 != undefined) {
        if (pos1 === pos2 && pos2 === pos3) {
          new Audio(gameWinner).play();
          reset();
          setWinner(true);
          setWinningPlayer(winningPlayer);
        }
      }
    }
  };

  const checkDraw = () => {
    if (winner !== true && counter === 9) {
      new Audio(gameDraw).play();
      reset();
      setDraw(true);
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
          checkWinner(players.players[0].name);
        } else {
          valueRef = "O";
          boxValue[id] = valueRef;
          setBoxValue({ ...boxValue });
          setTurn(true);
          setPlayerTurn(players.players[0].name);
          checkWinner(players.players[1].name);
        }
      }
    }
  };

  useEffect(() => {
    checkDraw();
  }, [counter]);

  return (
    <div className="flex justify-center">
      <div
        className={`relative m-8 flex flex-col h-[28rem] w-[28rem] rounded-2xl ${
          draw || winner ? "blur" : ""
        }`}
      >
        <div className="m-2 flex justify-center items-center flex-wrap">
          {boxes.map((box, id) => (
            <SingleBox
              box={box}
              id={id}
              key={id}
              handleTurns={handleTurns}
              boxValue={boxValue}
              winner={winner}
              draw={draw}
              counter={counter}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg"
            onClick={!winner && !draw ? handleReset : null}
          >
            Reset
          </button>
          <button
            className="m-1 p-3 rounded-2xl w-40 bg-[#457B9D] text-[#F1FAEE] font-bold text-lg"
            onClick={!winner && !draw ? handleNewGame : null}
          >
            New Game
          </button>
        </div>
      </div>

      {draw ? <Draw handleNewGame={handleNewGame} /> : null}
      {winner ? (
        <Winner handleNewGame={handleNewGame} winningPlayer={winningPlayer} />
      ) : null}

      {!draw && !winner ? (
        <div className="absolute top-[11%] px-4 py-2 bg-[#457B9D] text-center text-2xl text-[#F1FAEE] font-semibold rounded-2xl">
          {playerTurn}'s turn
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
