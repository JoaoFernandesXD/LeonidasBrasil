import '../Header/Header.css';

import logo from '/src/assets/image/logo.png';

function Header(){
    return(
        <header className='header'>
                <img src={logo} alt="Logo Leonidas Brasil"></img>
        </header>
    )
}


export default Header;