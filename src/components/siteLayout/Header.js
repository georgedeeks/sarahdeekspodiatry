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
	height: ${props => props.headerHeight}px;

	transition: height 0.2s ease-in-out;

	${props => props.hasScrolled && `
		border-bottom: #7ECDC1 1px solid;
	`}
`;

const MobileHeader = styled.header`
	position: relative;
	background: white;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	height: ${HEADER_HEIGHT_SMALL}px;
	border-bottom: #7ECDC1 2px solid;

`;

const Nav = styled.nav`
	height: 100%;
	display: flex;
	align-items: flex-end;
	margin-right: 2%;
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

const MobileNav = styled.nav`
	font-size: 12px;
	padding-bottom: 1rem;
`;

const Header = ({pathname}) => {
	const [hasScrolled, setHasScrolled] = React.useState(false);

  const onScroll = throttle(() => {
    setHasScrolled(window && window.pageYOffset > HEADER_HEIGHT_LARGE);
  });

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
	});
	
  var headerHeight = hasScrolled
    ? HEADER_HEIGHT_SMALL
		: HEADER_HEIGHT_LARGE;

	var mq = window.matchMedia( "(max-width: 1050px)" );
	if (mq.matches) {
		// window width is at less than 1050px
		// mq.matches is mobile view
	}
	else {
		// window width is greater than 1050px
	}
		
	if (mq.matches) {
		headerHeight = HEADER_HEIGHT_SMALL;
	}

	if (!mq.matches) {
		return (
			<>
				<NativeHeader headerHeight={headerHeight} hasScrolled={hasScrolled}>
	
					<LogoWrapper hasScrolled={mq.matches || hasScrolled}>
						<FootPicture hasScrolled={mq.matches || hasScrolled} src={footOnlyLogo} alt="Foot logo" />
						<TextPicture hasScrolled={mq.matches || hasScrolled} src={textOnlyLogo} alt="Logo text" />
					</LogoWrapper>
	
					<Nav>
						<ActiveLink services="false" title="Home" pathname={pathname} href="#top" />
						<ActiveLink services="false" title="About" pathname={pathname} href="#about" />
						<ActiveLink services="true" title="Services" pathname={pathname} href="#services" />
						<ActiveLink services="false" title="Location & Contact" pathname={pathname} href="#location-hours" />
					</Nav>
	
				</NativeHeader>
			</>
		);
	} else {
		var mq2 = window.matchMedia( "(min-width: 620px)" );
		
		return (
			<>
				<MobileHeader headerHeight={headerHeight} hasScrolled={hasScrolled}>
	
					<LogoWrapper hasScrolled={mq.matches || hasScrolled}>
						<FootPicture hasScrolled={mq.matches || hasScrolled} src={footOnlyLogo} alt="Foot logo" />
						<TextPicture hasScrolled={mq.matches || hasScrolled} src={textOnlyLogo} alt="Logo text" />
					</LogoWrapper>

					{mq2.matches && (
						<MobileNav>
							<ActiveLink services="false" title="About" pathname={pathname} href="#about" />
							<ActiveLink services="false" title="Services" pathname={pathname} href="#services" />
							<ActiveLink services="false" title="Location & Contact" pathname={pathname} href="#location-hours" />
						</MobileNav>
					)}					
		
				</MobileHeader>
			</>
		);
	}
}

;

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;
