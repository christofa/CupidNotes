import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { BiSolidDownArrowSquare } from "react-icons/bi";

function Info() {
  return (
    <div className="max-w-[700px] md:max-w-[1000px] mx-auto">
      <Navbar />

      <form action="" className="p-5 flex justify-center mt-16 mb-16">
        <div>
          <div className="flex flex-col mb-14 ">
            <span className="flex items-center gap-2">
              <label>Whatsapp Number</label>{" "}
              <BiSolidDownArrowSquare className="text-[#FF1616]" size={25} />
            </span>
            <input
              type="number"
              placeholder="081*******3"
              className="w-[350px] md:w-[500px] bg-[#F1E1E1] h-[30px] rounded-3xl p-6 mt-4 mb-2"
            />
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-2">
              <label>Email Address</label>{" "}
              <BiSolidDownArrowSquare className="text-[#FF1616]" size={25} />
            </span>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="w-[350px] md:w-[500px] bg-[#F1E1E1] h-[30px] rounded-3xl p-6 mt-4 mb-2"
            />
          </div>
        </div>
      </form>

      <div className="flex justify-center">
        <Link to="/success">
          <button className="w-[250px] h-[54px] bg-[#FF1616] rounded-3xl pb-2 pt-2 text-white hover:bg-[#F1E1E187] hover:text-[#FF1616] mb-8">
            {" "}
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
