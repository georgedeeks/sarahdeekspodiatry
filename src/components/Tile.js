import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 125px 200px;

	background: ${props => props.background ? props.background : 'none'};
	height: ${props => props.height ? props.height : 1}px;

`;

const Tile = ({children, background, height}) => (
	<Wrapper background={background} height={(height && height > 250) ? height : 251}>
		{children}
	</Wrapper>	
);

Tile.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
};

export default Tile;