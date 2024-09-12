import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

const SendMoney = () => {
  return (
    <div className="bg-slate-300 flex justify-center items-center h-screen ">
      <div className="bg-white rounded-lg text-center w-1/4 h-auto">
        <div className="flex justify-center flex-col items-center mb-9">
          <Heading label={"Send Money"} />
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span class="text-2xl text-white">A</span>
            </div>
            <h3 class="text-2xl font-semibold">Friend's Name</h3>
          </div>
          <InputBox topLabel={"Amount (in Rs)"} phLabel={"  Enter Amount"} />
          <button className="bg-green-500 text-white hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-base w-3/4 rounded-lg py-2 mt-4">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
