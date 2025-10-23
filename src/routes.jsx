import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
      { path: "movie/:id", element: <Movie /> },
      {
        path: "*",
        element: <div>Oops! Looks like something went wrong.</div>,
      },
    ],
  },
];
