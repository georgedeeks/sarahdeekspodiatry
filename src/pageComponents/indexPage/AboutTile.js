import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";

import footprintLeft from "../../images/footprint-top-left-foot.svg";

import Paragraph from '../../components/Paragraph';

const Writing = styled.div`
	padding-top: 25px;

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

const MobileHeading = styled.h2`
	color: #646464;
	font-weight: bold;
	font-size: 42px;	margin: 0 0 1em 1em;
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
	
		margin: 0 0 50px 0;
		padding-bottom: 50px;
	}
`;

const Wrapper = styled.div`
	background: #EBF0EF;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 30px;

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: column;
		background-image: url("${footprintLeft}");
		background-repeat: no-repeat;
		background-position: bottom right 100px;
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
	// TODO use a fragment
	return (
		<Wrapper id="about">
			<MobileHeading>
				About
			</MobileHeading>

			<MegaWrapper>


				<Writing>
					<DesktopHeading>
						About
					</DesktopHeading>

					<Paragraph>
						<p>
							I graduated from the 
							<b> University of East London </b> 
							with a 
							<b> BSc(Hons) in Podiatric Medicine</b>. 
						</p>

						<p>
							I am registered with the 
							{" "}<b>HCPC</b>{" "}
							and am also a member of the 
							{" "}<b>Society of Chiropodists and Podiatrists</b> with over 5 years experience.
							I regularly attend professional development courses and keep current with the latest research.
						</p>

						<p>
							As a podiatrist, I can diagnose and treat all foot disorders and deformities and
							provide general foot care and advice. I treat a wide range of foot related
							problems over all age groups. I'm trained to assess problems including those
							associated with diabetes and arthritis, related to gait or foot
							structural abnormalities or caused by badly fitting footwear.
						</p>

						<p>
							My friendly approach to treating my patients helps me discover their needs, so they can
							maintain good foot health in everyday life. 
						</p> 
					</Paragraph>

				</Writing>
			</MegaWrapper>
		</Wrapper>
	);
};

export default AboutTile;