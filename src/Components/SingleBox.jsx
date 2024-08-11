import React, { useRef } from "react";
import clickSound from "../assets/sounds/click.mp3";

const SingleBox = ({ id, handleTurns, boxValue, winner, draw, counter }) => {
  const boxValueRef = useRef();

  const boxClicked = () => {
    // console.log("clicked");
    if (counter < 8 && winner === false) {
      // console.log(counter);
      // console.log(winner);
      new Audio(clickSound).play();
    }
  };

  const handleBoxValue = () => {
    boxClicked();
    const valueRef = boxValueRef.current.innerText;
    handleTurns(id, valueRef);
  };

  return (
    <div
      className="flex justify-center items-center m-2 bg-[#1D3557] h-[7rem] w-[7rem] rounded-2xl drop-shadow-box cursor-pointer text-6xl font-semibold text-[#F1FAEE]"
      onClick={!winner && !draw ? handleBoxValue : null}
      ref={boxValueRef}
    >
      {boxValue[id]}
    </div>
  );
};

export default SingleBox;
