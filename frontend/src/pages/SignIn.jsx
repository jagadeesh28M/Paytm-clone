import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

const SignIn = () => {
  return (
    <div className="bg-slate-300 flex justify-center items-center h-screen ">
      <div className="bg-white rounded-lg text-center">
        <div className="flex justify-center flex-col items-center">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox topLabel={"Email"} phLabel={" abc@gmail.com"} />
          <InputBox topLabel={"Password"} phLabel={" 123456"} />
          <Button label={"Sign In"} />
          <BottomWarning
            label={"Don't have an account?"}
            loginLabel={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
