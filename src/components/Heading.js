import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeading = styled.h2`
	color: #646464;
	font-weight: bold;
	font-size: 42px;	margin: 0 0 50px 0;

	/* MOBILE */
	@media (max-width:1050px)  {
		margin: 0 0 1em 1em;
	}
`;

const Heading = ({children}) => {
	return (
		<StyledHeading>
			{children}
		</StyledHeading>
	);
};

Heading.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Heading;
	