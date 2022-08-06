import React from 'react';
import Slider from 'react-slick';
import { BRANDS } from '~/constants/brands';
import { FaDog } from 'react-icons/fa';

const Company = () => {
    // Setting slick slider

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
        ],
    };
    return (
        <section className="company mb-20 mt-20">
            <div className="container mx-auto">
                <p className="flex justify-center mb-8 text-orange-500 uppercase text-[14px] font-bold">
                    <span className="mr-1">
                        <FaDog />
                    </span>{' '}
                    Trusted by companies like
                </p>
                <div className="company-list">
                    <Slider {...settings}>
                        {BRANDS.map((brand, i) => (
                            <div className="company-item">
                                <img src={brand} key={i} className="md:h-[70px] h-[60px]  mx-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Company;
