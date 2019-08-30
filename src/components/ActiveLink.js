import React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import { transformPathnameToTitle } from '../utils';

const ActiveLink = ({pathname, to}) => {	
	
	const passiveStyle = {
		"color": "#fac8bf",
		"fontSize": "20px",
		"marginRight": "1rem",
	};
	
	const activeStyle = {
		...passiveStyle,
		"fontWeight": "bold",
		"textDecoration": "none",
	};

	return (
		<Link 
			style={pathname === to ? activeStyle : passiveStyle}
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