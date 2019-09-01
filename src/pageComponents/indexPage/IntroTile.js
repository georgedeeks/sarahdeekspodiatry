import React from "react";
import styled from "styled-components";

import feetOnRock from "../../images/feet-on-rock.png";
import footprintTopRightFoot from "../../images/footprint-top-right-foot.svg";


import Tile from '../../components/Tile';
import PlainLink from '../../components/PlainLink';
import Paragraph from '../../components/Paragraph';
import VerticalSpacing from '../../components/VerticalSpacing';

const FootPicture = styled.img`
  display: block;
  max-width:660px;
  max-height:320px;
  width: auto;
  height: auto;
	margin-left: 80px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 90px;
`;

const TextBlock = styled.span`
	display: flex;
	flex-direction: column;
	flex: 1;

	font-size: 1.5rem;

	margin-top: 1.5rem;
`;

const Title = styled.span`
	font-weight: bold;
	font-style: italic;

	color: mediumpurple;


	font-size: 18px;	
	line-height: 24px;

	margin-bottom: 0.125rem;

`;

const Contact = styled.span`
	display: flex;
	flex-direction: column;
`;

const Tel = styled(Contact)`
	margin-bottom: 1rem;
`;

const ContactPlainLink = styled(PlainLink)`
	font-size: 20px;	
	line-height: 24px;
`;

const BackgroundFootPicture = styled.img`
	top: 30px;
`;

const BackgroundWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const IntroTile = () => (
	<Tile background="#EBF0EF" height={586} id="intro">
		
		<BackgroundWrapper>


			<Wrapper>

				<Paragraph>
					<VerticalSpacing size={30} />
					<p>
						I run a podiatric clinic on 
						<b> Friday afternoons </b> in a modern setting on 
						<b> Finchley Road</b>, West London.
					</p>
					<p>
						I am a HCPC-certified podiatrist with over 5 years' experience working across London, 
						and offer a range of services.
					</p>
					<p>
						Get in touch today to make an appointment&hellip;
						
					</p>
					<p>
						<TextBlock>
							<Tel>
								<Title>Telephone:</Title>
								<ContactPlainLink href="tel:+447553460729"> 
									+44(0)7553460729
								</ContactPlainLink> 
							</Tel>
							<Contact>
								<Title>Email:</Title>
								<ContactPlainLink href="mailto:sarahjdeeks@gmail.com"> 
									sarahjdeeks@gmail.com
								</ContactPlainLink>
							</Contact>
						</TextBlock>
					</p>
				</Paragraph>

				<FootPicture src={feetOnRock} alt="Picture of feet" />

			</Wrapper>

			<BackgroundFootPicture src={footprintTopRightFoot} alt="Background image of foot" />

		</BackgroundWrapper>


	</Tile>	
);

export default IntroTile;