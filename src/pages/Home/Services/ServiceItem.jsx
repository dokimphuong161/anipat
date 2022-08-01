import React from 'react';
import PropTypes from 'prop-types';
import ServiceBg from '~/assets/images/service-card-bg.png';
import Button from '~/components/Button';

//Setting background for service item
const ServiceBackground = {
    backgroundImage: `url("${ServiceBg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const ServiceItem = ({ item }) => {
    return (
        <div
            className="service-item hover:scale-105 transition duration-500 text-center pb-8 px-8 pt-[105px] mb-[95px] border border-dashed border-gray-300 relative"
            style={ServiceBackground}
        >
            <div className={`service-icon ${item.bgColor} flex items-center justify-center`}>
                <img src={item.icon} className="w-20" />
            </div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-4 mb-5">{item.description}</p>
            <Button shape primary small>
                View More
            </Button>
        </div>
    );
};

ServiceItem.propTypes = {};

export default ServiceItem;
