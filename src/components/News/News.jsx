import '../News/News.css';
import '../HotRumors/HotRumors.css';

/* import icone */
import { RiNewsFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


import SingleCardNews from '../SingleCardNews/SingleCardNews';

function News(){
    return(
    <section className='container__hot_rumors'>
        <div className='row'></div>
        <div className='hotrumors__info'>
            <h2><RiNewsFill /> Jornal Leonidas</h2>
            <div className='hotrumors__pagination'>
                <div className='arrow--pagination'><FaArrowLeft /></div>
                <div className='arrow--pagination'><FaArrowRight /></div>
            </div>
        </div>
        <div className='container__hot__rumors_list list_news'>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="GTA 6"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://img.ibxk.com.br/2024/12/10/10104923135022.jpg" categoria="Rumores"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews>
        </div>
   </section>
    )
}

export default News;