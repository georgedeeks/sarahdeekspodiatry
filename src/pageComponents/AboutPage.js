import React from "react";
import styled from "styled-components";

import sarah from "../images/sarah-profile.jpeg"; // Tell Webpack this JS file uses this image

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;	
`;

const Writing = styled.div`
	margin-right: 0px;
`;

const Picture = styled.img`
	height: 300px;
	width: 17%;
  margin-left: 60px;
`;

const AboutPage = () => 
	<Container>
		<Writing>
			<p>
				I graduated from the University of East London in 2013 with a BSc(Hons) in Podiatric Medicine. 
				My dissertation focused on foot diabetes and the impact it has on children.
			</p>

			<p>
				I am registered with the Healthcare Professions Council and am also a member of the Society of Chiropodists and Podiatrists.
				To keep up to date, I regularly attend professional development courses and keep current with the latest research.
			</p>

			<p>
				As well as a keen interest in the diabetic foot, my particular specialism is in musculoskeletal care. 
				I am particularly experienced in orthotics and have a detailed understanding of the diagnosis, treatment and prevention measures of issues related to an individual’s gait.
			</p>

			<p>
				My friendly approach to treating my patients helps me discover their needs. 
				This allows me the best chance to help (and help them) maintain good foot health for their everyday life.
			</p> 
		</Writing>

		<Picture src={sarah} alt="Sarah" />
	</Container>	
; 

export default AboutPage;