import '../MainNav/MainNav.css'
import { IoHome } from "react-icons/io5";
import { RiNewsFill } from "react-icons/ri";
import { RiSpeakFill } from "react-icons/ri";
import { PiDevicesFill } from "react-icons/pi";
import { MdPoll } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";


import ModalOn from '../Modal/Modal';
import React, { useState } from 'react';

function MainNav() {

    const [open, setOpen] = useState(false);

    return(
     
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
                <ModalOn open={open} onClose={() => setOpen(false)}>
                    <div className="modal-content">
                        <h2>Olá, seja bem vindo(a)!</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="username">Usuário</label>
                                <input type="text" id="username" name="username" placeholder="Digite seu usuário" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                            </div>
                            <button type="submit" className="submit-btn">Entrar</button>
                        </form>
                        <div className="form-links">
                            <a href="#" className="forgot-password">Esqueceu a senha?</a>
                            <a href="#" className="register-link">Novo usuário? Cadastre-se!</a>
                        </div>
                    </div>
                </ModalOn>

            </div>      
    )
}

export default MainNav;