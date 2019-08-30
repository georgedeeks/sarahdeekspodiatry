import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import ActiveLink from "../ActiveLink";

import footOnlyLogo from "../../images/logo_symbol.png";
import textOnlyLogo from "../../images/logo_text.png";

const NativeHeader = styled.header`
	background-color: white; /* remove */

	position: absolute;

	left: 0;
  top: 0;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	height: 120px;
`;

const Nav = styled.nav`
	height: 100%;
	display: flex;
	align-items: flex-end;
`;

const Logo = styled.div`

`;

const FootPicture = styled.img`
	width: 143px;
	height: 140px;
	top: 30px;
	position: relative;
	padding-left: 120px;
`;

// TODO make a text component not an image
const TextPicture = styled.img`
	width: 195px;
	height: 54px;
	padding-left: 17px;
	padding-bottom: 10px; /* TODO align with menu items (probably by making text) */
`;

/*
<Logo>
			<TextPicture src={textOnlyLogo} alt="Logo text" />			
		</Logo>
*/

const Header = ({pathname}) => 
	<NativeHeader>
					<FootPicture src={footOnlyLogo} alt="Foot logo" />

		<Nav>
			<ActiveLink pathname={pathname} to="/" />
			<ActiveLink pathname={pathname} to="/about/" />
			<ActiveLink pathname={pathname} to="/services/" />
			{/*<ActiveLink pathname={pathname} to="/hours/" />*/}
			<ActiveLink pathname={pathname} to="/location/" />
			{/*<ActiveLink pathname={pathname} to="/book/" />*/}
		</Nav>
	</NativeHeader>
;

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;