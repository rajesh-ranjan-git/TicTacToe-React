import { Outlet } from "react-router-dom";
import "./App.css";
import Title from "./Components/Title";

function App() {
  return (
    <div className="h-screen">
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
