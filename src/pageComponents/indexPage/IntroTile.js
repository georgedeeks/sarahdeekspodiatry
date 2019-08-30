import React from "react";
import styled from "styled-components";

import feetOnRock from "../../images/feet-on-rock.png";

import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import VerticalSpacing from '../../components/VerticalSpacing';

const FootPicture = styled.img`
	height: 100%;
	margin-left: 80px;
`;

const IntroTile = () => (
	<Tile background="#EBF0EF" height="586px">
		
		<Paragraph>

			<VerticalSpacing size={30} />

			<p>
				I run a podiatric clinic on Friday afternoons in a modern setting on Finchley Road, West London.
			</p>

			<p>
				I am HCPC-certified podiatrist with over 5 years' experience working in London, and offer a range of services.
			</p>
			
			<p>
				Get in touch today to make an appointment.
			</p>
		</Paragraph>
		
		<FootPicture src={feetOnRock} alt="Picture of feet" />
			
	</Tile>	
);

export default IntroTile;