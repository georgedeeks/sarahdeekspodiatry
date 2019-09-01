import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import ActiveLink from "../ActiveLink";

import footOnlyLogo from "../../images/logo_symbol.png";
import textOnlyLogo from "../../images/logo_text.png";

const NAV_STICKY_OFFSET = 120;

const NativeHeader = styled.header`
	background-color: white; /* remove */

	position: sticky;

	left: 0;
  top: 0;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	height: ${NAV_STICKY_OFFSET}px;

	${props => props.hasScrolled && `
		border-bottom: #7ECDC1 1px solid;
		height: 60px;
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

	const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = event => {
      const itHasScrolled = window.pageYOffset > NAV_STICKY_OFFSET;

      if (itHasScrolled !== hasScrolled) {
        setHasScrolled(itHasScrolled);
      }
    };

    window.addEventListener('scroll', onScroll);
    setHasScrolled(window.pageYOffset > NAV_STICKY_OFFSET);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasScrolled]);

	console.log('hasScrolled', hasScrolled);

	return (
		<NativeHeader hasScrolled={hasScrolled}>
			<LogoWrapper hasScrolled={hasScrolled}>
				<FootPicture hasScrolled={hasScrolled} src={footOnlyLogo} alt="Foot logo" />
				<TextPicture hasScrolled={hasScrolled} src={textOnlyLogo} alt="Logo text" />			
			</LogoWrapper>
			
			<Nav>
				<ActiveLink title="Home" pathname={pathname} to="#intro" />
				<ActiveLink title="About" pathname={pathname} to="#about" />
				<ActiveLink title="Services" pathname={pathname} to="#services" />
				<ActiveLink title="Location & Contact" pathname={pathname} to="#location-hours" />
			</Nav>
		</NativeHeader>
	);
}

;

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;