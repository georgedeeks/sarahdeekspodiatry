import React from "react";

import IntroTile from './indexPage/IntroTile';
import AboutTile from './indexPage/AboutTile';
import ServicesTile from './indexPage/ServicesTile';

const IndexPage = () => {
	// TODO: index determining styling and/or programmatic tile rendering
	return (
		<React.Fragment>
			<IntroTile />
			<AboutTile />
			<ServicesTile />
		</React.Fragment>
	);
}

export default IndexPage;