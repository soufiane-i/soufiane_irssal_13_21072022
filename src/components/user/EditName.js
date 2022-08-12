import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLogInData, setLastName } from "../../redux/feature/logInSlice";


function EditName(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useRef("");
  const lastName = useRef("");
  const token = props.token


  const handlerEdit = async (e) => {
    e.preventDefault()
    const form = document.querySelector('.form-editName')
    const userName = document.querySelector('.userName')
    form.classList.add('close')
    userName.classList.remove('close')
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: props.token,
      },
      body: JSON.stringify({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      }),
    })
    dispatch(setFirstName(firstName.current.value))
    dispatch(setLastName(lastName.current.value))






  };
  return (
    <form className="form-editName close" onSubmit={(e) => handlerEdit(e)}>
      <div className="inputs">
        <input
          type="text"
          name="firstName"
          placeholder="Tony"
          className="input-name"
          ref={firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Jarvis"
          className="input-name"
          ref={lastName}
        />
      </div>
      <div className="buttons">
        <input type="submit" value="Save" />
        <input type="submit" value="Cancel" className="cancel" />
      </div>
    </form>
  );
}

export default EditName;

function cancelClick(e) {
  e.preventDefault();
  const formEdit = document.querySelector(".form-editName");
  const userName = document.querySelector(".userName");

  formEdit.classList.add("close");
  userName.classList.remove("close");
}
