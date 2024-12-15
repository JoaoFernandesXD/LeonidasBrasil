/* import CSS do Swiper */
import "swiper/css";

/* import outros CSS e componentes */
import '../HotRumors/HotRumors.css';
import { RiSpeakFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* import Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";// Importação do módulo Navigation

/* import seu componente de notícias */
import SingleCardNews from '../SingleCardNews/SingleCardNews';

function HotRumors() {
    return (
        <section className="container__hot_rumors">
            <div className="row"></div>
            <div className="hotrumors__info">
                <h2><RiSpeakFill /> Rumores</h2>
                <div className="hotrumors__pagination">
                    {/* Setas com classes específicas */}
                    <div className="arrow--pagination swiper-button-prev">
                        <FaArrowLeft />
                    </div>
                    <div className="arrow--pagination swiper-button-next">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Navigation]} // Adiciona o módulo Navigation
                navigation={{ // Configura os botões de navegação
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                watchSlidesProgress={true}
                slidesPerView={3}
                className="container__hot__rumors_list"
            >
                {/* Seus slides */}
                <SwiperSlide>
                    <SingleCardNews
                        titulo="GTA 6 chega em fevereiro de 2025"
                        image="https://t2.tudocdn.net/734023"
                        categoria="Rumores"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleCardNews
                        titulo="GTA 6 chega em fevereiro de 2025"
                        image="https://t2.tudocdn.net/734023"
                        categoria="Rumores"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleCardNews
                        titulo="GTA 6 chega em fevereiro de 2025"
                        image="https://t2.tudocdn.net/734023"
                        categoria="Rumores"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleCardNews
                        titulo="GTA 6 chega em fevereiro de 2025"
                        image="https://t2.tudocdn.net/734023"
                        categoria="Rumores"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default HotRumors;
