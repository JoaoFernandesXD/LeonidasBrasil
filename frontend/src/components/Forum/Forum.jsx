import '../Forum/Forum.css';
import { RiSpeakFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Forum(){
    return(
        <>
           <div className='container__forum'>
                <div className='row'></div>
                <div className="container__forum__info">
                <h2><RiSpeakFill /> Fórum</h2>
                <div className="container__forum__pagination">
                    {/* Setas com classes específicas */}
                    <div className="arrow--pagination swiper-button-prev">
                        <FaArrowLeft />
                    </div>
                    <div className="arrow--pagination swiper-button-next">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}


export default Forum;