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
	margin-top: 30px;
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

const MobileWrapper = styled.div`
	background: #EBF0EF;
	height: 400px;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 50px;
`;

const IntroTileContent = ({isMobile}) => {
	return (
		<React.Fragment>
			<Paragraph>
				<VerticalSpacing size={isMobile ? 30 : 50} />
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
							<ContactPlainLink href="tel:+447824159320"> 
								+44(0)7824159320
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

			{!isMobile && <FootPicture src={feetOnRock} alt="Picture of feet" />}
		</React.Fragment>
	);

}

const IntroTile = () => {
	var mq = {matches: false};
	if (typeof window !== `undefined`) {
		mq = window && window.matchMedia( "(max-width: 1050px)" );
	}

	if (mq.matches) {
		return (
			<MobileWrapper>
				<IntroTileContent isMobile={mq.matches} />
			</MobileWrapper>
		);
	}
	else {
		return (
			<Tile background="#EBF0EF" height={586} id="intro">
		
			<BackgroundWrapper>
		
				<Wrapper>
	
					<IntroTileContent />
	
				</Wrapper>
	
				<BackgroundFootPicture src={footprintTopRightFoot} alt="Background image of foot" />
	
			</BackgroundWrapper>
	
	
			</Tile>	
		);
	}
};

export default IntroTile;