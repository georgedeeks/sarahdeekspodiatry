import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import AboutPage from '../pageComponents/AboutPage';

const About = ({location}) => 
	<SiteLayout pathname={location.pathname}>
		<AboutPage />
	</SiteLayout>
;

About.propTypes = {
	location: PropTypes.object,
};

export default About;