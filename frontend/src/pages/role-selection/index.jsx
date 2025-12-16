import Navbar from "../../components/navbar";
import RoleCard from "./Card";

export default function RoleSelectionPage() {
  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
        <img
          src="/assets/images/backgrounds/background-glow.png"
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
          alt=""
        />
      </div>
      <nav className="flex items-center justify-between p-[30px]">
        <Navbar />
      </nav>
      <div className="flex flex-row justify-center w-full h-full gap-[100px] mt-[75px]">
        <RoleCard />
        <RoleCard type="student"/>
      </div>
    </div>
  );
}
