import React from "react";
import styled from "styled-components";

const StyledPlainLink = styled.a`
	color: purple;
	text-decoration: underline;

	:hover {
		color: blue;
	}
		
	:active {
		color: mediumpurple;
	}	
`;

const PlainLink = (props) => {
	return (
		<StyledPlainLink {...props} />
	);
};

export default PlainLink;
	