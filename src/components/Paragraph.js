import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledParagraph = styled.div`
	color: #646464;	
	font-size: 18px;	
	line-height: 24px;
	max-width: 500px;
	min-width: 500px;
`;

const Paragraph = ({children}) => {
	return (
		<StyledParagraph>
			{children}
		</StyledParagraph>
	);
};

Paragraph.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Paragraph;
	