import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ value }) => {
    return (
        <ul className="flex">
            <li className="rating-start text-yellow-500">
                {value >= 1 ? <BsStarFill /> : value >= 0.5 ? <BsStarHalf /> : <BsStar />}
            </li>
            <li className="rating-start text-yellow-500">
                {value >= 2 ? <BsStarFill /> : value >= 1.5 ? <BsStarHalf /> : <BsStar />}
            </li>
            <li className="rating-start text-yellow-500">
                {value >= 3 ? <BsStarFill /> : value >= 2.5 ? <BsStarHalf /> : <BsStar />}
            </li>
            <li className="rating-start text-yellow-500">
                {value >= 4 ? <BsStarFill /> : value >= 3.5 ? <BsStarHalf /> : <BsStar />}
            </li>
            <li className="rating-start text-yellow-500">
                {value >= 5 ? <BsStarFill /> : value >= 4.5 ? <BsStarHalf /> : <BsStar />}
            </li>
        </ul>
    );
};

Rating.propTypes = {
    value: PropTypes.number,
};

Rating.defaultProps = {
    value: 0,
};

export default Rating;
