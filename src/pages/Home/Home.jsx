import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Services from './Services';
import Company from './Company';

const Home = (props) => {
    return (
        <>
            <Banner />
            <Services />
            <Company />
        </>
    );
};

Home.propTypes = {};

export default Home;
