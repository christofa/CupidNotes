// NavLink
import { Link } from "react-router-dom";

// react icons
import { FaPen } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Navbar2() {
  return (
    <nav className="flex justify-between items-center">
    <Link to="/home">
     <img src="/Images/Logo.png" alt="" className="w-[230px]"/>
   </Link>
     <div className="flex gap-5">
       <FaPen size={30} />
       <FaTimes size={35} />
     </div> 
 </nav>
  )
}

export default Navbar2
