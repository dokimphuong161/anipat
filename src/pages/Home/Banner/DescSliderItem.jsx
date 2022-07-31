import React from 'react';
import PropTypes from 'prop-types';

const DescSliderItem = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="banner-desc-item flex mt-8">
            <div className="banner-desc-icon pr-8 border-r border-black">
                <Icon className="w-[5.8rem]" />
            </div>
            <div className="banner-desc-content pl-6">
                <h4 className="font-extrabold text-[24px]">{item.title}</h4>
                <p className="mt-1">{item.description}</p>
            </div>
        </div>
    );
};

DescSliderItem.propTypes = {};

export default DescSliderItem;
