import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import HomePage from './components/home/HomePage'
import SignInPage from './components/signIn/SignInPage'
import UserPage from './components/user/UserPage'




export default function Router() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sign-in' element={<SignInPage/>} />
                <Route path='/user' element={<UserPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}