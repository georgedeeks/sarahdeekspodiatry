import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import LocationPage from '../pageComponents/LocationPage';

const Location = ({location}) => 
	<SiteLayout pathname={location.pathname}>
		<LocationPage />
	</SiteLayout>
;

Location.propTypes = {
	location: PropTypes.object,
};

export default Location;