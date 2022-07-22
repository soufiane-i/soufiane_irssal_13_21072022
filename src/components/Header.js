function Header()
{
    return(
        <>

            <header class="main-nav">
                <a class="main-nav-logo" href="./">
                    <img
                    class="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href="./sign-in">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header