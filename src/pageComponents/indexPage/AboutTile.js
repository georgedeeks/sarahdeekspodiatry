import React from "react";
import styled from "styled-components";

import blueSarah from "../../images/sarah-profile.png";

import hcpcLogo from '../../images/hcpc-logo-300x254.jpg';
import socPandCLogo from '../../images/soc-chi-pod.png';
import footprintTopLeftFoot from "../../images/footprint-top-left-foot.svg";


import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import VerticalSpacing from "../../components/VerticalSpacing";

const Writing = styled.div`
	padding-top: 135px;

	/* MOBILE */
	@media (max-width:1050px)  {
		padding-top: 20px;
	}

`;

const SarahPic = styled.img`
	padding-right: 80px;
	padding-top: 60px;
	max-height: 400px;
	max-width: 300px;
	padding-bottom: 15px;

	/* MOBILE */
	@media (max-width:1050px)  {
		padding: 0;
	}
`;

const PicsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	/* MOBILE */
	@media (max-width:1050px)  {
		align-items: center;
		justify-content: center;
	}
`;

const LogosWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 380px;

	/* MOBILE */
	@media (max-width:1050px)  {
		width: 300px;
		align-items: center;
		padding-top: 5px;
	}

`;

const HCPCPicture = styled.img`
	zoom: 17%;
	padding: 15px;
	padding-right: 480px;

	/* MOBILE */
	@media (max-width:1050px)  {
		padding: 15px;
	}
`;

const SPACPicture = styled.img`
	zoom: 17%;
`;

const BackgroundFootPicture = styled.img`
	top: 30px;
`;

const MobileWrapper = styled.div`
	background: white;
	height: 1200px;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 30px;
`;



const AboutContent = ({isMobile}) => (
	<React.Fragment>

		{isMobile && (
			<Heading>
				About
			</Heading>
		)}

		<PicsWrapper>
			<SarahPic src={blueSarah} alt="Picture of Sarah" />
			<LogosWrapper>
				<SPACPicture src={socPandCLogo} alt="SPAC logo" />
				<HCPCPicture src={hcpcLogo} alt="HCPC logo" />
			</LogosWrapper>
		</PicsWrapper>

		<Writing>
			{!isMobile && (
				<Heading>
					About
				</Heading>
			)}			

			<Paragraph>
				<p>
					I graduated from the 
					<b> University of East London </b> 
					in 
					2013 
					with a 
					<b> BSc(Hons) in Podiatric Medicine</b>. 
				</p>

				<p>
					I am registered with the 
					<b> Healthcare Professions Council </b> 
					and am also a member of the 
					<b> Society of Chiropodists and Podiatrists</b>.
					To keep up to date, I regularly attend professional development courses and keep current with the latest research.
				</p>

				<p>
					As well as a keen interest in the 
					<b> diabetic foot</b>
					, my particular specialism is in 
					<b> musculoskeletal care</b>. 
					I am particularly experienced in 
					<b> orthotics </b> 
					and have a detailed understanding of the diagnosis, treatment and prevention measures of issues related to an individual’s gait.
				</p>

				<p>
					My friendly approach to treating my patients helps me discover their needs, so they can
					maintain good foot health in everyday life. 
				</p> 
			</Paragraph>

			<BackgroundFootPicture src={footprintTopLeftFoot} alt="Background image of foot" />

		</Writing>
	</React.Fragment>
)

const AboutTile = () => {
	var mq = {matches: false};
	if (typeof window !== `undefined`) {
		mq = window && window.matchMedia( "(max-width: 1050px)" );
	}

	if (mq.matches) {
		return (
			<MobileWrapper id="about">
				<AboutContent isMobile={mq.matches} />
			</MobileWrapper>
		);
	}
	else {
		return (
			<Tile height={675} id="about">
				<AboutContent isMobile={mq.matches} />
			</Tile>
		);
	}
};

export default AboutTile;