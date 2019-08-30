import React from "react";
import styled from "styled-components";

import Tile from '../../components/Tile';
import Heading from '../../components/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const ServiceSquare = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid white;
	margin: 45px 45px;

	height: 300px;
	width: 340px;
	background-color: #FFFFFF;
	box-shadow: 0 2px 4px 0 rgba(200,200,200,0.5);
	
`;

const TopServiceSquare = styled(ServiceSquare)`
	margin-top: 0;
`;

const BottomServiceSquare = styled(ServiceSquare)`
	margin-bottom: 60px;
`;

const Service = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const Explanation = styled.div`
	font-style: italic;
	margin-left: 2rem;
`;

const Title = styled.div`
	font-size: 18px;
`;

const FlexDirectionRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const Wrapper = styled.div`
	display: flex; 
	flex-direction: column;
	align-items: center;
`;

const ServicesTile = () => (
	<Tile height={860} background="#EDEAF2">
		<Wrapper>
			<Heading>
				Services
			</Heading>
	
			<Container>
				<FlexDirectionRow>
					<TopServiceSquare>
						<Service>
							<Title>Routine assessment and treatment</Title>
							<Explanation>– Toenail cutting</Explanation>
							<Explanation>– Callous removal</Explanation>			
							<Explanation>– General advice, including for fungal nails</Explanation>	
						</Service>
						<Title>£45.00</Title>
					</TopServiceSquare>

					<TopServiceSquare>
						<Service>
							<Title>Biomechanical assessment </Title>
						</Service>
						<Title>£80.00</Title>
					</TopServiceSquare>
				</FlexDirectionRow>
				
				<FlexDirectionRow>
					<BottomServiceSquare>
						<Service>
							<Title>Custom-made orthotics</Title>
							<Explanation>– Follows biomechanical assessment</Explanation>
						</Service>
						<Title>£varies</Title>
					</BottomServiceSquare>

					<ServiceSquare>
						<Service>
							<Title>Initial consultation (15 mins if required)</Title>
						</Service>
						<Title>£20.00</Title>
					</ServiceSquare>
				</FlexDirectionRow>
			</Container>	

			<VerticalSpacing size={1} />
		</Wrapper>
	</Tile>	
);

export default ServicesTile;