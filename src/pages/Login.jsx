import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const Login = () => {
  const { logIn, setUser, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
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
        navigate("/category/01");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

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
