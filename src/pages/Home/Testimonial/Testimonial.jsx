import { FaDog } from 'react-icons/fa';
import { FiPlay } from 'react-icons/fi';
import TestimonialImg from '~/assets/images/testimonial.png';
import Button from '~/components/Button';
import { TESTIMONIALS_DATA } from '~/constants/testimonialData';
import TestimonialItem from './TestimonialItem';
import Slider from 'react-slick';
import Modal from '~/components/Modal';
import { useRef } from 'react';
import { ModalContent } from '~/components/Modal/Modal';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const renderTestimonialItem = TESTIMONIALS_DATA.map((item, index) => <TestimonialItem item={item} key={index} />);

    // Active Modal
    const setModalActive = async () => {
        const modal = document.querySelector('.modal');
        modal.querySelector('.modal-content > iframe').setAttribute('src', 'https://www.youtube.com/embed/3Bvi3hbCZMk');
        modal.classList.toggle('active');
    };
    return (
        <section className="testimonial mt-4">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-6">
                <div className="">
                    <div className="flex flex-col md:items-start items-center md:text-left text-center">
                        <p className="flex text-orange-500 uppercase text-[14px] font-bold">
                            <span className="mr-1">
                                <FaDog />
                            </span>{' '}
                            Our Testimonials
                        </p>
                        <h1 className="heading">Review from our customers</h1>
                    </div>
                    <div className="testimonial-slide">
                        <Slider {...settings}>{renderTestimonialItem}</Slider>
                    </div>
                </div>
                <div className="flex items-center md:mt-0 mt-20 relative">
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Button
                            primary
                            className="btn-play relative p-0 w-20 h-20 flex items-center justify-center"
                            onClick={setModalActive}
                        >
                            <FiPlay className="text-2xl" />
                        </Button>
                    </div>
                    <img src={TestimonialImg} />
                </div>
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
