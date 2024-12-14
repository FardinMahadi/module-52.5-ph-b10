import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="text-black font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-18 grid grid-cols-4 sm:grid-cols-9 md:grid-cols-12 gap-3">
        <aside className="left col-span-2 sm:col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-4 sm:col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
