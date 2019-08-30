import React from "react";
import IntroTile from './indexPage/IntroTile';

// const tiles = [
// 	IntroTile,
// ];

// const IndexPage = () => {
// 	return tiles.map((tile, index) => {
// 		return (
// 			<React.Fragment>{tile}</React.Fragment>
// 		);
// 	});
// }

const IndexPage = () => {
	return (
		<React.Fragment>
			<IntroTile />
		</React.Fragment>
	);
}

export default IndexPage;