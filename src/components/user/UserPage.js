import Footer from "../Footer";
import UserName from "./UserName";
import Account from "./Account";
import EditName from "./EditName";
import HeaderLogIn from "./HeaderLogIn";
import { useDispatch, useSelector } from "react-redux";
import { setLogInData, setToken } from "../../redux/feature/logInSlice";
import { useNavigate } from "react-router-dom";
import { loadUserInfos } from "../function/loadUserInfos";
import axios from "axios";
import { useEffect } from "react";

function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.logIn.tokenAuth);

  if(token === null)
  {
    token = localStorage.getItem('token')
    dispatch(setToken(token))
  } else {
    localStorage.setItem('token', token)
  }
    useEffect(() => {
        loadUserInfos(token, dispatch)    
    }, [])

    let datas = useSelector((state) => state.logIn.logIn)
    let firstName
    let lastName

if(datas === null || datas === undefined)
{

} else {
  firstName = datas.firstName
  lastName = datas.lastName 
}

    if (token == "") {
      navigate("/sign-in")
    
    } else
    {
  return (
    <>
      <HeaderLogIn   firstName={firstName}  />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back</h1>
          <UserName   firstName={firstName} lastName={lastName}   />
          <EditName  token={token}/>
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


}

export default UserPage;
