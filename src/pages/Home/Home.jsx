import About from './About';
import Banner from './Banner';
import Company from './Company';
import Services from './Services';
import Blog from './Blog';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <About />
            <Blog />
            <Company />
        </>
    );
};

Home.propTypes = {};

export default Home;
