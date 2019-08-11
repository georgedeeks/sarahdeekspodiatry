import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import ServicesPage from '../pageComponents/ServicesPage';

const Services = ({location}) => 
	<SiteLayout pathname={location.pathname}>
		<ServicesPage />
	</SiteLayout>
;

Services.propTypes = {
	location: PropTypes.object,
};

export default Services;