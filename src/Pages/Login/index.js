import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { removeAuth } from "../../Utils/localStorage";

const Login = (props) => {
  const { login, authReducer } = props;
  const { isLoged } = authReducer;
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  if (isLoged) {
    return <Redirect to="/" />;
  }

  removeAuth();
  const onSubmit = (data) => {
    login(data);
  };

  const showForm = (add = true) => {
    const formBx = document.querySelector(".formBx");
    const body = document.querySelector(".body-login");
    if (add) {
      formBx.classList.add("active");
      body.classList.add("active");
    } else {
      formBx.classList.remove("active");
      body.classList.remove("active");
    }
  };

  return (
    <div className="body-login">
      <div className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already have an account?</h2>
            <button className="signinBtn" onClick={() => showForm(false)}>
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2>Don't have an account?</h2>
            <button className="signupBtn" onClick={showForm}>
              Sign up
            </button>
          </div>
        </div>
        <div className="formBx">
          <div className="form signinForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Sign In</h3>
              <input
                type="text"
                defaultValue="admin"
                {...register("username", { required: true })}
                placeholder="Username"
              />
              <input
                type="password"
                defaultValue="admin"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <input type="submit" value="Login" />
              <Link to="/login" className="forgot">
                Forgot Password
              </Link>
            </form>
          </div>

          <div className="form signupForm">
            <form>
              <h3>Sign up</h3>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
