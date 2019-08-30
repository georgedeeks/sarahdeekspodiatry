import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

const Italic = styled.div`
	font-style: italic;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;	
`;

const Writing = styled.div`
	margin-right: 40px;
`;

const VerticalSpacing = styled.div`
	margin-bottom: 0.75rem;
`;

const BookPage = () =>
	<Container>
		<Writing>
			<Italic><b>Telephone:</b> +447824159320</Italic>
			<VerticalSpacing />
			<Italic><b>Email:</b> sarahjdeeks@gmail.com</Italic>			
		</Writing>
	</Container>		
;

// BookPage.propTypes = {
// 	location: PropTypes.object,
// };

export default BookPage;