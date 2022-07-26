function UserName(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;
  return (
    <>
      <div className="userName">
        <h1>
          {firstName} {lastName} !
        </h1>
        <button className="edit-button" onClick={EditNameButton}>
          Edit Name
        </button>
      </div>
    </>
  );
}

export default UserName;

function EditNameButton() {
  const userName = document.querySelector(".userName");
  const editForm = document.querySelector(".form-editName");
  editForm.classList.remove("close");
  userName.classList.add("close");
}
