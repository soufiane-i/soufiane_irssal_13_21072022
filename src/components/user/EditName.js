function EditName()
{
    return(
        <form className='form-editName close'>
            <div className='inputs'>
                <input type="text" name="firstName" placeholder='Tony' className='input-name'/>
                <input type="text" name="lastName" placeholder='Jarvis' className='input-name'/>
            </div>
            <div className='buttons'>
                <input type="submit" value="Save" />
                <input type="submit" value="Cancel" className='cancel' onClick={cancelClick}/>
            </div>
        </form>
    )
}

export default EditName

function cancelClick(e)
{
    e.preventDefault();
    const formEdit = document.querySelector('.form-editName');
    const userName = document.querySelector('.userName');

    formEdit.classList.add('close');
    userName.classList.remove('close');

}