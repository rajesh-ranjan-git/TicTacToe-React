import React, { useRef } from "react";

const SingleBox = ({ id, handleTurns, boxValue }) => {
  const boxValueRef = useRef();

  const handleBoxValue = () => {
    const valueRef = boxValueRef.current.innerText;
    handleTurns(id, valueRef);
  };

  return (
    <div
      className="flex justify-center items-center m-2 bg-[#1D3557] h-[7rem] w-[7rem] rounded-2xl drop-shadow-box cursor-pointer text-6xl font-semibold text-[#F1FAEE]"
      onClick={handleBoxValue}
      ref={boxValueRef}
    >
      {boxValue[id]}
    </div>
  );
};

export default SingleBox;
