import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Navbar />
      <form
        action=""
        className="flex-row justify-center max-w-[500px] mx-auto mt-20 mb-10"
      >
        <div className="mb-5">
          <input
            type="text"
            placeholder="Choose your Username"
            className="bg-[#F1E1E187] w-[100%] h-[54px] rounded-3xl px-5 pb-2 pt-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Choose your Password"
            className="bg-[#F1E1E187] w-[100%] h-[54px] rounded-3xl px-5 pb-2 pt-2"
          />
        </div>
      </form>
      <div className="max-w-[500px] mx-auto">
        <div className="text-center m-10">
          <Link to="/home">
            <button className="w-[250px] h-[54px] bg-[#FF1616] rounded-3xl pb-2 pt-2 text-white hover:bg-[#F1E1E187] hover:text-[#FF1616] mb-8">
              {" "}
              Login
            </button>
          </Link>
          <p className="mb-3">Forgot Password?</p>
          <p>
            Need an account?{" "}
            <span className="text-[#FF1616]">
              {" "}
              <Link to="/sign-up">Signup</Link>
            </span>
          </p>

          <div className="flex gap-5 m-16 px-[55px]">
            <input type="checkbox" />
            <p>Keep me logged in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
