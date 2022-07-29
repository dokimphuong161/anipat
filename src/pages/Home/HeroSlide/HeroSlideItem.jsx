import React from 'react';
import PropTypes from 'prop-types';
import { MdTitle } from 'react-icons/md';
import Button from '~/components/Button';

const HeroSlideItem = ({ item }) => {
    return (
        <div className="container mx-auto px-12 h-full flex items-center justify-between">
            <div className="hero-info md:w-2/4 w-full">
                <h3 className="md:text-[75px] md:leading-[85px] text-[50px] leading-[60px]  font-extralight text-white ">
                    {item.title} <br /> <span className="font-extrabold">{item.subtitle}</span>
                </h3>
                <p className="px-2 mt-6 mb-8 text-white sm:text-base text-sm">{item.description}</p>
                <div className="z-10">
                    <Button info>Contact Us</Button>
                </div>
            </div>
            <div className="hero-img md:block hidden">
                <img className="" src={item.image.type} />
            </div>
        </div>
    );
};

HeroSlideItem.propTypes = {};

export default HeroSlideItem;
