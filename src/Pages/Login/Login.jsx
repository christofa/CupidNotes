import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(userName);
  console.log(password);
  return (
    <div className="max-w-[700px] md:max-w-[1000px] mx-auto">
      <Navbar />
      <form
        action=""
        className="flex-row justify-center text-center max-w-[500px] md:mx-auto mt-32 md:mt-20 mb-10"
      >
        <div className="mb-5">
          <input
            type="text"
            placeholder="Choose your Username"
            value={userName}
            onChange={handleUserChange}
            className="bg-[#F1E1E187] w-[90%] md:w-[100%] h-[54px] rounded-3xl px-5 pb-2 pt-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Choose your Password"
            value={password}
            onChange={handlePassChange}
            className="bg-[#F1E1E187] w-[90%] md:w-[100%] h-[54px] rounded-3xl px-5 pb-2 pt-2"
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
          <Link to="/reset">
          <p className="mb-3">Forgot Password?</p>
          </Link>
          <p>
            Need an account?{" "}
            <span className="text-[#FF1616]">
              {" "}
              <Link to="/sign-up">Signup</Link>
            </span>
          </p>

          <div className="flex justify-center gap-5 mt-16 mb-16  md:m-16 px-[20px] md:px-[55px]">
            <input type="checkbox" />
            <p>Keep me logged in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
