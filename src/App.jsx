import { Outlet } from "react-router-dom";
import "./App.css";
import Title from "./Components/Title";
import { PlayerController } from "./utils/PlayerController";

function App() {
  return (
    <div className="h-screen">
      <Title />
      <PlayerController>
        <Outlet />
      </PlayerController>
    </div>
  );
}

export default App;
