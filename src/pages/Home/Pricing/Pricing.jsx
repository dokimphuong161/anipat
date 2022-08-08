import { FaDog } from 'react-icons/fa';
// components
import PricingItem from './PricingItem';

// images
import { images } from '~/constants/images';

// hooks
import useGetData from '~/hooks/useGetData';

const PricingBg = {
    backgroundImage: `url("${images.IMG_PRICING_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Pricing = () => {
    // Get pricing data
    const { data } = useGetData('pricingData');

    return (
        <section className="pricing" id="pricing" style={PricingBg}>
            <div className="container mx-auto pt-16 md:pb-16 pb-4 md:px-0 px-6">
                <div className="section-heading md:w-1/2 w-auto text-center mx-auto mb-8">
                    <p className="flex justify-center text-orange-500 uppercase text-[14px] font-bold">
                        <span className="mr-1">
                            <FaDog />
                        </span>{' '}
                        Bring your pets
                    </p>
                    <h1 className="heading">The Best Choice</h1>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
                    {data.map((item, index) => (
                        <PricingItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
