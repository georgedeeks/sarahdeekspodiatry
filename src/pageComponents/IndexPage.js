import React from "react";

import IntroTile from './indexPage/IntroTile';
import AboutTile from './indexPage/AboutTile';
import ServicesTile from './indexPage/ServicesTile';
import LocationAndHoursTile from './indexPage/LocationAndHoursTile';

const IndexPage = () => {
	// TODO: index determining styling and/or programmatic tile rendering
	return (
		<React.Fragment>
			<IntroTile />
			<AboutTile />
			<ServicesTile />
			<LocationAndHoursTile />
		</React.Fragment>
	);
};

export default IndexPage;