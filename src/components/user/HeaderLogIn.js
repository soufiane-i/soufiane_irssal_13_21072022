import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogInData, setToken } from "../../redux/feature/logInSlice";
function HeaderLogIn(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logOut() {
    localStorage.setItem('token', "")
    dispatch(setToken(null))
    dispatch(setLogInData(null))
    navigate("/");
  }
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-items">
        <div className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>{props.firstName}</p>
        </div>
        <div className="main-nav-item" onClick={logOut}>
          <i className="fa fa-sign-out"></i>
          <p>Sign Out</p>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLogIn;
