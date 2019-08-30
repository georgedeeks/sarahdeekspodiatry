import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

import { Link } from "gatsby";

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
	margin-bottom: 30px;
`;

const IndexPage = () =>
	<Container>
		<Writing>
			<Italic><b>Telephone:</b> +447824159320</Italic>
			<Italic><b>Email:</b> sarahjdeeks@gmail.com</Italic>

			<VerticalSpacing />

			<p>
				I run a podiatric clinic on Friday afternoons in a modern setting on
				Finchley Road, West London.
			</p>

			<p>
				I am HCPC-certified podiatrist with over 5 years’ experience working in London, and offer {' '}
				<Link to="/services/">
					a range of services
				</Link>
				.
			</p>

			<p>
				Get in touch today to make an appointment.
			</p>		
		</Writing>
		
		<img 
			src="https://images.unsplash.com/photo-1496047017858-c558b925d95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=403&q=80" 
			alt="Feet"
		/>
	</Container>		
;

// IndexPage.propTypes = {
// 	location: PropTypes.object,
// };

export default IndexPage;