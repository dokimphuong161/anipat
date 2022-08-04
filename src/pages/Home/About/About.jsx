import AboutImg from '~/assets/images/about-us.png';
import FootImg from '~/assets/images/foot.png';
import Accordion from '~/components/Accordion';
import Button from '~/components/Button';
import { ABOUT_DATA } from '~/constants/aboutData';

const About = () => {
    return (
        <section className="about">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-4">
                <div className="">
                    <div className="flex flex-col md:items-start items-center md:text-left text-center">
                        <img src={FootImg} className="w-14" />
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
                <div className="flex items-center md:mt-0 mt-12">
                    <img src={AboutImg} />
                </div>
            </div>
        </section>
    );
};

export default About;
