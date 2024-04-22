import Navbar2 from "../../components/Navbar2/Navbar2";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-[700px] md:max-w-[1000px] mx-auto">
      <Navbar2 />
      <div className="flex flex-col max-w-[350px] md:max-w-[600px] mx-auto mt-5">
        <input
          type="text"
          placeholder="Title"
          className="text-center bg-[#F1E1E1] h-[30px] rounded-3xl p-5 mt-7 mb-2"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Show some love"
          className="text-center bg-[#F1E1E1] rounded-3xl p-5 mt-5 mb-2"
        ></textarea>
        <input
          type="text"
          placeholder="Hint"
          className="text-center bg-[#F1E1E1] h-[30px] rounded-3xl p-5 mt-5 mb-7"
        />
        <div className="flex justify-center">
          <Link to="/success">
            <button className="flex justify-center items-center gap-2 w-[200px] h-[60px] bg-[#FF1616] rounded-[35px] pb-2 pt-2 text-white hover:bg-[#F1E1E1] hover:text-[#FF1616]">
              Spread Love{" "}
              <span>
                <LuSendHorizonal />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
