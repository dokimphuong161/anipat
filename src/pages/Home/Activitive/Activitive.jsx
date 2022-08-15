import { motion } from 'framer-motion';
// images
import { images } from '~/constants/images';

// components
import Counter from '~/components/Counter';
import Heading from '~/components/Heading';

// hooks
import { useScroll } from '~/hooks/useScroll';
import { fadeToLeftVariants, fadeToRightVariants } from '~/animations/animations';

// Setting background
const ActivitiveBg = {
    backgroundImage: `url("${images.IMG_ACTIVITIVE_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Activitive = () => {
    // Hook useScroll
    const [element, controls] = useScroll();
    return (
        <section
            ref={element}
            className="activitive md:pt-20 md:pb-20 pt-12 pb-16 relative md:mt-20 mt-16 before:content[''] before:absolute before:bg-wave before:top-0 before:left-0 before:right-0 before:h-[24px] after:content[''] after:absolute after:rotate-180 after:bg-wave after:bottom-0 after:left-0 after:right-0 after:h-[24px]"
            id="activitives"
            style={ActivitiveBg}
        >
            <div className="container mx-auto grid lg:grid-cols-2 lg:gap-8 grid-cols-1">
                <motion.div
                    variants={fadeToLeftVariants}
                    animate={controls}
                    transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
                    className="flex items-center mx-auto lg:mt-0 mt-4"
                >
                    <img src={images.IMG_ACTIVITIVE} />
                </motion.div>
                <motion.div
                    variants={fadeToRightVariants}
                    animate={controls}
                    transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
                    className="lg:mt-0 mt-10"
                >
                    <Heading
                        className="lg:text-left text-center"
                        title={'About pawsitive'}
                        heading={'We keep them happy'}
                        description={
                            'Our staff spends time interacting with and monitoring the pets to ensure their safety and happiness while they are with us'
                        }
                    />

                    <div className="my-6" ref={element} animateCustom={controls}>
                        <Counter />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Activitive;
