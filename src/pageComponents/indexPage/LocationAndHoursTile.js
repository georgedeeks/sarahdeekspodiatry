import React from "react";
import styled from "styled-components";

import PlainLink from '../../components/PlainLink';
import Tile from '../../components/Tile';
import Heading from '../../components/Heading';

import footOnlyLogo from "../../images/logo_symbol.png";

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 900px;

	/* MOBILE */
	@media (max-width:1050px)  {
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 42px;

	color: #646464;	
	font-family: Arial;	
	font-size: 18px;	
	line-height: 24px;

	/* MOBILE */
	@media (max-width:1050px)  {
		flex-direction: column;
		width: 100%;
		margin: 0;
		padding: 0 1rem 3rem 1rem;
		width: 90%;
		height: 10rem;
	}
`;

const Location = styled.div`
	height: 50px;	
	width: 400px;	

`;

const Times = styled.div`
	text-align: right;
	
	/* MOBILE */
	@media (max-width:1050px)  {
		text-align: left;

	}

`;

const Bold = styled.div`
	font-weight: bold;
`;

const Purple = styled.div`
	color: purple;
`;

const FootPicture = styled.img`
	width: 99px;
	height: 96px;
	top: 157px;
	position: relative;

	/* MOBILE */
	@media (max-width:1050px)  {
		visibility: hidden;
	}

`;

const SmallText = styled.div`
	font-size: 14px;
	font-style: italic;
	margin-left: 0.5rem;
`;

const Building = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const MobileWrapper = styled.div`
	height: 800px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;	
	padding-top: 30px;
`;

const SpecialDiv = styled.div`
	margin-bottom: 1rem;
`;

const LocationAndHoursContent = ({isMobile}) => (
	<React.Fragment>
		<ContentWrapper>
			<Heading>
				Location & Hours
			</Heading>

			<InfoWrapper>
				<Location>
					<Building>
						<PlainLink href="https://healthspace307.com/" target="_blank">
							<Bold>Health Space 307</Bold>
						</PlainLink>
						<SmallText>(link opens in a new window)</SmallText>
					</Building>
					{isMobile ? (
						<React.Fragment>
							<div>307 Regents Park Rd</div>
							<SpecialDiv>Finchley, London N3 1DP</SpecialDiv>
						</React.Fragment>
					) : (
						<div>307 Regents Park Rd, Finchley, London N3 1DP</div>
					)}
				</Location>

				<Times>
					<div>
						Monday-Thursday <b>CLOSED</b>
					</div>
					<Purple>
						Friday <b>12:00 – 18:00</b>
					</Purple>
				</Times>
			</InfoWrapper>

			{isMobile ? (
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.302179388684!2d-0.1985182842266448!3d51.599351579650374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617521178e1cb%3A0x691313c53747e04d!2sFinchley+Osteopathy+Clinic!5e0!3m2!1sen!2suk!4v1565564708951!5m2!1sen!2suk" 
					width="90%" 
					height="45%" 
					frameBorder="0" 
					style={{"border" : "0"}}
					allowFullScreen
					title="google-maps"
				/>
			) : (
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.302179388684!2d-0.1985182842266448!3d51.599351579650374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617521178e1cb%3A0x691313c53747e04d!2sFinchley+Osteopathy+Clinic!5e0!3m2!1sen!2suk!4v1565564708951!5m2!1sen!2suk" 
					width="900" 
					height="450" 
					frameBorder="0" 
					style={{"border" : "0"}}
					allowFullScreen
					title="google-maps"
				/>
			)}
			

			<FootPicture src={footOnlyLogo} alt="Foot logo" />

		</ContentWrapper>
	
	</React.Fragment>	
);

const LocationAndHoursTile = () => {
	var mq = window.matchMedia( "(max-width: 1050px)" );
	if (mq.matches) {
		// window width is at less than 1050px
		// mq.matches is mobile view

		return (
			<MobileWrapper id="location-hours">
				<LocationAndHoursContent isMobile={mq.matches} />
			</MobileWrapper>
		);
	}
	else {
		// window width is greater than 1050px

		return (
			<Tile height={834} id="location-hours">
				<LocationAndHoursContent isMobile={mq.matches} />
			</Tile>
		);
	}
};

export default LocationAndHoursTile;