import About from './About';
import Activitive from './Activitive';
import Banner from './Banner';
import Blog from './Blog';
import Booking from './Booking';
import Company from './Company';
import Contact from './Contact';
import Gallery from './Gallery';

import Pricing from './Pricing';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Testimonial />
            <Pricing />
            <Activitive />
            <Blog />
            <Booking />
            <Gallery />
            <Company />
            <Contact />
        </>
    );
};

Home.propTypes = {};

export default Home;
