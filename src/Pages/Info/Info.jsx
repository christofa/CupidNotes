import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Info() {
  return (
    <div className="max-w-[700px] md:max-w-[1000px] mx-auto">
      <Navbar />
      <div className="flex flex-col">
        <label>Whatsapp Number</label>
        <input
          type="number"
          className="text-center w-[300px] bg-[#F1E1E1] h-[30px] rounded-3xl p-5 mt-4 mb-2"
        />
      </div>

      <div className="flex flex-col">
        <label>Email Address</label>
        <input
          type="email"
          className="text-center w-[300px] bg-[#F1E1E1] h-[30px] rounded-3xl p-5 mt-4 mb-2"
        />
      </div>

      <div className="flex justify-center">
        <Link>
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
