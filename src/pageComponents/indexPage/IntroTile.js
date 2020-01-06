import React from "react";
import styled from "styled-components";
import hcpcLogo from '../../images/hcpc-logo-300x254.jpg';
import socPandCLogo from '../../images/soc-chi-pod.png';

import feetOnRock from "../../images/feet-on-rock.png";
import sarahPic from "../../images/sarah-profile.png";
import Img from "gatsby-image";
import get from "lodash/get";
import footprintTopRightFoot from "../../images/footprint-top-right-foot.svg";

import PlainLink from '../../components/PlainLink';
import Paragraph from '../../components/Paragraph';

import { useStaticQuery, graphql } from "gatsby";

const SarahPicWrapper = styled.div`
	max-width:240px;
	width: auto;
	height: auto;
`;

const Wrapper = styled.div`
	/* mobile first */
	
	@media (min-width: 1050px)  {
		display: flex;
		flex-direction: row;
		margin-top: 90px;
	}
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
	font-size: 18px;	
	line-height: 24px;
	margin-bottom: 0.125rem;
	font-style: italic;
	color: blue;
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

const IntroWrapper = styled.div`
	/* mobile first */
	background: white;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 50px;
	display: relative;
	width: 100%;

	@media (min-width: 1050px)  {
		display: flex;
		justify-content: center;
		min-height: 586px;
		display: inline-grid;					
	}
`;

const VerticalSpacingDiv = styled.div`
	height: 10px;

	@media (min-width: 1050px)  {
		height: 10px;			
	}
`;

const LinkWrapper = styled.span`
	display: flex;
	justify-content: flex-start;
`;

const PicsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 320px;
	padding-left: 20px;

	/* MOBILE */
	@media (max-width:1050px)  {
		align-items: center;
		justify-content: center;
	}
`;

const LogosWrapper = styled.div`
	flex: auto;
	padding-top: 20px;

	/* MOBILE */
	@media (max-width:1050px)  {
		width: 320px;
		align-items: center;
		padding-top: 5px;
	}
`;

const HCPCPicture = styled.img`
	max-height: 45px;
	float: right;
`;

const SPACPictureWrapper = styled.img`
	max-height: 45px;
`;

const SarahPic = styled.img`
	max-height: 320px;
`;

export const FILES_QUERY = graphql`
	query FilesQuery {
		sarahFile: file(relativePath: { eq: "sarah-profile.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const IntroTile = () => {
	const data = useStaticQuery(FILES_QUERY);
	const sarahFluid = get(data, 'sarahFile.childImageSharp.fluid', null);
	return (
		<IntroWrapper id="intro">

			<Wrapper>
				<Paragraph>
					<VerticalSpacingDiv />
					<p>
						Hi, I'm Sarah. I run a podiatric clinic in a modern setting in 
						{" "}<b>Finchley</b>, North London.
					</p>
					<p>
						I am a HCPC-certified podiatrist with over 5 years&apos; experience working across London, 
						and offer a range of services such as:
					</p>
					<ul>
						<li>Routine foot assessments</li>
						<li>Skin and nail care</li>
						<li>Corns and callus removal</li>
						<li>Toenail cutting and ingrown toenail treatment</li>
						<li>Verrucae, fungal nails and infections</li>
						<li>Cracked heels</li>
						<li>Biomechanical assessment and custom-made orthotics</li>
					</ul>
					<p>
						Get in touch today to make an appointment and see how I can help you.
					</p>
					<p>
						<TextBlock>
							<Tel>
								<Title>Call:</Title>
								<LinkWrapper>
									<ContactPlainLink href="tel:+447824159320"> 
										07824 159 320
									</ContactPlainLink>
								</LinkWrapper>								 
							</Tel>
							<Tel>
								<Title>Email:</Title>
								<LinkWrapper>
									<ContactPlainLink href="mailto:sarahjdeeks@gmail.com"> 
										sarahjdeeks@gmail.com
									</ContactPlainLink>
								</LinkWrapper>								
							</Tel>
							<Tel>
								<LinkWrapper>
									<ContactPlainLink href="https://www.picktime.com/sarahdeekspodiatry">Or book online</ContactPlainLink>
								</LinkWrapper>
							</Tel>
						</TextBlock>
					</p>
				</Paragraph>

				<PicsWrapper>
					<VerticalSpacingDiv />
					{sarahFluid && (
						<SarahPicWrapper>
							<SarahPic src={sarahPic} />
						 	{/* <Img fluid={sarahFluid} alt="Picture of Sarah" /> */}
							 <SPACPictureWrapper src={socPandCLogo} alt="SPAC logo" />
							<HCPCPicture src={hcpcLogo} alt="HCPC logo" />
						</SarahPicWrapper>
					)}				
				</PicsWrapper>
			</Wrapper>
		</IntroWrapper>
	);
};

export default IntroTile;