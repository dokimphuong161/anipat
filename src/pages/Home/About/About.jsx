import AboutImg from '~/assets/images/about1.png';
import { FaDog } from 'react-icons/fa';
import Accordion from '~/components/Accordion';
import Button from '~/components/Button';
import { ABOUT_DATA } from '~/constants/aboutData';

const About = () => {
    return (
        <section className="about">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-4">
                <div className="flex items-center md:mt-0 mt-12">
                    <img src={AboutImg} />
                </div>
                <div className="md:mt-0 mt-10">
                    <div className="flex flex-col md:items-start items-center md:text-left text-center">
                        <p className="flex text-orange-500 uppercase text-[14px] font-bold">
                            <span className="mr-1">
                                <FaDog />
                            </span>{' '}
                            About pawsitive
                        </p>
                        <h1 className="heading">We keep them happy</h1>
                        <p className="text-gray-500 mt-6">
                            Our staff spends time interacting with and monitoring the pets to ensure their safety and
                            happiness while they are with us.
                        </p>
                    </div>

                    <div className="my-6">
                        <Accordion items={ABOUT_DATA} />
                    </div>

                    <Button primary shape>
                        Discover more
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default About;
