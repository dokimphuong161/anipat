// Import Image
import BannerImg from '~/assets/images/banner.jpg';
import DogBanner from '~/assets/images/dogs/dog-banner-1.png';
import BookNowBtn from '~/assets/images/book-now-btn.png';

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Import required modules
import { BANNER_DESC_SLIDER } from '~/constants/bannerDescSlider';
import { ArrowIcon } from '~/constants/svgIcons';
import DescSliderItem from './DescSliderItem';
import BannerRating from './BannerRating';

// Setting background
const backgroundImg = {
    backgroundImage: `url("${BannerImg}")`,
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
    //Render Desc Item
    const renderDesSliderItem = BANNER_DESC_SLIDER.map((item) => <DescSliderItem item={item} key={item.id} />);
    return (
        <section className="banner md:pt-32 pt-28" style={backgroundImg}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="banner-content md:w-2/5 md:px-0 w-full px-4">
                    <h3 className="md:text-[75px] md:leading-[85px] text-[60px] leading-[75px] font-black">
                        <span className="text-primary-900">Taking care</span> <br />
                        of your pets <br />
                    </h3>
                    <div className="banner-desc w-auto">
                        <Slider {...settings}>{renderDesSliderItem}</Slider>
                    </div>
                    <div className="banner-button mt-16 flex relative md:w-4/5 w-3/4">
                        <a href="#">
                            <img src={BookNowBtn} className="hover:rotate-12 transition duration-500 md:w-auto w-48" />
                        </a>
                        <ArrowIcon className="w-20 absolute -top-8 animate-wiggle md:right-0 -right-4" />
                    </div>
                </div>
            </div>

            <div className="banner-img relavive md:block hidden">
                <img className=" absolute top-0 right-0 md:w-[55%] " src={DogBanner}></img>
                <BannerRating />
            </div>
        </section>
    );
};

Banner.propTypes = {};

export default Banner;
