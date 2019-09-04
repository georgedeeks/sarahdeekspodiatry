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
		display: flex;
		flex-direction: row;
		width: 100%;
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

	display: none;

	/* desktop */
	@media (min-width: 1050px)  {
		display: relative;	
		top: 30px;
	}
`;

const MobileHeading = styled.h2`
	color: #646464;
	font-weight: bold;
	font-size: 42px;
	font-family: Arial;
	margin: 0 0 1em 1em;
	display: flex;
	justify-content: center;

	/* desktop */
	@media (min-width: 1050px)  {
		display: none;
		padding: 0;
		margin: 0;
		height: 0px;
	}
`;

const DesktopHeading = styled.h2`
	/*mobile */
	display: none;
	margin: 0;
	padding: 0;
	width: 0;
	height: 0;

	/* desktop */
	@media (min-width: 1050px)  {
		display: initial;
		color: #646464;
		font-weight: bold;
		font-size: 42px;
		font-family: Arial;	
		margin: 0 0 50px 0;
		padding-bottom: 50px;
	}
`;

const Wrapper = styled.div`
	background: white;
	width: 100%;
	height: 1675px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 30px;

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		height: 1375px;
	}

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: column;
		height: 900px;	
	}
`;

const MegaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	justify-content: flex-start;
	height: calc(100% - 90px);

	justify-content: space-evenly;

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	}
`;

const AboutTile = () => {
	return (
		<Wrapper id="about">
			<MobileHeading>
				About
			</MobileHeading>

			<MegaWrapper>

				<PicsWrapper>
					<SarahPic src={blueSarah} alt="Picture of Sarah" />
					<LogosWrapper>
						<SPACPicture src={socPandCLogo} alt="SPAC logo" />
						<HCPCPicture src={hcpcLogo} alt="HCPC logo" />
					</LogosWrapper>
				</PicsWrapper>

				<Writing>
					<DesktopHeading>
						About
					</DesktopHeading>

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

			</MegaWrapper>

		</Wrapper>
	);
};

export default AboutTile;