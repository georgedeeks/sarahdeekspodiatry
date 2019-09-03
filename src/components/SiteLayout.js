import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Header from "./siteLayout/Header";
import Footer from "./siteLayout/Footer";

const Main = styled.main`
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