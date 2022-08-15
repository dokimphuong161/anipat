import { motion } from 'framer-motion';
import { FaDog } from 'react-icons/fa';

// images
import { images } from '~/constants/images';

// hooks
import { zoomInAndOutVariants } from '~/animations/animations';
import { useScroll } from '~/hooks/useScroll';

const GalleryBg = {
    backgroundImage: `url("${images.IMG_ABOUT_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Gallery = () => {
    // Hook useScroll
    const [element, controls] = useScroll();
    return (
        <section
            ref={element}
            className="gallery relative md:mt-16 mt-14 pt-20 pb-20 before:content[''] before:absolute before:bg-wave before:top-0 before:left-0 before:right-0 before:h-[24px] after:content[''] after:absolute after:rotate-180 after:bg-wave after:bottom-0 after:left-0 after:right-0 after:h-[24px]"
            style={GalleryBg}
        >
            <div className="container mx-auto">
                <div className="section-heading md:text-left text-center mx-auto ">
                    <p className="flex md:justify-start justify-center  text-orange-500 uppercase text-[14px] font-bold">
                        <span className="mr-1">
                            <FaDog />
                        </span>{' '}
                        Our gallery
                    </p>
                    <h1 className="heading">Looking & Smelling</h1>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-4 md:-mt-10 mt-6">
                    <div className="grid-rows-2 md:mt-44 mt-0">
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.02, duration: 0.3, type: 'tween' }}
                            src={images.IMG_GALLERY1}
                        />
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            className="md:mt-5 mt-4"
                            src={images.IMG_GALLERY5}
                        />
                    </div>
                    <div className="grid-rows-2 md:mt-28 mt-0">
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            src={images.IMG_GALLERY2}
                        />
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            className="md:mt-5 mt-4"
                            src={images.IMG_GALLERY6}
                        />
                    </div>
                    <div className="grid-rows-2 md:mt-12 mt-0">
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            src={images.IMG_GALLERY3}
                        />
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            className="md:mt-5 mt-4"
                            src={images.IMG_GALLERY7}
                        />
                    </div>
                    <div className="grid-rows-2">
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                            src={images.IMG_GALLERY4}
                        />
                        <motion.img
                            variants={zoomInAndOutVariants}
                            animate={controls}
                            transition={{ delay: 0.03, duration: 0.2, type: 'tween' }}
                            className="md:mt-5 mt-4"
                            src={images.IMG_GALLERY8}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Gallery;
