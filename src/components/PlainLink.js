import React from "react";
import styled from "styled-components";

const StyledPlainLink = styled.a`
	color: #646464;
	text-decoration: underline;

	:hover {
		color: blue;
	}
		
	:active {
		color: purple;
	}	
`;

const PlainLink = (props) => {
	return (
		<StyledPlainLink {...props} />
	);
};

export default PlainLink;
	