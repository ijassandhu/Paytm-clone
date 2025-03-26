import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const username = email;
  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("Sign-in button clicked");

    try {
      const payload = JSON.stringify({ email, password });
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Length": payload.length,
          },
        }
      );
      console.log("control reached here");
      console.log("Response from server:", data); // ✅ Log response
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Error caught:", err); // ✅ Log error object
      console.log("Error response:", err.response?.data); // ✅ Log server error
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max `px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="jaskeerat@gmail.com"
            label={"Email"}
            autocomplete
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="#jas1234"
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleSignin} label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
