import About from './About';
import Banner from './Banner';
import Company from './Company';
import Services from './Services';
import Blog from './Blog';
import Testimonial from './Testimonial';
import Pricing from './Pricing';
import Activitive from './Activitive';
import Booking from './Booking';

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
            <Company />
        </>
    );
};

Home.propTypes = {};

export default Home;
