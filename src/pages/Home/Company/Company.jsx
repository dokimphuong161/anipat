import { FaDog } from 'react-icons/fa';
import Slider from 'react-slick';

// hooks
import useGetData from '~/hooks/useGetData';

const Company = () => {
    // Get brands data
    const { data } = useGetData('brandsData');

    // Setting slick slider
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
        ],
    };
    return (
        <section className="company mt-10 mb-10">
            <div className="container mx-auto">
                <p className="flex justify-center mb-8 text-orange-500 uppercase text-[14px] font-bold">
                    <span className="mr-1">
                        <FaDog />
                    </span>{' '}
                    Trusted by companies like
                </p>
                <div className="company-list">
                    <Slider {...settings}>
                        {data.map((brand, i) => (
                            <div className="company-item">
                                <img src={brand} key={i} className="md:h-[70px] h-[65px]  mx-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Company;
