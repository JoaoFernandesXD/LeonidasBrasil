import '../MainNav/MainNav.css'
import { IoHome } from "react-icons/io5";
import { RiNewsFill } from "react-icons/ri";
import { RiSpeakFill } from "react-icons/ri";
import { PiDevicesFill } from "react-icons/pi";
import { MdPoll } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";


function MainNav() {
    return(
        <>
            <div className='main-nav'>
                <div className='row'>
                    <ul className="d-flex">
                        <li className="nav--item">
                            <a href="/inicio"><IoHome /> Início</a>
                        </li>
                        <li className="nav--item">
                            <a href="/noticias"><RiNewsFill /> Notícias</a>
                        </li>
                        <li className="nav--item">
                            <a href="#"><RiSpeakFill /> Rumores</a>
                        </li>
                        <li className="nav--item">
                            <a href="#"><PiDevicesFill /> Plataformas</a>
                        </li>
                        <li className="nav--item">
                            <a href="#"><MdPoll /> Enquetes</a>
                        </li>
                        <li className="nav--item trigger--side-nav">
                            <a href="#"><GiHamburgerMenu /> Extras</a>
                        </li>
                    </ul>
                    <button className="nav--btn"><IoLogIn /> Login</button>
                </div>
            </div>
        </>
    )
}

export default MainNav;