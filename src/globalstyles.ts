import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display:flex ;
    margin: 0;
    padding: 0;
    background: #F2F2F2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }
   
    h1{
        font-size: 12px;
        color: #21092F;
    }
    
    p{
      
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #FF5050;
    }
`;

export default GlobalStyle;
