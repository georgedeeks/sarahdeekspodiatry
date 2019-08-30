import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

import { Link } from "gatsby";

const Italic = styled.div`
	font-style: italic;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;	
`;

const Writing = styled.div`
	margin-right: 40px;
`;

const VerticalSpacing = styled.div`
	margin-bottom: 30px;
`;

const LocationPage = () =>
	<Container>		
		<iframe 
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.302179388684!2d-0.1985182842266448!3d51.599351579650374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617521178e1cb%3A0x691313c53747e04d!2sFinchley+Osteopathy+Clinic!5e0!3m2!1sen!2suk!4v1565564708951!5m2!1sen!2suk" 
			width="600" height="450" 
			frameborder="0" 
			style={{"border" : "0"}}
			allowfullscreen
			title="google-maps"
		/>
		
	</Container>		
;

// LocationPage.propTypes = {
// 	location: PropTypes.object,
// };

export default LocationPage;