import '../Header/Header.css';

import logo from '/src/assets/image/logo.png';

function Header(){
    return(
        <header className='header'>
            <div className='container__usuario_logado'>
                 <div className='container__usuario_logado_botao'>
                    <button class="botao">Botão 1</button>
                    <button class="botao">Botão 2</button>

                 </div>
                 <img src={logo}></img>
                 <div className='container__usuario_logado_botao'>
                    <button class="botao">Botão 1</button>
                    <button class="botao">Botão 2</button>
                 </div>
            </div> 
        </header>
    )
}


export default Header;