import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

// images
import { images } from '~/constants/images';

const BannerRating = () => {
    return (
        <div className="banner-review shadow-large w-[250px] bg-white absolute border border-primary-900 border-dashed right-20 bottom-[20%] p-4 rounded-2xl xl:w-[300px] xl:p-6 xl:bottom-10">
            <div className="flex items-center gap-x-4">
                <img className="w-14 rounded-full" src={images.IMG_PERSON} alt="Person" />
                <div>
                    <p className="mb-2 text-sm lg:text-base">Emma Passman</p>
                    <ul className="flex">
                        <li className="star">
                            <TiStarFullOutline />
                        </li>
                        <li className="star">
                            <TiStarFullOutline />
                        </li>
                        <li className="star">
                            <TiStarFullOutline />
                        </li>
                        <li className="star">
                            <TiStarFullOutline />
                        </li>
                        <li className="star">
                            <TiStarFullOutline />
                        </li>
                    </ul>
                </div>
            </div>
            <p className="mt-4 pt-2 border-t font-bold text-[18px] xl:text-[22px]">
                “This is the best vet i’ve ever come to!”
            </p>
            <div className="absolute -top-8 -right-7 xl:-top-10">
                <img src={images.IMG_HEART_ICON} className="w-16 xl:w-20" />
            </div>
        </div>
    );
};

export default BannerRating;
