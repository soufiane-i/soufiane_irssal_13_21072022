import { useDispatch } from "react-redux";
import { authentification } from "../../redux";
import { useEffect, useState } from "react";
import axios from "axios";
function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let refreshToken;
  let token;
  const instance = axios.create({
    baseURL: "http://localhost:3001/api/v1/user",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    instance
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        instance.defaults.headers.common[
          "token"
        ] = `Bearer ${response.data.body.token}`;
        token = `Bearer ${response.data.body.token}`;
        //refreshToken = response.data.refreshToken;
        loadUserInfos(response.data.body.token);
      })
      .catch((err) => {
        console.log(err.response.status);
      });

    function loadUserInfos(tokenData) {
      /*       instance
        .post("/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }); */
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
export default SignIn;
