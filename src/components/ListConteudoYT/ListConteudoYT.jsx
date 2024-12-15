import '../ListConteudoYT/ListConteudoYT.css';


import '../News/News.css';
import '../HotRumors/HotRumors.css';

/* import CSS do Swiper */
import "swiper/css";

/* import Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";// Importação do módulo Navigation


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
                    <div className="arrow--pagination swiper-button-prev-yt">
                        <FaArrowLeft />
                    </div>
                    <div className="arrow--pagination swiper-button-next-yt">
                        <FaArrowRight />
                    </div>
            </div>
        </div>
        <Swiper
                modules={[Navigation]} // Adiciona o módulo Navigation
                navigation={{ // Configura os botões de navegação
                    nextEl: ".swiper-button-next-yt",
                    prevEl: ".swiper-button-prev-yt",
                }}
                watchSlidesProgress={true}
                slidesPerView={3} // Exibe 3 slides por linha
                
                className="container__hot__rumors_list list_news"
            >
             <SwiperSlide><SingleCardYT titulo="GTA 6 de ANIMES" video="https://www.youtube.com/embed/T6Vx_BxNWkY?si=zs_xKPXeIztUOhFc" categoria="Video Youtube"></SingleCardYT></SwiperSlide>
             <SwiperSlide><SingleCardYT titulo="A VOLTA do Igor 3k pro GTA 6" video="https://www.youtube.com/embed/U63Np0Tu91c?si=r6zUBaZ0eqi-DzpX" categoria="Video Youtube"></SingleCardYT></SwiperSlide>
             <SwiperSlide><SingleCardYT titulo="DECEPÇÃO! GTA 6 GANHA o PRÊMIO no..." video="https://www.youtube.com/embed/0N-Z7SvJJ6Y?si=0XisEs77nccFknQO" categoria="Video Youtube"></SingleCardYT></SwiperSlide>
             <SwiperSlide><SingleCardYT titulo="LANÇOU o GTA 6 de LEGO!!! (É sério)" video="https://www.youtube.com/embed/cSmfV6M5rgE?si=i3_c7XDJGZMEbeRK" categoria="Video Youtube"></SingleCardYT></SwiperSlide>
             <SwiperSlide><SingleCardYT titulo="A REAL sobre GTA 6 [Cellbit]" video="https://www.youtube.com/embed/g_vJU4H5WSo?si=s3pVrWStDhYLIBAx" categoria="Video Youtube"></SingleCardYT></SwiperSlide>
        </Swiper>
   </section>
    )
}

export default ListConteudoYT;