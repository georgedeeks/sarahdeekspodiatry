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
	width: 300px;
	margin-bottom: 1rem;
`;

const Service = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const Day = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const Title = styled.div`
	font-size: 18px;
`;

const Closed = styled.div`
	font-size: 18px;
	font-style: italic;

`;

const ServicesPage = () => 
	<Container>
		
		<Item>
			<Service>
				<Day>Monday</Day>
			</Service>
			<Closed>CLOSED</Closed>
		</Item>

		<Item>
			<Service>
				<Day>Tuesday</Day>
			</Service>
			<Closed>CLOSED</Closed>
		</Item>

		<Item>
			<Service>
				<Day>Wednesday</Day>
			</Service>
			<Closed>CLOSED</Closed>
		</Item>

		<Item>
			<Service>
				<Day>Thursday</Day>
			</Service>
			<Closed>CLOSED</Closed>
		</Item>

		<Item>
			<Service>
				<Day>Friday</Day>
			</Service>
			<Title>12:00 – 18:00</Title>
		</Item>

	</Container>	
; 

export default ServicesPage;