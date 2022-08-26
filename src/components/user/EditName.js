import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../../redux/feature/logInSlice";

function EditName(props) {
  const dispatch = useDispatch();
  const firstName = useRef("");
  const lastName = useRef("");

  const handlerEdit = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".form-editName");
    const userName = document.querySelector(".userName");
    const names = document.querySelectorAll(".input-name");

    if (names[0].value === "" || names[1].value === "") {
    } else {
      form.classList.add("close");
      userName.classList.remove("close");
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
        body: JSON.stringify({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
        }),
      });
      dispatch(setFirstName(firstName.current.value));
      dispatch(setLastName(lastName.current.value));
      names[0].value = "";
      names[1].value = "";
    }
  };
  return (
    <form className="form-editName close" onSubmit={(e) => handlerEdit(e)}>
      <div className="inputs">
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          className="input-name"
          minLength={2}
          ref={firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          className="input-name"
          minLength={2}
          ref={lastName}
        />
      </div>
      <div className="buttons">
        <input type="submit" value="Save" />
        <input
          type="submit"
          value="cancel"
          className="cancel"
          onClick={cancelClick}
        />
      </div>
    </form>
  );
}

export default EditName;

function cancelClick(e) {
  const names = document.querySelectorAll(".input-name");

  e.preventDefault();
  const formEdit = document.querySelector(".form-editName");
  const userName = document.querySelector(".userName");

  formEdit.classList.add("close");
  userName.classList.remove("close");

  names[0].value = "";
  names[1].value = "";
}
