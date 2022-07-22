
function UserName()
{
    return(
        <>
        <div className='userName'>
          <h1>Tony Jarvis!</h1>
          <button class="edit-button" onClick={EditNameButton}>Edit Name</button>
        </div>
        </>
    )

}

export default UserName

function EditNameButton()
{
  const userName = document.querySelector('.userName');
  const editForm = document.querySelector('.form-editName');
  editForm.classList.remove('close')
  userName.classList.add('close')
}