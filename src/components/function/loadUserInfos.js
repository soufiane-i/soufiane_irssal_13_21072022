import { setLogInData } from "../../redux/feature/logInSlice";

export function loadUserInfos(tokenData, dispatch, navigate) {
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
      if (navigate !== undefined) {
        navigate("/user");
      }
    });
}
