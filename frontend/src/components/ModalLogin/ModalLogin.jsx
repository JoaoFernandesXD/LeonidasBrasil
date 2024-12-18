import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 
import './ModalLogin.css'; 


import { BiSolidLogInCircle } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";

function ModalLogin({ open, onClose}) {

    return (
        <Modal
            open={open}
            onClose={onClose}
            center
            classNames={{ overlay: 'customOverlay', modal: 'customModal' }}
        >
        <div className="modal-content">
            <div className='container__modal_login'>
                <div className='container__modal_login_imagem'></div>
                <div className='container__modal__form'>
                    <div className='container_direita'>
                        <label>Bem-vindo(a) a Leonidas Brasil</label>
                        <span>Logue ou registre-se</span>
                        <div className='boxLogin-Registro'>
                        <form>
                            <label class="form-label">Usuário</label>
                            <input type="text" placeholder="Digite usuario ou e-mail"></input>
                            <input type="password" placeholder="Digite sua senha"></input>
                            <div className='container__form__button'>
                                <button>Entrar <BiSolidLogInCircle /></button>
                                <button>Novo usuário? Cadastre-se! <FaUserPlus /></button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
    );
}

export default ModalLogin;
