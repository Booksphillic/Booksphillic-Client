import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	border: ${({ border }) => border};
`;

export const BorderWhiteBtn = styled(Button)`
	background-color: transparent;
	border: solid 1px #FFFFFF;
	font-size: 16px;
    color: #FFFFFF;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;
export const RoundBtn=styled(Button)`
	background-color: #2A3143;
	padding: ${({ padding }) => (padding ? padding : "15px 45px")};
	border-radius: 50px;
	font-size: 16px;
	color: #FFFFFF;
	text-align: center;
`