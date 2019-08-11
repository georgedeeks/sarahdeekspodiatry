import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import BookPage from '../pageComponents/BookPage';

const Book = ({location}) => 
	<SiteLayout pathname={location.pathname}>
		<BookPage />
	</SiteLayout>
;

Book.propTypes = {
	location: PropTypes.object,
};

export default Book;