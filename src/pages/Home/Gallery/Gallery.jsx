import { FaDog } from 'react-icons/fa';

// images
import { images } from '~/constants/images';

const GalleryBg = {
    backgroundImage: `url("${images.IMG_ABOUT_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Gallery = () => {
    return (
        <section
            className="gallery relative md:mt-16 mt-14 pt-20 pb-20 md:px-0 px-6 before:content[''] before:absolute before:bg-wave before:top-0 before:left-0 before:right-0 before:h-[24px] after:content[''] after:absolute after:rotate-180 after:bg-wave after:bottom-0 after:left-0 after:right-0 after:h-[24px]"
            style={GalleryBg}
        >
            <div className="container mx-auto">
                <div className="section-heading md:text-left text-center mx-auto ">
                    <p className="flex md:justify-start justify-center  text-orange-500 uppercase text-[14px] font-bold">
                        <span className="mr-1">
                            <FaDog />
                        </span>{' '}
                        Our gallery
                    </p>
                    <h1 className="heading">Looking & Smelling</h1>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-4 md:-mt-16 mt-6">
                    <div className="grid-rows-2 md:mt-44 mt-0">
                        <img src={images.IMG_GALLERY1} />
                        <img className="md:mt-5 mt-4" src={images.IMG_GALLERY5} />
                    </div>
                    <div className="grid-rows-2 md:mt-28 mt-0">
                        <img src={images.IMG_GALLERY2} />
                        <img className="md:mt-5 mt-4" src={images.IMG_GALLERY6} />
                    </div>
                    <div className="grid-rows-2 md:mt-12 mt-0">
                        <img src={images.IMG_GALLERY3} />
                        <img className="md:mt-5 mt-4" src={images.IMG_GALLERY7} />
                    </div>
                    <div className="grid-rows-2">
                        <img src={images.IMG_GALLERY4} />
                        <img className="md:mt-5 mt-4" src={images.IMG_GALLERY8} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Gallery;
