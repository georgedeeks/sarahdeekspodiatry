import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

// TODO FIGURE OUT ERROR AND 404 ISSUES!
const Error = ({location}) => {
	return (
		<SiteLayout title="Sarah Deeks Podiatry" pathname={location.pathname}>
			Sorry, an unexpected error has occurred. If this persists, please contact georgedeeks@gmail.com for resolution.
		</SiteLayout>	
	);
};

Error.propTypes = {
	location: PropTypes.object,
};

export default Error;