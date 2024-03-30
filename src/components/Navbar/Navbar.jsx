// NavLink
import { Link } from "react-router-dom";

// react icons

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
       <Link to="/home">
        <img src="/Images/Logo.png" alt="" className="w-[230px]"/>
      </Link>
    </nav>
  )
}

export default Navbar
