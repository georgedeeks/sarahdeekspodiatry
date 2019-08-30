import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeading = styled.h2`
	color: #466675;
`;

const Heading = ({title}) => {
	return (
		<StyledHeading>
			{title}
		</StyledHeading>
	);
};

Heading.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Heading;
	