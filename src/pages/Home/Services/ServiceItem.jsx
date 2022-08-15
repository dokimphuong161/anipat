import PropTypes from 'prop-types';

// hooks

// images
import { images } from '~/constants/images';
import Button from '~/components/Button';

//Setting background for service item
const ServiceCardBg = {
    backgroundImage: `url("${images.IMG_SERVICE_CARD}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const ServiceItem = ({ item }) => {
    return (
        <div
            className="service-item hover:scale-105 transition duration-500 text-center pb-8 px-8 pt-[105px] md:mb-[95px] mb-[85px] border border-dashed border-gray-300 relative"
            style={ServiceCardBg}
        >
            <div className={`service-icon ${item.bgColor} flex items-center justify-center`}>
                <img src={item.icon} className="w-20" />
            </div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-4 mb-5">{item.description}</p>
            <Button shape primary small>
                View more
            </Button>
        </div>
    );
};

ServiceItem.propTypes = {
    item: PropTypes.object.isRequired,
};

ServiceItem.defaultProps = {
    item: null,
};

export default ServiceItem;
