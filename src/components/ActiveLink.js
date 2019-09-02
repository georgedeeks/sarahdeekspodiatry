import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "gatsby";

import { transformPathnameToTitle } from '../utils';

const StyledLink = styled.a`
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
	white-space:nowrap;
	
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

	${props => props.services && props.services === 'true' && `
    margin-right: 2.5rem;
	`}
`;

const ActiveLink = ({pathname, href, title, services}) => {	
	return (
		<StyledLink 
			href={href}
			active={(pathname === href).toString()}
			services={services}
		>
			{title}
		</StyledLink>	
	);
};

ActiveLink.propTypes = {
	pathname: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	services: PropTypes.string.isRequired,
	
};

export default ActiveLink;