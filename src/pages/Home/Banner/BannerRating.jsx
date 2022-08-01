import React from 'react';
import PersonImg from '~/assets/images/person/testimonial-4.jpg';
import HeartImg from '~/assets/images/heart.png';
import { TiStarFullOutline } from 'react-icons/ti';

const BannerRating = () => {
    return (
        <div className="banner-review shadow-large w-[300px] bg-white absolute border border-primary-900 border-dashed right-28 bottom-6 p-6 rounded-2xl">
            <div className="flex items-center">
                <img className="w-14 rounded-full" src={PersonImg} alt="Person" />
                <div className="ml-4">
                    <p className="mb-2">Dr.Emma Passman</p>
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
            <p className="mt-4 pt-2 border-t font-bold text-[22px]">“This is the best vet i’ve ever come to!”</p>
            <div className="absolute -top-10 -right-7">
                <img src={HeartImg} />
            </div>
        </div>
    );
};

export default BannerRating;
