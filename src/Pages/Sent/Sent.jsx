import Navbar from "../../components/Navbar/Navbar";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { FaRepeat } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Navbar />
      <div className="max-w-[600px] mx-auto mt-20">
        <div className="flex justify-center mt-20 mb-10">
          <LiaCheckDoubleSolid size={150} className="text-[#FF1616]" />
        </div>
        <p className="flex justify-center mb-20 text-2xl text-[#FF1616] font-semibold">
          Message Delivered
        </p>
        <p className="flex justify-center font-bold mb-3">10:00</p>

        <div className="flex justify-center">
          <Link to="/home">
            <button className="flex justify-center items-center gap-2 w-[200px] h-[60px] bg-[#FF1616] rounded-[35px] pb-2 pt-2 text-white hover:bg-[#F1E1E1] hover:text-[#FF1616]">
              Send another{" "}
              <span>
                <FaRepeat />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sent;
