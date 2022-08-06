import { FaDog } from 'react-icons/fa';
import Slider from 'react-slick';
import { BLOG_DATA } from '~/constants/blogData';
import BlogItem from './BlogItem';

const Blog = () => {
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
                    dots: true,
                },
            },
        ],
    };

    const renderBlogItem = BLOG_DATA.map((item, index) => <BlogItem item={item} key={index} />);
    return (
        <section className="blog mt-2">
            <div className="container mx-auto md:pt-20 pt-12 pb-12 md:px-0 px-6">
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
