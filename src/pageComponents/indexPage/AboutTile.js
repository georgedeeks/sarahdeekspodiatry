import React from "react";
import styled from "styled-components";

import blueSarah from "../../images/sarah-profile.png";

import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import VerticalSpacing from "../../components/VerticalSpacing";

const Writing = styled.div`
	padding-top: 135px;
`;

const SarahPic = styled.img`
	padding-right: 80px;
	padding-top: 60px;
	max-height: 400px;
	max-width: 300px;
`;

const AboutTile = () => (
	<Tile height={675}>
		<SarahPic src={blueSarah} alt="Picture of Sarah" />

		<Writing>
			<Heading>
				About
			</Heading>

			<Paragraph>
				<p>
					I graduated from the University of East London in 2013 with a BSc(Hons) in Podiatric Medicine. 
				</p>

				<p>
					I am registered with the Healthcare Professions Council and am also a member of the Society of Chiropodists and Podiatrists.
					To keep up to date, I regularly attend professional development courses and keep current with the latest research.
				</p>

				<p>
					As well as a keen interest in the diabetic foot, my particular specialism is in musculoskeletal care. 
					I am particularly experienced in orthotics and have a detailed understanding of the diagnosis, treatment and prevention measures of issues related to an individual’s gait.
				</p>

				<p>
					My friendly approach to treating my patients helps me discover their needs, so they can
					maintain good foot health in everyday life. 
				</p> 
			</Paragraph>
		</Writing>
	</Tile>	
);

export default AboutTile;