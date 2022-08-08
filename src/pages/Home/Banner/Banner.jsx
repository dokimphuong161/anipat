// slick slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// images
import { images } from '~/constants/images';

// icons
import { ArrowIcon } from '~/constants/svgIcons';

// hooks
import useGetData from '~/hooks/useGetData';

// components
import BannerRating from './BannerRating';
import DescSliderItem from './DescSliderItem';

// Setting background
const backgroundImg = {
    backgroundImage: `url("${images.IMG_BANNER_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Banner = () => {
    //Setting for Slick Slider
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Get banner slider data
    const { data } = useGetData('bannerSlider');

    //Render Desc Item
    const renderDesSliderItem = data.map((item) => <DescSliderItem item={item} key={item.id} />);
    return (
        <section className="banner md:pt-32 pt-28" style={backgroundImg} id="home">
            <div className="container mx-auto flex items-center justify-between">
                <div className="banner-content md:w-2/5 md:px-0 w-full px-6">
                    <h3 className="md:text-[75px] md:leading-[85px] text-[60px] leading-[75px] font-black">
                        <span className="text-primary-900">Taking care</span> <br />
                        of your pets <br />
                    </h3>
                    <div className="banner-desc w-auto">
                        <Slider {...settings}>{renderDesSliderItem}</Slider>
                    </div>
                    <div className="banner-button mt-16 flex relative md:w-4/5 w-3/4">
                        <a href="#">
                            <img
                                alt="No image"
                                src={images.IMG_BOOK_BTN}
                                className="hover:rotate-12 transition duration-500 md:w-auto w-48"
                            />
                        </a>
                        <ArrowIcon className="w-20 absolute -top-8 animate-wiggle md:right-0 -right-4" />
                    </div>
                </div>
            </div>

            <div className="banner-img relavive md:block hidden">
                <img alt="No image" src={images.IMG_BANNER} className=" absolute top-0 right-0 md:w-[55%] "></img>
                <BannerRating />
            </div>
        </section>
    );
};

Banner.propTypes = {};

export default Banner;
