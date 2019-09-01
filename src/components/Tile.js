import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Row, Col } from 'antd';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 60px 200px;
	background: ${props => props.background || 'none'};
	height: ${props => props.height || 1}px;
`;

const Tile = ({children, background, height, id}) => (
	<Wrapper 
		background={background} 
		height={(height > 250) ? height : 251}
		id={id}
	>
		{children}
	</Wrapper>	
);

Tile.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
	height: PropTypes.number.isRequired,
};

export default Tile;