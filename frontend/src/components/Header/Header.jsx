import React from 'react';

import '../Header/Header.css';
import ModalLogin from '../ModalLogin/ModalLogin';

import logo from '/src/assets/image/logo.png';


function Header(){
    
    const [open, setOpen] = React.useState(false);

    return(
        <>
        <header className='header'>
                <img src={logo} alt="Logo Leonidas Brasil"></img>
                <button className="nav--btn-mobille" onClick={() => setOpen(true)}>Login</button>
        </header>
         <ModalLogin open={open} onClose={() => setOpen(false)}></ModalLogin> 
        </>
    )
}


export default Header;