import React from "react";
import styled from "styled-components";

import footOnlyLogo from "../../images/logo_symbol.png";

const NativeFooter = styled.footer`
	background-color: #EBF0EF;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 191px; /* matches global.css body margin-bottom */
  width: 100%;
	overflow: hidden;
	
	display: flex;
	justify-content: center;
`;

// const Copyright = styled.div`
// 	margin-left: 33px; /* horrible hard-code */
// `;

const FootPicture = styled.img`
	width: 99px;
	height: 96px;
	top: -48px;
	
	position: relative;
`;

const Footer = () => 
	<NativeFooter>
		
		<FootPicture src={footOnlyLogo} alt="Foot logo" />

		{/* <Copyright>
			<p>Copyright George Deeks 2019</p>
		</Copyright>*/}
	</NativeFooter>
;

export default Footer;