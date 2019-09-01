import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Header from "./siteLayout/Header";
import Footer from "./siteLayout/Footer";

import Heading from "./Heading";

import { transformPathnameToTitle } from '../utils';

const Main = styled.main`
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;


	const Fixy = styled.div`
		position:fixed;
		top:-1px; 
		height:1px; 
		width:100%; 
		background:white;
	`;



// TODO pathname >> currentPathname all src refactor
const SiteLayout = ({title, children, pathname}) => 
	<Wrapper>

		<Header pathname={pathname} />


		<Main>
			{children}
		</Main>

		<Footer />

	</Wrapper>
;

SiteLayout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	pathname: PropTypes.string.isRequired,
};

export default SiteLayout;