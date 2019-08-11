import React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import { transformPathnameToTitle } from '../utils';

const ActiveLink = ({pathname, to}) => {	
	const activeStyle = {
		"fontWeight": "bold",
		"textDecoration": "none",
	};

	return (
		<Link 
			style={pathname === to ? activeStyle : {}} 
			to={to}
		>
			{transformPathnameToTitle(to)}
		</Link>
	);
};

ActiveLink.propTypes = {
	pathname: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default ActiveLink;