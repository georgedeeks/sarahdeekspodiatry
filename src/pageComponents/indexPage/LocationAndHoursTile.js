import React from "react";
import styled from "styled-components";

import PlainLink from '../../components/PlainLink';

import footOnlyLogo from "../../images/logo_symbol.png";

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 65%;

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
	
	font-size: 18px;	
	line-height: 24px;

	/* MOBILE VIEW */
	@media (max-width:1050px)  {
		flex-direction: column;
		width: 100%;
		margin: 0;
		padding: 0 1rem 3rem 1rem;
		width: 90%;
		height: 9rem;
	}
`;

const Location = styled.div`
	height: 50px;	
	width: 300px;

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		width: 350px;	
	}	

	/* iphone 7 and above */
	@media (min-width: 500px)  {
		width: 400px;	
	}
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
	display: none;
	width: 0;
	height: 0;
	top: 0;

	/* desktop */
	@media (min-width:1050px)  {
		display: initial;
		width: 99px;
		height: 96px;
		top: calc(200px + -42px + 64px - 128px);
		position: relative;
		z-index: 30;
	} 
`;

const SmallText = styled.div`
	/* smallest viewport */
	display: none;

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		font-style: italic;
		margin-left: 0.5rem;
		font-size: 12px;
		display: initial;
	}

	/* desktop */
	@media (min-width: 1050px)  {
		font-size: 14px;
		margin-left: 0.5rem;
	}	
`;

const Building = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const LocationWrapper = styled.div`
	height: 800px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;	
	padding-top: 30px;

	/* desktop */
	@media (min-width: 1050px)  {
		height: 706px;
		justify-content: flex-start;
	}	
`;

const Area = styled.div`
`;

const Address = styled.div`
	display: flex;
	flex-direction: column;

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: row;
	}	
`;

const StyledHeading = styled.h2`
	color: #646464;
	font-weight: bold;
	font-size: 42px;	margin: 0 0 1em 1em;

	/* iPhone 6+ */
	@media (min-width:376px)  {
		margin-left: 0;
	}

	/* desktop */
	@media (min-width:1050px)  {
		margin: 25px 0 50px 0;
	}
`;

const OnlyDesktop = styled.div`
	/* mobile */
	display: none;

	/* desktop */
	@media (min-width:1050px)  {
		display: initial;
	}
`;

const LocationAndHoursTile = () => {
	return (
		<LocationWrapper id="location-hours">
			<ContentWrapper>
				<StyledHeading>
					Location &amp; Hours
				</StyledHeading>

				<InfoWrapper>
					<Location>
						<Building>
							<PlainLink href="https://healthspace307.com/" target="_blank">
								<Bold>Health Space 307</Bold>
							</PlainLink>
							<SmallText>(link opens in a new window)</SmallText>
						</Building>
						<Address>
							<div>307 Regents Park Rd</div>
							<OnlyDesktop>,&nbsp;</OnlyDesktop>
							<Area>Finchley, London N3 1DP</Area>
						</Address>
						<div>Nearest station: Finchley Central (5 minutes walk)</div>
					</Location>

					<Times>
						<Purple>
							Appointments are available on Fridays.
						</Purple>
					</Times>
				</InfoWrapper>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9913.220282450782!2d-0.196334!3d51.5992986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5af54b385d4f03f!2sHealth%20Space%20307!5e0!3m2!1sen!2suk!4v1576521467030!5m2!1sen!2suk" 
					width="95%" 
					height="350px" 
					frameBorder="0" 
					style={{"border" : "0"}}
					allowFullScreen
					title="google-maps"
				/>				

			</ContentWrapper>

			<FootPicture src={footOnlyLogo} alt="Foot logo" />

		</LocationWrapper>
	);
};

export default LocationAndHoursTile;