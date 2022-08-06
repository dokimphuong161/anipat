import { FaDog } from 'react-icons/fa';
import { PRICING_DATA } from '~/constants/pricingData';
import PricingItem from './PricingItem';

const Pricing = () => {
    return (
        <section className="pricing md:mt-10 mt-6" id="pricing">
            <div className="container mx-auto pt-16 md:pb-8 pb-4 md:px-0 px-6">
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
                    {PRICING_DATA.map((item, index) => (
                        <PricingItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
