import { FaDog } from 'react-icons/fa';

// images
import { images } from '~/constants/images';

// components
import Counter from '~/components/Counter';

// Setting background
const ActivitiveBg = {
    backgroundImage: `url("${images.IMG_ACTIVITIVE_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Activitive = () => {
    return (
        <section
            className="activitive md:pt-20 md:pb-20 pt-12 pb-16 relative md:mt-20 mt-16 before:content[''] before:absolute before:bg-wave before:top-0 before:left-0 before:right-0 before:h-[24px] after:content[''] after:absolute after:rotate-180 after:bg-wave after:bottom-0 after:left-0 after:right-0 after:h-[24px]"
            id="activitives"
            style={ActivitiveBg}
        >
            <div className="container mx-auto grid md:grid-cols-2 md:gap-8 grid-cols-1 md:px-0 px-6">
                <div className="flex items-center md:mt-0 mt-4">
                    <img src={images.IMG_ACTIVITIVE} />
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
