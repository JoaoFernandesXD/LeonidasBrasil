import 'swiper/css';

/* modulos swiper import */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar, A11y } from 'swiper/modules';



import '../Slide/Slide.css';

function Slide(){
    return(

        <div className='container_slide'>
            <Swiper spaceBetween={50} slidesPerView={1} loop={true} autoplay={{delay: 9000, disableOnInteraction: false, }} modules={[Autoplay, Navigation]}>
                <SwiperSlide>
                    <div className='container__conteudo'>
                        <img src='https://www.gtavice.net/content/images/golden-joystick-awards-winner-gta-vi-most-wanted-game.jpeg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container__conteudo'>
                        <img src='https://styles.redditmedia.com/t5_2v07v/styles/bannerBackgroundImage_k7167dntgvfd1.png?width=1448&frame=1&auto=webp&s=5582ba72a359856c3757bc2edcec1b333831c852'></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        
       
    )
}


export default Slide;