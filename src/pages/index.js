import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import IndexPage from '../pageComponents/IndexPage';

const Index = ({location}) => {
	return (
		<>
			<Helmet>
				<title>Sarah Deeks Podiatry</title>
				
				<meta charSet="utf-8" />
				<meta name="google-site-verification" content="1UCUNug1lgxZygvTYTzdz1szPQE7Z4lNi_hGSTnqiuk" />
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