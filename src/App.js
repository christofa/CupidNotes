import React, { useState } from "react";

// stylesheet
import "./App.css";

// Firebase Auth
import { auth } from "./config/firebase-config";
import {createUserWithEmailAndPassword} from "firebase/auth"

// components
import Navbar from "./components/Navbar";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Reset from "./Pages/Reset/Reset";
import SignUp from "./Pages/SignUp/SignUp";
import Sent from "./Pages/Sent/Sent";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // signup page
  const [email, setEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Home page
  const [textIcons, setTextIcons] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");

  // Title tag
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTextIcons(true);
  };

  // Message Tag
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setTextIcons(true);
  };

  // Hint tag
  const handleHintChange = (e) => {
    setHint(e.target.value);
    setTextIcons(true);
  };

  // Spread love button
  const handleSendMessage = () => {
    setTextIcons(false);
  };

  // hide text icons
  const cancelHandler = () => {
    setTextIcons(false);
  };

  // REGISTER USING FIREBASE--------------
  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(auth,email,signupPassword)
    console.log(user)
    } catch(error){
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="app">
        {/* FaCopy */}

        <BrowserRouter>
          <Navbar
            textIcons={textIcons}
            setTextIcons={setTextIcons}
            cancelHandler={cancelHandler}
          />
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  title={title}
                  message={message}
                  hint={hint}
                  handleTitleChange={handleTitleChange}
                  handleMessageChange={handleMessageChange}
                  handleHintChange={handleHintChange}
                  handleSendMessage={handleSendMessage}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/sign_up"
              element={
                <SignUp
                  setEmail={setEmail}
                  setSignupPassword={setSignupPassword}
                  register={register}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/reset" element={<Reset />} />
          </Routes>
          <Routes>
            <Route path="/sent" element={<Sent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
