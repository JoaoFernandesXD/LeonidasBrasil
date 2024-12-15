import '../ListConteudoYT/ListConteudoYT.css';


import '../News/News.css';
import '../HotRumors/HotRumors.css';

/* import icone */
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";


import SingleCardYT from '../SingleCardYT/SingleCardYT';

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
            <SingleCardYT titulo="GTA 6 chega em fevereiro de 2025" video="https://www.youtube.com/embed/XzxtnFezJxo?si=mjBDMvQxWoq9NhZo" categoria="Video Youtube"></SingleCardYT>
            <SingleCardYT titulo="GTA 6 chega em fevereiro de 2025" video="https://www.youtube.com/embed/g_vJU4H5WSo?si=s3pVrWStDhYLIBAx" categoria="Video Youtube"></SingleCardYT>
            <SingleCardYT titulo="GTA 6 chega em fevereiro de 2025" video="https://www.youtube.com/embed/0N-Z7SvJJ6Y?si=0XisEs77nccFknQO" categoria="Video Youtube"></SingleCardYT>
        </div>
   </section>
    )
}

export default ListConteudoYT;