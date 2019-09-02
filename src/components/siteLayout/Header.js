import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import throttle from 'lodash/throttle';

import ActiveLink from "../ActiveLink";

import footOnlyLogo from "../../images/logo_symbol.png";
import textOnlyLogo from "../../images/logo_text.png";

const HEADER_HEIGHT_LARGE = 120;
const HEADER_HEIGHT_SMALL = 60;

const NativeHeader = styled.header`
	position: sticky;
	background: white;
	left: 0;
  top: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	height: ${HEADER_HEIGHT_SMALL}px;

	transition: height 0.2s ease-in-out;

	@media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		height: ${props => props.headerHeight}px;
	}

	${props => props.hasScrolled && `
		border-bottom: #7ECDC1 1px solid;
	`}
`;

const Nav = styled.nav`
	height: 100%;
	display: flex;
	align-items: flex-end;
	margin-right: 2rem;
`;

const FootPicture = styled.img`
	width: 143px;
	height: 140px;
	top: 30px;
	position: relative;
	padding-left: 120px;

	${props => props.hasScrolled && `
		height: 48px;
		max-width: 47px;
		top: 0;
		flex: 1;
	`}
`;

// TODO make a text component not an image
const TextPicture = styled.img`
	width: 195px;
	height: 54px;
	padding-left: 17px;
	padding-bottom: 10px; /* TODO align with menu items (probably by making text) */

	${props => props.hasScrolled && `
		height: 36px;
		max-width: 130px;
		top: -5px;
		flex: 1;
		padding-bottom: 0;
	`}
`;

const LogoWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	align-items: flex-end;

	${props => props.hasScrolled && `
		align-items: center;
		justify-content: flex-start;
	`}
`;

const Header = ({pathname}) => {
	const [hasScrolled, setHasScrolled] = React.useState(false);

  const onScroll = throttle(() => {
    setHasScrolled(window.pageYOffset > HEADER_HEIGHT_LARGE);
  });

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  });

  const headerHeight = hasScrolled
    ? HEADER_HEIGHT_SMALL
    : HEADER_HEIGHT_LARGE;

	return (
		<>
			<NativeHeader headerHeight={headerHeight} hasScrolled={hasScrolled}>

				<LogoWrapper hasScrolled={hasScrolled}>
					<FootPicture hasScrolled={hasScrolled} src={footOnlyLogo} alt="Foot logo" />
					<TextPicture hasScrolled={hasScrolled} src={textOnlyLogo} alt="Logo text" />
				</LogoWrapper>

				<Nav>
					<ActiveLink title="Home" pathname={pathname} href="#top" />
					<ActiveLink title="About" pathname={pathname} href="#about" />
					<ActiveLink title="Services" pathname={pathname} href="#services" />
					<ActiveLink title="Location & Contact" pathname={pathname} href="#location-hours" />
				</Nav>
			</NativeHeader>
		</>
	);
}

;

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;
