import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const Login = () => {
  const { logIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    // get form datas
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="card bg-white  w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center ">
        Login your account
      </h2>
      <form onSubmit={handleLogIn} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered bg-white"
            required
          />
          {/* error show */}
          {error.login && (
            <label className="label text-sm text-red-600">{error.login}</label>
          )}

          {/* forgot password */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral text-white">Login</button>
        </div>
      </form>
      <p className="text-center">
        Don't Have an Account?{" "}
        <Link
          to="/auth/register"
          className="text-red-500 hover:underline font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
