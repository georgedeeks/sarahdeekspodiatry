import React from "react";
import PropTypes from 'prop-types';

import Header from "./Header";
import ActiveLink from "./ActiveLink";

import { transformPathnameToTitle } from '../utils';

// TODO pathname >> currentPathname all src refactor
const SiteLayout = ({title, children, pathname}) => 
	<div>

		<header>
			<nav>
				<ActiveLink pathname={pathname} to="/" />
				<ActiveLink pathname={pathname} to="/about/" />
				<ActiveLink pathname={pathname} to="/services/" />
				<ActiveLink pathname={pathname} to="/hours/" />
				<ActiveLink pathname={pathname} to="/location/" />
				<ActiveLink pathname={pathname} to="/book/" />
			</nav>
		</header>

		<main>
			<Header title={title || transformPathnameToTitle(pathname)} />

			{children}
		</main>

		<footer>
			<div>
				<p>Copyright George Deeks 2019</p>
			</div>
		</footer>
	</div>
;

SiteLayout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	pathname: PropTypes.string.isRequired,
};

export default SiteLayout;