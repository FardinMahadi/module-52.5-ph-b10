import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more then 5 character long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="card bg-white  w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center ">
        Register your account
      </h2>
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered bg-white"
            required
          />
        </div>
        {/* error of name */}
        {error.name && (
          <label className="label text-xs text-rose-500">{error.name}</label>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input
            name="photo"
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
