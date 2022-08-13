import PropTypes from 'prop-types';

// images
import { images } from '~/constants/images';

// components
import Rating from '~/components/Rating';

// Setting background
const TestiBg = {
    backgroundImage: `url("${images.IMG_TESTIMONIAL_ITEM}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const TestimonialItem = ({ item }) => {
    // Rating star

    return (
        <div
            style={TestiBg}
            className="testimonial-item relative before:content-['“'] before:absolute md:before:-top-3 before:top-3  md:before:right-10 before:right-3 before:font-bold sm:before:text-[150px] sm:before:right-6 md:before:text-[250px] before:text-[80px] before:leading-[1] before:text-primary-200 md:rounded-none rounded-3xl"
        >
            <div className="py-6 md:px-10 px-4">
                <div className="flex items-center">
                    <div className="relative md:w-24 md:h-24 w-20 h-20 z-10">
                        <span className="absolute w-full h-full rounded-full -z-10 bg-orange-400"></span>
                        <img src={item.image} className="md:w-20 w-[70px] rounded-full border-[8px] border-white" />
                    </div>

                    <div className="md:ml-8 ml-4">
                        <div className={`rating}`}>
                            <Rating value={item.rating} />
                        </div>
                        <p className="md:text-[20px] text-[16px] font-semibold">{item.customer}</p>
                        <p className="text-lime-600 font-bold">{item.job}</p>
                    </div>
                </div>
                <p className="testimonial-review text-gray-700 mt-4">{item.review}</p>
            </div>
        </div>
    );
};

TestimonialItem.propTypes = {
    item: PropTypes.object.isRequired,
};

TestimonialItem.defaultProps = {
    item: null,
};

export default TestimonialItem;
