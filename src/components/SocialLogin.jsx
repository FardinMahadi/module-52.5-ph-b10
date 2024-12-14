import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3 text-xl">Login with</h2>
      <div className="flex flex-col gap-2">
        <button className="btn bg-transparent text-blue-500 transition">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn bg-transparent text-black hover:text-white transition">
          <FaGithub />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
