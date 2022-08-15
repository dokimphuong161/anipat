import { motion } from 'framer-motion';
import { FaDog } from 'react-icons/fa';

// images
import { images } from '~/constants/images';

// components
import BookingForm from './BookingForm';

// hooks
import { fadeToLeftVariants, fadeUpVariants } from '~/animations/animations';
import { useScroll } from '~/hooks/useScroll';

const formBg = {
    backgroundImage: `url("${images.IMG_BOOKING_FORM_BG}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const Booking = () => {
    // Hook useScroll
    const [element, controls] = useScroll();
    return (
        <section
            ref={element}
            className="relative before:content[''] before:-z-30 before:absolute before:bg-line md:before:rotate-45 before:bg-no-repeat before:-top-10 before:left-0 before:right-0 before:h-full"
            id="booking"
        >
            <div className="absolute left-20 -bottom-12 -z-10">
                <img src={images.IMG_SHAPE_CAT} className="w-32" />
            </div>
            <div className="absolute md:block hidden right-4 bottom-10 -z-10">
                <img src={images.IMG_SHAPE_DOG} className="w-32" />
            </div>
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1">
                <div className="flex items-center sm:mt-44 lg:mt-0 md:mb-0 mt-32 mb-28 relative lg:w-[120%] lg:-ml-[120px] w-full ml-0">
                    <motion.div
                        variants={fadeToLeftVariants}
                        animate={controls}
                        className="absolute z-1 rounded-br-3xl"
                    >
                        <img src={images.IMG_BOOKING1} className="rounded-br-[40px]" />
                    </motion.div>
                    <motion.div variants={fadeToLeftVariants} animate={controls} className="absolute z-2">
                        <img src={images.IMG_BOOKING2} />
                    </motion.div>
                    <motion.div
                        variants={fadeToLeftVariants}
                        transition={{ delay: 0.3, type: 'spring' }}
                        animate={controls}
                        className="absolute z-3"
                    >
                        <img src={images.IMG_BOOKING3} />
                    </motion.div>
                    <motion.div
                        variants={fadeToLeftVariants}
                        animate={controls}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="absolute z-4"
                    >
                        <img src={images.IMG_BOOKING4} />
                    </motion.div>
                </div>
                <div className="mt-16 sm:mt-32">
                    <motion.div
                        variants={fadeUpVariants}
                        transition={{ delay: 0.3, duration: 0.3, type: 'tween' }}
                        animate={controls}
                        className="form py-10 md:px-12 px-5 rounded-2xl shadow-large border border-dashed border-primary-300"
                        style={formBg}
                    >
                        <p className="flex justify-center text-orange-500 uppercase text-[14px] font-bold">
                            <span className="mr-1">
                                <FaDog />
                            </span>{' '}
                            Booking now
                        </p>
                        <BookingForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
