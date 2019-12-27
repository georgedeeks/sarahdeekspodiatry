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
			<LocationAndHoursTile />
			<script type="application/ld+json">
			{`{
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				"address": {
					"addressCountry": "GB",
					"addressLocality": "Finchley",
					"streetAddress": "307 Regents Park Rd",
					"addressRegion": "London"
				},
				"areaServed": "Finchley",
				"url": "https://www.sarahdeekspodiatry.co.uk",
				"name": "Foot Care Finchley",
				"naics": "621391",
				"telephone": "+44 (0)7824 159 320",
				"image": "https://www.sarahdeekspodiatry.co.uk/static/logo_symbol_small.png"
			}`}
			</script>
		</React.Fragment>
	);
};

export default IndexPage;