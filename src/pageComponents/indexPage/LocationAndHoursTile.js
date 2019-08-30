import React from "react";
import styled from "styled-components";

import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 900px;
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
`;

const Location = styled.div`
	height: 50px;	
	width: 400px;	

`;

const Times = styled.div`
	text-align: right;	

`;

const Bold = styled.div`
	font-weight: bold;
`;

const Purple = styled.div`
	color: purple;
`;

const ServicesTile = () => (
	<Tile height={834}>
		<ContentWrapper>
			<Heading>
				Location & Hours
			</Heading>

			<InfoWrapper>
				<Location>
					<Bold>Finchley Osteopathy Clinic</Bold>
					<div>307 Regents Park Rd, Finchley, London N3 1DP</div>
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

			<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.302179388684!2d-0.1985182842266448!3d51.599351579650374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617521178e1cb%3A0x691313c53747e04d!2sFinchley+Osteopathy+Clinic!5e0!3m2!1sen!2suk!4v1565564708951!5m2!1sen!2suk" 
				width="900" 
				height="450" 
				frameborder="0" 
				style={{"border" : "0"}}
				allowfullscreen
				title="google-maps"
			/>

		</ContentWrapper>
		
		
	</Tile>	
);

export default ServicesTile;