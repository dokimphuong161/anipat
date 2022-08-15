import React from 'react';
import { FaDog } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Heading = ({ title, heading, description, className, center, ...resProps }) => {
    return (
        <div {...resProps} className={`flex flex-col lg:items-start items-center  ${className}`}>
            <p
                className={`flex justify-center text-orange-500 uppercase text-[14px] font-bold ${
                    center ? 'justify-center mx-auto' : ''
                }`}
            >
                <span className="mr-1">
                    <FaDog />
                </span>{' '}
                {title}
            </p>
            <h1 className="heading">{heading}</h1>
            {description ? <p className="text-gray-500 mt-6">{description}</p> : <></>}
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.node,
    center: PropTypes.bool,
};

Heading.defaultProps = {
    title: '',
    heading: '',
    description: '',
    className: null,
    center: false,
};

export default Heading;
