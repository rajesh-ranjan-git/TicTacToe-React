import React, { createContext, useContext, useState } from "react";

const initialValues = {
  players: [
    {
      id: 1,
      name: "Player 1",
    },
    {
      id: 2,
      name: "Player 2",
    },
  ],
};

export const PlayerStore = createContext(initialValues);

const PlayerController = ({ children }) => {
  const [players, setPlayers] = useState(initialValues);

  return (
    <PlayerStore.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerStore.Provider>
  );
};

const usePlayers = () => useContext(PlayerStore);

export { usePlayers, initialValues, PlayerController };
