import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
	height: 640px;
`;

const Tile = ({children}) => (
	<Wrapper>{children}</Wrapper>	
);

Tile.propTypes = {
	children: PropTypes.node,
};

export default Tile;