import "../index.css";
import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create your account"} />
          <InputBox label={"First Name"} placeholder={"Jaskeerat"} />
          <InputBox label={"Last Name"} placeholder={"Singh"} />
          <InputBox label={"Email"} placeholder={"ijassandhu@gmail.com"} />
          <InputBox label={"Password"} placeholder={"Pikachu"} />
          <div className="pt-4">
            <Button label="Sign Up" />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
