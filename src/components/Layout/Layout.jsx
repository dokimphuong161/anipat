import Footer from '../Footer';
import GoToTop from '../GoToTop';
import Header from '../Header';

const Layout = (props) => {
    return (
        <section>
            <Header />
            {props.children}
            <Footer />
            <GoToTop />
        </section>
    );
};

Layout.propTypes = {};

export default Layout;
