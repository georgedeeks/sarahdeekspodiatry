import React from 'react';
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
	display: flex;
	align-items: flex-end;
	height: ${props => props.hasScrolled ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE}px;

	transition: height 0.1s ease-in-out;

	${props => props.hasScrolled && `
		border-bottom: #7ECDC1 1px solid;
	`}

	/* MOBILE */
	@media (max-width:1050px)  {
		position: relative;
		background: white;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		height: ${HEADER_HEIGHT_SMALL}px;
		border-bottom: #7ECDC1 2px solid;
	}
`;

const Nav = styled.nav`
	display: none;
	
	@media (min-width: 1050px)  {
		font-size: 18px;
		height: 100%;
		display: flex;
		align-items: flex-end;
		
		display: flex;
	}
`;

const FootPicture = styled.img`
	width: 143px;
	height: 140px;
	top: 30px;
	position: relative;
	padding-left: 10%;

	/* MOBILE */
	@media (max-width:1050px)  {
		height: 48px;
		max-width: 47px;
		top: 0;
		flex: 1;

		/* ALSO */
		padding-left: 1%;
	}

	/* 	SCROLL */
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

	/* MOBILE */
	@media (max-width:1050px)  {
		height: 36px;
		max-width: 130px;
		top: -5px;
		flex: 1;
		padding-bottom: 0;
	}

	/* 	SCROLL */
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

	/* MOBILE */
	@media (max-width:1050px)  {
		align-items: center;
		justify-content: flex-start;
	}

	/* 	SCROLL */
	${props => props.hasScrolled && `
		align-items: center;
		justify-content: flex-start;
	`}
`;

const Header = ({pathname}) => {
	const [hasScrolled, setHasScrolled] = React.useState(false);

	// TODO is hasScrolled not being used?
	// eslint-disable-next-line
  const onScroll = throttle((hasScrolled) => {
		setHasScrolled(window.pageYOffset > 60);
	}, 800);

  React.useEffect(() => {
    if (window) {
			window.addEventListener('scroll', onScroll);
			onScroll(hasScrolled);
			return () => window.removeEventListener('scroll', onScroll);
		}
 
		return null;
	});
	
  var headerHeight = hasScrolled ? HEADER_HEIGHT_SMALL
		: HEADER_HEIGHT_LARGE;

	return (
		<>
			<NativeHeader 
				headerHeight={headerHeight} 
				hasScrolled={hasScrolled}
			>

				<LogoWrapper hasScrolled={hasScrolled}>
					<FootPicture hasScrolled={hasScrolled} src={footOnlyLogo} alt="Foot logo" />
					<TextPicture hasScrolled={hasScrolled} src={textOnlyLogo} alt="Logo text" />
				</LogoWrapper>

				<Nav>
					<ActiveLink 
						hideOnMobile 
						title="Home" 
						pathname={pathname} 
						href="#top" 
					/>
					<ActiveLink 
						title="About" 
						pathname={pathname} 
						href="#about" 
					/>
					<ActiveLink 
						withRightMargin 
						title="Services" 
						pathname={pathname} 
						href="#services" 
					/>
					<ActiveLink 
						withRightMargin 
						title="Location & Contact" 
						pathname={pathname} 
						href="#location-hours" 
					/>
				</Nav>

			</NativeHeader>
		</>
	);
};

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;
