import { FaDog } from 'react-icons/fa';
import Slider from 'react-slick';

import { motion } from 'framer-motion';

// hooks
import { useScroll } from '~/hooks/useScroll';
import useGetData from '~/hooks/useGetData';
import { fadeUpVariants } from '~/animations/animations';

const Company = () => {
    // Hook useScroll
    const [element, controls] = useScroll();

    // Get brands data
    const { data } = useGetData('brandsData');

    // Setting slick slider
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <section className="company mt-10 mb-10" ref={element}>
            <motion.div
                variants={fadeUpVariants}
                animate={controls}
                transition={{ delay: 0.2, type: 'tween', duration: 0.6 }}
                className="container mx-auto"
            >
                <p className="flex justify-center mb-8 text-orange-500 uppercase text-[14px] font-bold">
                    <span className="mr-1">
                        <FaDog />
                    </span>{' '}
                    Trusted by companies like
                </p>
                <div className="company-list">
                    <Slider {...settings}>
                        {data.map((brand, i) => (
                            <div className="company-item">
                                <img src={brand} key={i} className="md:h-[70px] h-[65px]  mx-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
        </section>
    );
};

export default Company;
