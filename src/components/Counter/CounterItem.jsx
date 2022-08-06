import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const CounterItem = ({ item }) => {
    const backgroundImg = {
        backgroundImage: `url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="py-5 px-8 rounded-md text-white" style={backgroundImg}>
            <p className="text-4xl font-bold">
                <CountUp end={item.endNumber} duration={5} />
                <span>+</span>
            </p>
            <p className="uppercase font-bold mt-3">{item.title}</p>
        </div>
    );
};

CounterItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CounterItem;
