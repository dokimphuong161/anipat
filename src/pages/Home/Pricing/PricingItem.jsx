import { BsCheck2 } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

// images
import { images } from '~/constants/images';

// components
import Button from '~/components/Button';

const backgroundImg = {
    backgroundImage: `url("${images.IMG_PRICING_ITEM_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const PricingItem = ({ item }) => {
    return (
        <div className="rounded-xl hover:scale-105 shadow-lg transition duration-500" style={backgroundImg}>
            <div className="p-4">
                <img src={item.image} className="rounded-xl" />
            </div>

            <div className="p-6">
                <h1 className="text-[25px] font-bold text-gray-700">{item.package}</h1>
                <div className="flex items-end text-primary-900 mt-3">
                    <p className="text-[50px] leading-[50px] font-bold">
                        <span>$</span>
                        {item.pricing}
                    </p>
                    <p className="font-bold">
                        <span> / </span>
                        {item.unit}
                    </p>
                </div>
                <ul className="my-8">
                    {item.listService.map((service, index) => (
                        <li key={index} className="flex items-center my-4 font-bold text-gray-500">
                            <span className="mr-2 text-2xl">
                                {service.visible ? (
                                    <BsCheck2 className="text-green-500 font-semibold" />
                                ) : (
                                    <MdClose className="text-primary-700 font-semibold" />
                                )}
                            </span>
                            {service.name}
                        </li>
                    ))}
                </ul>
                <Button primary shape className="mb-2 text-[14px] font-bold">
                    ORDER NOW
                </Button>
            </div>
        </div>
    );
};

PricingItem.propTypes = {
    item: PropTypes.object.isRequired,
};

PricingItem.defaultProps = {
    item: null,
};

export default PricingItem;
