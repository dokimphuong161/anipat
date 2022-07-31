import BannerImg from '~/assets/images/banner.jpg';
import DogBanner from '~/assets/images/dogs/dog-banner-1.png';

// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// import required modules
import Slider from 'react-slick';
import { BANNER_DESC_SLIDER } from '~/constants/bannerDescSlider';
import DescSliderItem from './DescSliderItem';
// Setting background
const backgroundImg = {
    backgroundImage: `url("${BannerImg}")`,
    backgroundSize: 'cover',
};

const Banner = (props) => {
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
    const renderDesSliderItem = BANNER_DESC_SLIDER.map((item) => <DescSliderItem item={item} />);
    return (
        <section className="banner pt-32" style={backgroundImg}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="banner-content w-2/5">
                    <h3 className="text-[75px] leading-[85px] font-black">
                        <span className="text-primary-900">Taking care</span> <br />
                        of your pets <br />
                    </h3>
                    <section className="banner-desc w-auto">
                        <Slider {...settings}>{renderDesSliderItem}</Slider>
                    </section>
                </div>
            </div>

            <img className=" absolute top-0 right-0 md:w-1/2" src={DogBanner}></img>
        </section>
    );
};

Banner.propTypes = {};

export default Banner;
