import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <AppBar label={" User"} />
      <Balance value={"5000"} />
      <Users />
    </div>
  );
};

export default Dashboard;
