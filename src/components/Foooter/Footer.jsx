import '../Foooter/Footer.css';

import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


function Footer(){
    return(
        <footer>
            <div className="credits">Site desenvolvido por: <strong>João Fernande</strong></div>
            <FaYoutube />
            <FaSquareXTwitter />
            <FaSquareInstagram />
        </footer>
    )
}

export default Footer;