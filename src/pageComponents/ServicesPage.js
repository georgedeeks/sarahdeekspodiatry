import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Item = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 500px;
	margin-bottom: 1rem;
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

const ServicesPage = () => 
	<Container>
		
		<Item>
			<Service>
				<Title>Routine assessment and treatment</Title>
				<Explanation>– Toenail cutting</Explanation>
				<Explanation>– Callous removal</Explanation>			
				<Explanation>– General advice, including for fungal nails</Explanation>	
			</Service>
			<Title>£45.00</Title>
		</Item>

		<Item>
			<Service>
				<Title>Biomechanical assessment </Title>
			</Service>
			<Title>£80.00</Title>
		</Item>

		<Item>
			<Service>
				<Title>Custom-made orthotics</Title>
				<Explanation>– Follows biomechanical assessment</Explanation>
			</Service>
			<Title>£varies</Title>
		</Item>

		<Item>
			<Service>
				<Title>Initial consultation (15 mins if required)</Title>
			</Service>
			<Title>£20.00</Title>
		</Item>

	</Container>	
; 

export default ServicesPage;