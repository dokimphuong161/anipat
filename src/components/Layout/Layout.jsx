import Footer from '../Footer';
import GoToTop from '../GoToTop';
import Header from '../Header';

import { motion } from 'framer-motion';

const Layout = (props) => {
    return (
        <motion.section initial="hidden" animate="show">
            <Header />
            {props.children}
            <Footer />
            <GoToTop />
        </motion.section>
    );
};

Layout.propTypes = {};

export default Layout;
