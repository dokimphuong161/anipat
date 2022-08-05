import About from './About';
import Banner from './Banner';
import Company from './Company';
import Services from './Services';
import Blog from './Blog';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <About />
            <Testimonial />
            <Blog />
            <Company />
        </>
    );
};

Home.propTypes = {};

export default Home;
