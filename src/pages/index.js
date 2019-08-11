import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import IndexPage from '../pageComponents/IndexPage';

const Index = ({location}) => {

	//console.log(location.pathname);

	return (
		<SiteLayout title="Sarah Deeks Podiatry" pathname={location.pathname}>
			<IndexPage />
		</SiteLayout>	
	);
};

Index.propTypes = {
	location: PropTypes.object,
};

export default Index;