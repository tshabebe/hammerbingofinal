import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


function Home() {
  return <div>Hello World <a href="/game">Game</a></div>
}

function Game() {
  return <div>Game <a href="/">Home</a></div>
}

function Employee() {
  return <div>Employee <a href="/game">Game</a></div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
]);



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
