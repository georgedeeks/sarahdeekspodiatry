import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Header from "./siteLayout/Header";
import Footer from "./siteLayout/Footer";

import Heading from "./Heading";

import { transformPathnameToTitle } from '../utils';

const Main = styled.main`
	margin-top: 120px; /* match header */
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

// TODO pathname >> currentPathname all src refactor
const SiteLayout = ({title, children, pathname}) => 
	<Wrapper>

		<Header pathname={pathname} />

		<Main>
			<Heading title={title || transformPathnameToTitle(pathname)} />

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