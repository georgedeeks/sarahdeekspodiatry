import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledLink = styled.a`
	text-decoration: none;
	margin-right: 1rem;	
	height: 41px;
	min-width: 104px;
	color: #646464;

	font-size: 18px;
	font-weight: bold;
	line-height: 21px;
	text-align: center;
	white-space:nowrap;
	
	:hover {
		border-bottom: 4px solid purple;
		cursor: pointer;
		height: 37px;
	}
		
	:active {
		border-bottom: 4px solid purple;
		height: 37px;
	}	

	${props => props.withRightMargin && `
    margin-right: 2.5rem;
	`}

	/* MOBILE */
	@media (max-width: 620px)  {
		text-decoration: none;
		margin-right: 0.5rem;	
		height: 12px;
		min-width: 52px;
		color: #646464;

		font-size: 10px;
		font-weight: bold;
		line-height: 12px;
		text-align: center;
		display: initial;
	}

	${props => props.hideOnMobile && `
		/* MOBILE */
		@media (max-width: 620px)  {
			display: none;
		}
	`}
`;

const ActiveLink = ({href, title, withRightMargin = false, hideOnMobile = false}) => {	
	return (
		<StyledLink 
			href={href}
			withRightMargin={withRightMargin}
			hideOnMobile={hideOnMobile}
		>
			{title}
		</StyledLink>	
	);
};

ActiveLink.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	withRightMargin: PropTypes.bool,
	hideOnMobile: PropTypes.bool,
};

export default ActiveLink;