import React from "react";
import styled from "styled-components";

import footOnlyLogo from "../../images/logo_symbol.png";
import hcpcLogo from '../../images/hcpc-logo-300x254.jpg';
import socPandCLogo from '../../images/soc-chi-pod.png';

const NativeFooter = styled.footer`
	background-color: #EBF0EF;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 291px; /* matches global.css body margin-bottom */
  width: 100%;
	overflow: hidden;
	
	display: flex;
	flex-direction: column;
`;

const Copyright = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;
`;

const FootPicture = styled.img`
	width: 99px;
	height: 96px;
	top: -48px;
	
	position: relative;
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
	padding: 1rem;
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
	zoom: 37%;
	padding: 15px;
`;

const SPACPicture = styled.img`
	zoom: 37%;

`;

const TextBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;

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

const Footer = () => 
	<NativeFooter>
		
		<BackgroundContainer>
			<FootPicture src={footOnlyLogo} alt="Foot logo" />
		</BackgroundContainer>
		
		<ContentContainer>
				
				<LogoContainer>

					<PictureFrameLeft>
						<HCPCPicture src={hcpcLogo} alt="HCPC logo" />
					</PictureFrameLeft>

					<TextBlock>
						Sarah Deeks Podiatry
					</TextBlock>

					<PictureFrameRight>
						<SPACPicture src={socPandCLogo} alt="SPAC logo" />
					</PictureFrameRight>

				</LogoContainer>

			<Copyright>Copyright George Deeks 2019</Copyright>

		</ContentContainer>

	</NativeFooter>
;

export default Footer;