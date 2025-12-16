import { Link } from "react-router-dom";

export default function RoleCard({ type = "manager" }) {
  return (
    <Link to={`/${type}/sign-in`}>
      <div className="flex flex-col items-center justify-center w-[225px] h-[275px] rounded-[20px] border border-[#262A56] bg-[#080A2A] m-auto hover:text-[#662FFF] text-white">
        <img
          src="/assets/images/icons/profile-2user-purple.svg"
          className="w-1/3 h-1/3"
          alt=""
        />
        <p className="font-semibold transition-all duration-300">
          Login {type === "manager" ? "as Manager" : "as Student"}
        </p>
      </div>
    </Link>
  );
}
