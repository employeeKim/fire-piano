import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../css/HeroSection.css';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

function HeroSection() {
    const slides = [slide1, slide2, slide3];

    return (
        <section className="hero-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
            >
                {slides.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="slide" style={{ backgroundImage: `url(${src})` }}>
                            <div className="slide-overlay">
                                <h1>불꽃피아노</h1>
                                <p>입시, 취미, 실용음악까지 모두 이곳에서</p>
                                <button>수업 문의하기</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default HeroSection;