import ActivitiveImg from '~/assets/images/activitive.png';
import { FaDog } from 'react-icons/fa';
import Accordion from '~/components/Accordion';
import Button from '~/components/Button';
import { ABOUT_DATA } from '~/constants/aboutData';
import Counter from '~/components/Counter';

const Activitive = () => {
    return (
        <section className="activitive md:mt-20 mt-8" id="activitive">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-6">
                <div className="flex items-center md:mt-0 mt-4">
                    <img src={ActivitiveImg} />
                </div>
                <div className="md:mt-0 mt-10">
                    <div className="flex flex-col md:items-start items-center md:text-left text-center">
                        <p className="flex text-orange-500 uppercase text-[14px] font-bold">
                            <span className="mr-1">
                                <FaDog />
                            </span>{' '}
                            Our Activities
                        </p>
                        <h1 className="heading">Our activities and experience</h1>
                        <p className="text-gray-500 mt-6">
                            No it except well out nice refute. Downstairs turned but a would passion the a this in be
                            stupid attention it his managers perfecting
                        </p>
                    </div>

                    <div className="my-6">
                        <Counter />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activitive;
