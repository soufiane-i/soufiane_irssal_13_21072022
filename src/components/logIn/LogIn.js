import { useDispatch } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { setToken } from "../../redux/feature/logInSlice";
import { useNavigate } from "react-router-dom";
import { loadUserInfos } from "../function/loadUserInfos";

function SignIn() {
  const navigate = useNavigate();
  const loginEmail = useRef("");
  const loginPassword = useRef("");
  const dispatch = useDispatch();
  let token;

  const instance = axios.create({
    baseURL: "http://localhost:3001/api/v1/user",
  });

  token = localStorage.getItem("token");
  if (token) {
    loadUserInfos(token, dispatch, navigate);
  }

  const handlerLogin = async (e) => {
    e.preventDefault();
    const error = document.querySelector(".error");
    instance
      .post("/login", {
        email: loginEmail.current.value,
        password: loginPassword.current.value,
      })
      .then((response) => {
        instance.defaults.headers.common[
          "token"
        ] = `Bearer ${response.data.body.token}`;
        token = `Bearer ${response.data.body.token}`;
        dispatch(setToken(token));
        error.classList.add("close");
        navigate("/user");
      })
      .catch((err) => {
        console.log(err.response.status);
        error.classList.remove("close");
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handlerLogin(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" ref={loginEmail} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={loginPassword} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p className="error close">Identifiant ou mot de passe incorrect</p>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
export default SignIn;
