import { useDispatch } from 'react-redux'
import { authentification } from '../../redux'
import { useState } from 'react'
function SignIn(props) {
  const [user, setUser] = useState({ email: '', password: '' })
  const dispatch = useDispatch()



  return(
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={user} onChange={(e) => setUser(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {/* <button className="sign-in-button">Sign In</button> */}
          <a className="sign-in-button" href='/user' >Sign In</a>
        </form>
      </section>
    </main>
  )
}
export default SignIn


