import '../MainNav/MainNav.css'
import { IoHome } from "react-icons/io5";
import { RiNewsFill } from "react-icons/ri";
import { RiSpeakFill } from "react-icons/ri";
import { PiDevicesFill } from "react-icons/pi";
import { MdPoll } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

import React from 'react';
import 'react-responsive-modal/styles.css'; 
import ModalLogin from '../ModalLogin/ModalLogin';


function MainNav() {

    const [open, setOpen] = React.useState(false);

    return(
            <>
            <div className='main-nav'>
                <div className='row'>
                <ul className="d-flex">
                    <a href="/inicio"><li className="nav--item"><IoHome /> Início</li></a>
                    <a href="/noticias"><li className="nav--item"><RiNewsFill /> Noticias</li></a>
                    <a href="#"><li className="nav--item"><RiSpeakFill /> Rumores</li></a>
                    <a href="#"><li className="nav--item"><PiDevicesFill /> Plataformas </li></a>
                    <a href="#"><li className="nav--item"><MdPoll /> Enquetes</li></a>
                    <a className="trigger--side-nav"><li className="nav--item"><GiHamburgerMenu /> Extras</li></a>
                    <button className="nav--btn" onClick={() => setOpen(true)}><IoLogIn /> Login</button>
                </ul>
                </div>
            </div>     
            <ModalLogin open={open} onClose={() => setOpen(false)}></ModalLogin> 
            </>
    )
}

export default MainNav;