import React from 'react';
import PropTypes from 'prop-types';
import { TiStarFullOutline } from 'react-icons/ti';

const TestimonialItem = ({ item }) => {
    return (
        <div>
            <div className="flex items-center mt-6">
                <div className="relative w-36 h-36">
                    <span className="absolute w-full h-full rounded-full -z-10 bg-orange-400"></span>
                    <img src={item.image} className="w-32 rounded-full border-[8px] border-white" />
                </div>
                <div className="ml-8">
                    <ul className="flex">
                        <li className="text-yellow-500">
                            <TiStarFullOutline />
                        </li>
                        <li className="text-yellow-500">
                            <TiStarFullOutline />
                        </li>
                        <li className="text-yellow-500">
                            <TiStarFullOutline />
                        </li>
                        <li className="text-yellow-500">
                            <TiStarFullOutline />
                        </li>
                        <li className="text-yellow-500">
                            <TiStarFullOutline />
                        </li>
                    </ul>
                    <p className="text-[20px] font-semibold">{item.customer}</p>
                    <p className="text-lime-600 font-bold">{item.job}</p>
                </div>
            </div>
            <p className="testimonial-review text-gray-700 mt-6">{item.review}</p>
        </div>
    );
};

TestimonialItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default TestimonialItem;
