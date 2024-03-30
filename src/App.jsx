// import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Sign Up/SignUp"
import Reset from "./Pages/Reset/Reset";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/sign-up",
      element: <SignUp/>,
    },
    {
      path: "/reset",
      element: <Reset/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
