import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import IndexPage from '../pageComponents/IndexPage';

const Index = ({location}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Sarah Deeks Podiatry</title>
			</Helmet>

			<SiteLayout title="Sarah Deeks Podiatry" pathname={location.pathname}>
				<IndexPage />
			</SiteLayout>
		</>
	
	);
};

Index.propTypes = {
	location: PropTypes.object,
};

export default Index;