import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import { motion } from 'framer-motion';
import { zoomInAndOutVariants } from '~/animations/animations';

const CounterItem = ({ item, animateCustom }) => {
    const backgroundImg = {
        backgroundImage: `url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <motion.div
            variants={zoomInAndOutVariants}
            animate={animateCustom}
            transition={{ delay: 0.01, duration: 0.4, stiffness: 5000 }}
            className="py-5 md:px-8 px-6 rounded-md text-white"
            style={backgroundImg}
        >
            <p className="md:text-4xl text-3xl font-bold">
                <CountUp end={item.endNumber} duration={5} />
                <span>+</span>
            </p>
            <p className="uppercase md:text-[16px] text-[14px] font-bold mt-3">{item.title}</p>
        </motion.div>
    );
};

CounterItem.propTypes = {
    item: PropTypes.object.isRequired,
};

CounterItem.defaultProps = {
    item: null,
};

export default CounterItem;
