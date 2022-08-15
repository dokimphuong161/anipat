import { FaDog } from 'react-icons/fa';
import Slider from 'react-slick';

// images
import { images } from '~/constants/images';

// hooks
import useGetData from '~/hooks/useGetData';

// components
import BlogItem from './BlogItem';

const Blog = () => {
    // Get blog data
    const { data } = useGetData('blogData');
    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const renderBlogItem = data.map((item, index) => <BlogItem item={item} key={index} />);
    return (
        <section className="blog mt-8 lg:mt-4 relative">
            <div className="absolute md:left-32 md:top-16 top-0 left-1/2 -translate-x-1/2 -z-10">
                <img src={images.IMG_SHAPE_BIRD} className="w-32" />
            </div>
            <div className="absolute md:block hidden right-0 top-1/2 -translate-y-1/2 -z-10">
                <img src={images.IMG_SHAPE_BONE} className="w-32" />
            </div>
            <div className="container mx-auto md:pt-20 pt-12 pb-12">
                <div className="section-heading md:w-1/2 w-auto text-center mx-auto ">
                    <p className="flex justify-center text-orange-500 uppercase text-[14px] font-bold">
                        <span className="mr-1">
                            <FaDog />
                        </span>{' '}
                        Blog posts
                    </p>
                    <h1 className="heading">Enjoy Our Story</h1>
                </div>
                <div className="blog-list">
                    <Slider {...settings} arrows={true} className="grid gap-4">
                        {renderBlogItem}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Blog;
