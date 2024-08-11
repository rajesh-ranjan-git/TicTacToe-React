import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Players from "./Components/Players";
import Game from "./Components/Game";
import Winner from "./Components/Winner";
import Draw from "./Components/Draw";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/winner",
        element: <Winner />,
      },
      {
        path: "/draw",
        element: <Draw />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
