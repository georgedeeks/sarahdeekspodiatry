import React from "react";
import styled from "styled-components";

import PlainLink from '../../components/PlainLink';

import footOnlyLogo from "../../images/logo_symbol.png";
import hcpcLogo from '../../images/hcpc-logo-300x254.jpg';
import socPandCLogo from '../../images/soc-chi-pod.png';

const NativeFooter = styled.footer`
	background-color: #EBF0EF;
  position: relative;
  left: 0;
  bottom: 0;
  height: 261px; /* matches global.css body margin-bottom */
  width: 100%;
	overflow: hidden;
	
	display: flex;
	flex-direction: column;
`;

const Copyright = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;

	font-size: 12px;
`;

const FootPicture = styled.img`
	width: 99px;
	height: 96px;
	top: -48px;
	
	position: relative;

	/* MOBILE */
	@media (max-width:1050px)  {
		top: 10px;
	}
`;

const BackgroundContainer = styled.div`
	height: 48px;
	justify-content: center;
	display: flex;
`;

const ContentContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-apart;
	padding: 1rem 30px;

	color: #646464;	
	font-family: Arial;	
	font-size: 18px;	
	line-height: 24px;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

`;

const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	justify-content: flex-start;

`;

const HCPCPicture = styled.img`
	zoom: 24%;
	padding: 10px;
`;

const SPACPicture = styled.img`
	zoom: 24%;

`;

const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;

	/* MOBILE */
	@media (max-width:1050px)  {
		padding-top: 3.5rem;
	}
`;

const PictureFrameLeft = styled.div`
	display: flex;
	justify-content: flex-start;
	flex: 1;

`;

const PictureFrameRight = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;

`;

const Title = styled.div`
	font-weight: bold;
	margin-bottom: 0.4em;
`;

const ContactPlainLink = styled(PlainLink)`
	margin-left: 0.125em;
`;

const ContactType = styled.span`
	font-style: italic;
	color: purple;
	opacity: 0.75;
`;

const DesktopFooter = () => {
	return (
		<NativeFooter>
		
			<BackgroundContainer>
				<FootPicture src={footOnlyLogo} alt="Foot logo" />
			</BackgroundContainer>
			
			<ContentContainer>
					
					<LogoContainer>

						<PictureFrameLeft>
							<SPACPicture src={socPandCLogo} alt="SPAC logo" />
						</PictureFrameLeft>

						<TextBlock>
							<Title>Sarah Deeks Podiatry</Title>
							<div>
								<ContactType>Tel: </ContactType>
								<ContactPlainLink href="tel:+447824159320"> 
									+44(0)7824159320
								</ContactPlainLink>
							</div>						
							<div>
								<ContactType>Email: </ContactType> 							
								<ContactPlainLink href="mailto:sarahjdeeks@gmail.com"> 
									sarahjdeeks@gmail.com
								</ContactPlainLink>
							</div>
						</TextBlock>

						<PictureFrameRight>
							<HCPCPicture src={hcpcLogo} alt="HCPC logo" />
						</PictureFrameRight>

					</LogoContainer>

				<Copyright>
					Copyright © George Deeks 2019
					{new Date().getFullYear() > 2019 && (
						' ‒ ' + new Date().getFullYear()
					)}
				</Copyright>

			</ContentContainer>

		</NativeFooter>
	);
};

const MobileFooter = () => {
	return (
		<NativeFooter>
		
			<BackgroundContainer>
				<FootPicture src={footOnlyLogo} alt="Foot logo" />
			</BackgroundContainer>
			
			<ContentContainer>
				
				<TextBlock>
					<Title>Sarah Deeks Podiatry</Title>
					<div>
						<ContactType>Tel: </ContactType>
						<ContactPlainLink href="tel:+447824159320"> 
							+44(0)7824159320
						</ContactPlainLink>
					</div>						
					<div>
						<ContactType>Email: </ContactType> 							
						<ContactPlainLink href="mailto:sarahjdeeks@gmail.com"> 
							sarahjdeeks@gmail.com
						</ContactPlainLink>
					</div>
				</TextBlock>

				<Copyright>
					Copyright © George Deeks 2019
					{new Date().getFullYear() > 2019 && (
						' ‒ ' + new Date().getFullYear()
					)}
				</Copyright>

			</ContentContainer>

		</NativeFooter>
	);
};

const Footer = () => {
	if (typeof window !== `undefined`) {
		var mq = window && window.matchMedia( "(max-width: 1050px)" );
		if (mq.matches) {
			return (
				<MobileFooter />
			);
		}
	}

	return (
		<DesktopFooter />
	);
	
};

export default Footer;