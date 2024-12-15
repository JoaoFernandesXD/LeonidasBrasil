/* import css componete */
import '../HotRumors/HotRumors.css';


/* import icone */
import { RiSpeakFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


/* import componetes */
import SingleCardNews from '../SingleCardNews/SingleCardNews';



function HotRumors(){
    return(
       <section className='container__hot_rumors'>
            <div className='row'></div>
            <div className='hotrumors__info'>
                <h2><RiSpeakFill /> Rumores</h2>
                <div className='hotrumors__pagination'>
                    <div className='arrow--pagination'><FaArrowLeft /></div>
                    <div className='arrow--pagination'><FaArrowRight /></div>
                </div>
            </div>
            <div className='container__hot__rumors_list'>
                <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
                <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
                <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
            </div>
       </section>
    )
}


export default HotRumors;