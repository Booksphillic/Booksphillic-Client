import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*@font-face {
        font-family: 'NeoDunggeunmo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    *{
        box-sizing: border-box;
    }*/
    body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    button, a, li,input{
    all: unset;
    }
    
`;
export default GlobalStyle;
