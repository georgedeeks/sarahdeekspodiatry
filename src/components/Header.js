import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeader = styled.h2`
	color: #466675;
`;

const Header = ({title}) => {
	return (
		<StyledHeader>
			{title}
		</StyledHeader>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
	