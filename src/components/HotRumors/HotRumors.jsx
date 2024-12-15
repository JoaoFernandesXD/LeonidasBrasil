import '../HotRumors/HotRumors.css';

import { RiSpeakFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
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
       </section>
    )
}


export default HotRumors;