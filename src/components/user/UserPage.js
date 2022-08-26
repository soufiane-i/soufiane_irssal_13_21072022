import Footer from "../Footer";
import UserName from "./UserName";
import Account from "./Account";
import EditName from "./EditName";
import HeaderLogIn from "./HeaderLogIn";
import { useDispatch, useSelector } from "react-redux";
import { setLogInData, setToken } from "../../redux/feature/logInSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.logIn.tokenAuth);

  function loadUserInfos(tokenData) {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenData,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setLogInData(res.body));
      });
  }

  if (token === null) {
    token = localStorage.getItem("token");
    dispatch(setToken(token));
  } else {
    localStorage.setItem("token", token);
  }

  useEffect(() => {
    if (token) {
      loadUserInfos(token);
    } else {
      navigate("/sign-in");
    }
    // eslint-disable-next-line
  }, []);

  let datas = useSelector((state) => state.logIn.logIn);
  let firstName;
  let lastName;

  if (datas === null || datas === undefined) {
  } else {
    firstName = datas.firstName;
    lastName = datas.lastName;
  }

  return (
    <>
      <HeaderLogIn firstName={firstName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back</h1>
          <UserName firstName={firstName} lastName={lastName} />
          <EditName token={token} />
        </div>
        <div className="accounts">
          <Account />
          <Account />
          <Account />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserPage;
