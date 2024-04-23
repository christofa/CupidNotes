import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Reset() {
  return (
    <div className="max-w-[700px] md:max-w-[1000px] mx-auto">
      <Navbar />
      <form
        action=""
        className="flex-row text-center justify-center max-w-[500px] mx-auto mt-32 mb-10"
      >
        <div className="mb-5">
          <input
            type="text"
            placeholder="Enter New Username"
            className="bg-[#F1E1E187] w-[90%] md:w-[100%] h-[54px] rounded-3xl px-5 pb-2 pt-2"
          />
        </div>
      </form>
      <div className="max-w-[500px] mx-auto">
        <div className="text-center m-10">
          <button className="w-[250px] h-[54px] bg-[#FF1616] rounded-3xl pb-2 pt-2 text-white hover:bg-[#F1E1E187] hover:text-[#FF1616] mb-8">
            {" "}
            Reset
          </button>
          <p className="mb-3">Forgot Password?</p>
          <p>
            Need an account?{" "}
            <span className="text-[#FF1616]">
              {" "}
              <Link to="/sign-up">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reset;
