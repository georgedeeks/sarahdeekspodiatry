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
	display: none;
	
	/* desktop */
	@media (min-width:1050px)  {
		display: flex;
		height: 48px;
	}
`;

const ContentContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-apart;
	padding: 1rem 30px;

	color: #646464;	
	
	font-size: 18px;	
	line-height: 24px;
`;

const LogoContainer = styled.div`
	height: 100%;
	width: 100%;

	/* desktop */
	@media (min-width:1050px)  {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
	}
`;

const HCPCPicture = styled.img`
	display: none;

	/* desktop */
	@media (min-width:1050px)  {
		height: 80px;
		padding: 10px;
		display: initial;
	}
`;

const SPACPicture = styled.img`
	display: none;
	
	/* desktop */
	@media (min-width:1050px)  {
		height: 80px;
		display: initial;
	}
`;

const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

const PictureFrameLeft = styled.div`
	display: none;

	/* desktop */
	@media (min-width:1050px)  {
		display: flex;
		justify-content: flex-start;
		flex: 1;
	}
`;

const PictureFrameRight = styled.div`
	display: none;

	/* desktop */
	@media (min-width:1050px)  {
		display: flex;
		justify-content: flex-end;
		flex: 1;
	}
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
	color: #646464;
	opacity: 0.9;
`;

const Footer = () => {
	return (
		<NativeFooter>
		
			<BackgroundContainer>
			</BackgroundContainer>
			
			<ContentContainer>
					
					<LogoContainer>

						<PictureFrameLeft>
							<SPACPicture src={socPandCLogo} alt="SPAC logo" />
						</PictureFrameLeft>

						<TextBlock>
							<Title>Foot Care Finchley</Title>
							<div>
								<ContactType>Call: </ContactType>
								<ContactPlainLink href="tel:+447824159320"> 
									07824 159 320
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

export default Footer;