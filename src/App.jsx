// import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Sign Up/SignUp"
import Reset from "./Pages/Reset/Reset";
import Sent from "./Pages/Sent/Sent";


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
    {
      path: "/success",
      element: <Sent/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
