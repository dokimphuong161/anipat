import { motion } from 'framer-motion';

// hooks
import useGetData from '~/hooks/useGetData';
import { useScroll } from '~/hooks/useScroll';

// images
import { images } from '~/constants/images';

// components
import Accordion from '~/components/Accordion';
import Button from '~/components/Button';
import Heading from '~/components/Heading';

// animations
import { hideAndShowVariants } from '~/animations/animations';

const AboutBg = {
    backgroundImage: `url("${images.IMG_ABOUT_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const About = () => {
    // useScroll hooks for animation when scroll
    const [element, controls] = useScroll();
    // Get about data
    const { data } = useGetData('aboutData');
    return (
        <section
            className="about lg:pt-24 pt-14 pb-12 lg:mt-16 mt-8 relative before:content[''] before:absolute before:bg-wave before:top-0 before:left-0 before:right-0 before:h-[24px]"
            id="about"
            style={AboutBg}
            ref={element}
        >
            <motion.div
                variants={hideAndShowVariants}
                animate={controls}
                transition={{ delay: 0.03, type: 'tween', duration: 0.8 }}
                className="container mx-auto grid lg:grid-cols-2 lg:gap-8 grid-cols-1"
            >
                <div className="flex items-center md:mt-0 mt-4">
                    <img src={images.IMG_ABOUT} />
                </div>
                <div className="lg:mt-0 mt-10">
                    <Heading
                        className="lg:text-left text-center"
                        title={'About pawsitive'}
                        heading={'We keep them happy'}
                        description={
                            'Our staff spends time interacting with and monitoring the pets to ensure their safety and happiness while they are with us'
                        }
                    />
                    <div className="my-6">
                        <Accordion items={data} />
                    </div>

                    <Button primary shape>
                        Discover more
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
