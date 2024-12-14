import './Footer.css';

import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


function Footer(){
    return(
        <footer>
            <div className="credits">Site desenvolvido por: <strong>João Fernande</strong></div>
           <div className='container__footer'>
            <div className='container__medias_sociais'>
                <p>Siga-nos em nossas redes sociais!</p>
                <FaYoutube />
                <FaSquareXTwitter />
                <FaSquareInstagram />
            </div>
            <p className="copyright">Copyright © Todos os direitos reservados. Leonidas Brasil 2024.</p>
            <p className="rockstargames">
            Este portal não possui qualquer vínculo com a Rockstar Games ou suas empresas afiliadas.  
Trata-se de um projeto totalmente independente, sem patrocínio, apoio ou aprovação oficial por parte da Rockstar Games.  
Eventuais marcas registradas ou propriedades intelectuais mencionadas pertencem à Rockstar Games e são utilizadas conforme permitido por sua política de fã sites. v1.0
                 
            </p>
           </div>
        </footer>
    )
}

export default Footer;