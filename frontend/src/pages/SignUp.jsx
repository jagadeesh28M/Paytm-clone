import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 flex justify-center items-center h-screen ">
      <div className="bg-white rounded-lg text-center h-max">
        <div className="flex justify-center flex-col items-center">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            topLabel={"First Name"}
            placeholder={" John"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            topLabel={"Last Name"}
            placeholder={" Doe"}
          />
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            topLabel={"Email"}
            placeholder={" abc@gmail.com"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            topLabel={"Password"}
            placeholder={" 123456"}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:5173/api/v1/signup",
                {
                  email,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
            }}
            label={"Sign Up"}
          />
          <BottomWarning
            label={"Already have an account?"}
            loginLabel={"Login"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
