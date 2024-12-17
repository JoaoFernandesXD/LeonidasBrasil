import '../News/News.css';
import '../HotRumors/HotRumors.css';

/* import CSS do Swiper */
import "swiper/css";

/* import Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";// Importação do módulo Navigation


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
            <div className="hotrumors__pagination">
                
                    <div className="arrow--pagination swiper-button-prev-news">
                        <FaArrowLeft />
                    </div>
                    <div className="arrow--pagination swiper-button-next-news">
                        <FaArrowRight />
                    </div>
            </div>
        </div>

        <Swiper
                modules={[Navigation]} // Adiciona o módulo Navigation
                navigation={{ // Configura os botões de navegação
                    nextEl: ".swiper-button-next-news",
                    prevEl: ".swiper-button-prev-news",
                }}
                watchSlidesProgress={true}
                slidesPerView={3} // Exibe 3 slides por linha
                breakpoints={{
                    100: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="container__hot__rumors_list list_news"
            >
            <SwiperSlide><SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="GTA 6"></SingleCardNews></SwiperSlide>
            <SwiperSlide><SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://img.ibxk.com.br/2024/12/10/10104923135022.jpg" categoria="Rumores"></SingleCardNews></SwiperSlide>
            <SwiperSlide><SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews></SwiperSlide>
            <SwiperSlide><SingleCardNews titulo="GTA 6 chega em fevereiro de 2025" image="https://t2.tudocdn.net/734023" categoria="Rumores"></SingleCardNews></SwiperSlide>
        </Swiper>
   </section>
    )
}

export default News;