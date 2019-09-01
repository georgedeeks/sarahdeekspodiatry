import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "gatsby";

import { transformPathnameToTitle } from '../utils';

const StyledLink = styled(Link)`
	text-decoration: none;
	margin-right: 1rem;	
	height: 41px;
	min-width: 104px;
	color: #646464;
	font-family: Arial;
	font-size: 18px;
	font-weight: bold;
	line-height: 21px;
	text-align: center;
	
	${props => props.active && props.active === 'true' && `
		border-bottom: 4px solid #ACD4CE;
		height: 37px;
	`}

	:hover {
		border-bottom: 4px solid blue;
		cursor: pointer;
		height: 37px;
	}
		
	:active {
		border-bottom: 4px solid purple;
		height: 37px;
	}	
`;

const ActiveLink = ({pathname, to, title}) => {	
	return (
		<StyledLink 
			to={to}
			active={(pathname === to).toString()}
		>
			{title}
		</StyledLink>	
	);
};

ActiveLink.propTypes = {
	pathname: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,

	
};

export default ActiveLink;