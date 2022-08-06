import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaDog } from 'react-icons/fa';
import FormBg from '~/assets/images/bg-form.png';
import FancyCat from '~/assets/images/fancy-image-cat.png';
import FancyText from '~/assets/images/fancy-image-text.png';
import FancyToy from '~/assets/images/fancy-toy.png';
import FancyBird from '~/assets/images/fancy-toy2.png';
import BookingForm from './BookingForm';

const formBg = {
    backgroundImage: `url("${FormBg}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const Booking = () => {
    return (
        <section className="activitive md:mt-20 mt-10" id="activitive">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-6 ">
                <div className="flex items-center md:mt-0 md:mb-0 mt-32 mb-28 relative w-[120%] -ml-[120px]">
                    <div className="absolute z-1 rounded-br-3xl">
                        <img src={FancyCat} className="rounded-br-[40px]" />
                    </div>
                    <div className="absolute z-2">
                        <img src={FancyText} />
                    </div>
                    <div className="absolute z-3">
                        <img src={FancyToy} />
                    </div>
                    <div className="absolute z-4">
                        <img src={FancyBird} />
                    </div>
                </div>
                <div className="md:mt-0 mt-20">
                    <div className="form py-10 md:px-12 px-10 rounded-2xl shadow-sm" style={formBg}>
                        <p className="flex justify-center text-orange-500 uppercase text-[14px] font-bold">
                            <span className="mr-1">
                                <FaDog />
                            </span>{' '}
                            Booking now
                        </p>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
