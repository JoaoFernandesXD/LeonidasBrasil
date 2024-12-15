import '../ListConteudoYT/ListConteudoYT.css';


import '../News/News.css';
import '../HotRumors/HotRumors.css';

/* import icone */
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";


import SingleCardNews from '../SingleCardNews/SingleCardNews';

function ListConteudoYT(){
    return(
        <section className='container__hot_rumors'>
        <div className='row'></div>
        <div className='hotrumors__info'>
            <h2><FaVideo /> Conteúdo da comunidade</h2>
            <div className='hotrumors__pagination'>
                <div className='arrow--pagination'><FaArrowLeft /></div>
                <div className='arrow--pagination'><FaArrowRight /></div>
            </div>
        </div>
        <div className='container__hot__rumors_list list_news'>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Video Youtube"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://img.ibxk.com.br/2024/12/10/10104923135022.jpg" categoria="Video Youtube"></SingleCardNews>
            <SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Video Youtube"></SingleCardNews>
        </div>
   </section>
    )
}

export default ListConteudoYT;