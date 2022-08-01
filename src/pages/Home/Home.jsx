import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Services from './Services';

const Home = (props) => {
    return (
        <>
            <Banner />
            <Services />
        </>
    );
};

Home.propTypes = {};

export default Home;
