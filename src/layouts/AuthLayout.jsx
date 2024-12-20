import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] text-black font-poppins">
      <header className="py-3 w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="min-h-screen flex justify-center items-center py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
