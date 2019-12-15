import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 60px 200px;
	background: ${props => props.background || 'none'};
	height: ${props => props.height}px;
`;

const MIN_HEIGHT = 250;

const Tile = ({children, background, height, id}) => (
	<Wrapper 
		background={background} 
		height={(height > MIN_HEIGHT) ? height : MIN_HEIGHT}
		id={id}
	>
		{children}
	</Wrapper>	
);

Tile.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
	height: PropTypes.number.isRequired,
	id: PropTypes.string,
};

export default Tile;