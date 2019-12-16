import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";

import hcpcLogo from '../../images/hcpc-logo-300x254.jpg';
import socPandCLogo from '../../images/soc-chi-pod.png';
import footprintLeft from "../../images/footprint-top-left-foot.svg";

import Paragraph from '../../components/Paragraph';

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

const SarahPicWrapper = styled.div`
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
	max-height: 45px;
	float: right;
	padding-right: 80px;

	/* MOBILE */
	@media (max-width:1050px)  {
		padding: 15px;
	}
`;

const SPACPictureWrapper = styled.img`
	max-height: 45px;
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
	/* mobile */
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
	height: 1275px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 30px;

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		height: 1175px;
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

const AnotherBackgroundFootPicture = styled.img`
	/* mobile first */
	display: none;

	@media (min-width: 1050px)  {
		display: initial;
		padding-left: 10%;
	}	
`;

export const FILES_QUERY = graphql`
	query FilesQuery {
		sarahFile: file(relativePath: { eq: "sarah-profile.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const AboutTile = () => {
	// TODO use a fragment
	const data = useStaticQuery(FILES_QUERY);
	const sarahFluid = get(data, 'sarahFile.childImageSharp.fluid', null);
	return (
		<Wrapper id="about">
			<MobileHeading>
				About
			</MobileHeading>

			<MegaWrapper>

				<PicsWrapper>
					{sarahFluid && (
						<SarahPicWrapper>
							<Img fluid={sarahFluid} alt="Picture of Sarah" />
						</SarahPicWrapper>
					)}				
					<LogosWrapper>
						<SPACPictureWrapper src={socPandCLogo} alt="SPAC logo" />
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

					<AnotherBackgroundFootPicture src={footprintLeft} alt="Background image of purple foot" />

				</Writing>
			</MegaWrapper>
		</Wrapper>
	);
};

export default AboutTile;