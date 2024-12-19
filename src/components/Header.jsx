import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4">
      <div className="logo">
        <img className="w-[300px]" src={logo} />
      </div>
      <h2 className="text-gray-400">Spreading fake news across the globe</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
