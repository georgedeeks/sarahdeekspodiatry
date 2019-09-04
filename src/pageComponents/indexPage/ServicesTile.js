import React from "react";
import styled from "styled-components";

import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ServiceSquare = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 280px;
	height: 300px;

	border: 1px solid white;
	margin: 45px 45px;

	background-color: #FFFFFF;
	box-shadow: 0 2px 4px 0 rgba(200,200,200,0.5);
	
	> * {
		width: 220px;
	}

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		width: 340px;

		> * {
			width: 260px;
		}
	}

	/* desktop */
	@media (min-width: 1050px)  {
		${props => props.desktopMr && props.desktopMr === '80' && `
			margin-right: 80px;
		`}
	}
`;

const ExplanationPoint = styled.li`
	width: 220px;
	color: #646464;
	font-family: Arial;
	font-size: 18px;
	line-height: 21px;

	padding-left: 1em; 
	text-indent: -.7em;
	
	::before {
		font-size: 14px;
		content: "•";
		color: #ACD4CE; 
		margin-right: 0.25em;
	}

	/* iphone 6 and above */
	@media (min-width: 375px)  {
		padding-left: 0.5em; 
		font-size: 18px;
		width: 260px;
		line-height: 21px;

		::before {
			margin-right: 0.5em;
			font-size: 20px;
		}
	}	
`;

const ExplanationText = styled.div`
	width: 260px;
	color: #646464;
	font-family: Arial;
	font-size: 18px;
	line-height: 21px;
	text-align: center;
`;

const BottomExplanationText = styled(ExplanationText)`
	margin-top: 25px;
	margin-bottom: 85px;
	font-style: italic;
`;

const SpecialBottomExplanationText = styled(BottomExplanationText)`
	margin-bottom: 60px;
	font-style: normal;
`;



const Title = styled.div`
	height: 46px;
	width: 260px;
	color: #444444;
	font-family: Arial;
	font-size: 21px;
	font-weight: bold;
	line-height: 24px;
	text-align: center;
	padding-top: 32px;
`;

const Divider = styled.div`
	box-sizing: border-box;
	height: 2px;
	width: 105px;
	border: 2px solid #ACD4CE;
`;

const SpecialDivider = styled(Divider)`
`;

const Wrapper = styled.div`
	display: flex; 
	flex-direction: column;
	align-items: center;
`;

const Price = styled.div`

	color: #7ECDC1;
	font-family: Arial;
	font-size: 24px;
	line-height: 28px;
	padding-bottom: 37px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

`;


const List = styled.ul`
	padding: 0;
	margin-left: 0; /*2.25rem;*/
  list-style: none;

	`;

const ServicesHeading = styled.h2`
	color: #646464;
	font-weight: bold;
	font-size: 42px;
	font-family: Arial;
	margin: 0 0 50px 0;

	/* desktop */
	@media (min-width: 1050px)  {
		color: #646464;
		font-weight: bold;
		font-size: 42px;
		font-family: Arial;
		margin: 4rem 0 50px 0;
	}
`;

// TODO do i need ant-row installed?
const ServicesWrapper = styled.div`
	background: #EDEAF2;

	height: 1470px;
	width: 100%;
	flex-direction: column;
	
	padding-top: 30px;

	/* desktop */
	@media (min-width: 1050px)  {
		height: 1000px;
	}
`;

const MobileSquare = styled(ServiceSquare)`
	margin: 10px;
`;

const SquareOne = () => (
	<React.Fragment>
		<Title>Routine assessment and treatment</Title>
		<Divider />
		<List>
			<ExplanationPoint>Toenail cutting</ExplanationPoint>
			<ExplanationPoint>Callous removal</ExplanationPoint>			
			<ExplanationPoint>General advice, including for fungal nails</ExplanationPoint>	
		</List>							
		<Price>£45.00</Price>
	</React.Fragment>
);

const SquareTwo = () => (
	<React.Fragment>
		<Title>Biomechanical assessment </Title>
		<Divider />
		<ExplanationText>
			An examination of the lower limbs, looking at their structure, 
			alignment, strengths and weaknesses
		</ExplanationText>
		<Price>£80.00</Price>
	</React.Fragment>
);

const SquareThree = () => (
	<React.Fragment>
		<Title>Initial consultation</Title>
		<SpecialDivider />
		<SpecialBottomExplanationText>
			A short meeting, 15 minutes if required, to assess foot health and treatment plan.
		</SpecialBottomExplanationText>
		<Price>£20</Price>
	</React.Fragment>
);

const SquareFour = () => (
	<React.Fragment>
		<Title>Custom-made orthotics</Title>
		<Divider />
		<BottomExplanationText>
			Follows biomechanical assessment
		</BottomExplanationText>
		<Price>£ varies</Price>
	</React.Fragment>
);

const TwoSquares = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}
`;

const TwoSquaresBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	/* desktop */
	@media (min-width: 1050px)  {
		flex-direction: row;
		justify-content: center;
		width: 100%;
		margin-top: 50px;
	}
`;

const ServicesTile = () => {
	return (
		<ServicesWrapper id="services">
			<Wrapper>
				<ServicesHeading>Services</ServicesHeading>

				<Container>

					<TwoSquares>
						<MobileSquare desktopMr="80">
							<SquareOne />
						</MobileSquare>

						<MobileSquare>
							<SquareTwo />
						</MobileSquare>
					</TwoSquares>
					
					<TwoSquaresBottom>
						<MobileSquare desktopMr="80">
							<SquareThree />
						</MobileSquare>

						<MobileSquare>
							<SquareFour />
						</MobileSquare>
					</TwoSquaresBottom>
				
				</Container>

				<VerticalSpacing size={1} />
			</Wrapper>
		</ServicesWrapper>
	);
};

export default ServicesTile;