import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
// import ErrorPage from '../pageComponents/ErrorPage';

// TODO FIGURE OUT ERROR AND 404 ISSUES!

const Error = ({location}) => {
	return (
		<SiteLayout title="Sarah Deeks Podiatry" pathname={location.pathname}>
			{/* <ErrorPage /> */}
			Sorry error pal
		</SiteLayout>	
	);
};

Error.propTypes = {
	location: PropTypes.object,
};

export default Error;