import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="card bg-white  w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center ">
        Register your account
      </h2>
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="url"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
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
        Already Have an Account?{" "}
        <Link
          to="/auth/login"
          className="text-red-500 hover:underline font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
