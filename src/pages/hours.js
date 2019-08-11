import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import HoursPage from '../pageComponents/HoursPage';

const Hours = ({location}) => 
	<SiteLayout pathname={location.pathname}>
		<HoursPage />
	</SiteLayout>
;

Hours.propTypes = {
	location: PropTypes.object,
};

export default Hours;