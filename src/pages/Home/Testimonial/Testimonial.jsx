import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiPlay } from 'react-icons/fi';
import Slider from 'react-slick';

// images
import { images } from '~/constants/images';

// hooks
import useGetData from '~/hooks/useGetData';
import { useScroll } from '~/hooks/useScroll';

// components
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Modal from '~/components/Modal';
import { ModalContent } from '~/components/Modal/Modal';
import TestimonialItem from './TestimonialItem';

// animations
import { fadeToLeftVariants, fadeToRightVariants } from '~/animations/animations';

const TestiBg = {
    backgroundImage: `url("${images.IMG_TESTIMONIAL_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Testimonial = () => {
    // Hook useScroll
    const [element, controls] = useScroll();

    // Get testimonial data
    const { data } = useGetData('testimonialsData');
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const renderTestimonialItem = data.map((item, index) => <TestimonialItem item={item} key={index} />);

    // Active Modal
    const setModalActive = async () => {
        const modal = document.querySelector('.modal');
        modal.querySelector('.modal-content > iframe').setAttribute('src', 'https://www.youtube.com/embed/3Bvi3hbCZMk');
        modal.classList.toggle('active');
    };
    return (
        <section
            ref={element}
            id="testimonials"
            className="testimonial relative pt-28 pb-28 before:content[''] before:absolute before:bg-cloud before:-top-2 before:left-0 before:right-0 before:h-[58px] after:content[''] after:absolute after:rotate-180 after:bg-cloud after:-bottom-2 after:left-0 after:right-0 after:h-[58px]"
            style={TestiBg}
        >
            <div className="container mx-auto grid lg:grid-cols-2 lg:gap-8 grid-cols-1">
                <motion.div
                    variants={fadeToLeftVariants}
                    animate={controls}
                    transition={{ delay: 0.03, duration: 0.4, type: 'tween' }}
                    className=""
                >
                    <Heading
                        className="lg:text-left text-center"
                        title={'OUR TESTIMONIALS'}
                        heading={'Review from our customers'}
                    />
                    <div className="testimonial-slide mt-6">
                        <Slider {...settings}>{renderTestimonialItem}</Slider>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeToRightVariants}
                    animate={controls}
                    transition={{ delay: 0.03, duration: 0.4, type: 'tween' }}
                    className="flex items-center lg:mt-0 mt-20 relative"
                >
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Button
                            primary
                            className="btn-play relative p-0 w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center"
                            onClick={setModalActive}
                        >
                            <FiPlay className="text-xl sm:text-2xl" />
                        </Button>
                    </div>
                    <img src={images.IMG_TESTIMONIAL} />
                </motion.div>
                <VideoIntroModal />
            </div>
        </section>
    );
};

const VideoIntroModal = () => {
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src', '');
    return (
        <Modal active={false}>
            <ModalContent onClose={onClose}>
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height="500px"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </ModalContent>
        </Modal>
    );
};

export default Testimonial;
