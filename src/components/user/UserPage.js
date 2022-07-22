import Header from '../Header'
import Footer from '../Footer'
import UserName from './UserName'
import Account from './Account'
import EditName from './EditName'

function UserPage()
{
    return(
        <>
        <Header/>
        <main class="main bg-dark">
        <div className='header'>
            <h1>Welcome back</h1>
            <UserName/>
            <EditName/>
        </div>
        
            
            
            <div className='accounts'>
                <Account/>
                <Account/>
                <Account/>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default UserPage