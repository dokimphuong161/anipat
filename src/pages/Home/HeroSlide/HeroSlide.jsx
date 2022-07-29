import React from 'react';
import PropTypes from 'prop-types';
import { HERO_SLIDES } from '~/constants/heroSlide';
import heroBg from '~/assets/images/hero-slide.png';
import HeroSlideItem from './HeroSlideItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
const HeroSlide = (props) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
    };
    return (
        <section className="md:h-[650px] h-[500pxz] md:py-0 py-12  flex md:items-center" style={backgroundImageStyle}>
            <Swiper
                className="hero-slider"
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
            >
                {HERO_SLIDES.map((item) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <HeroSlideItem item={item} key={item.id} className={isActive ? 'active' : ''} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

HeroSlide.propTypes = {};

export default HeroSlide;
