import { createGlobalStyle } from "styled-components";
import RobotoTTF from './typography/fonts/Roboto-Regular.ttf';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto-Regular'), url(${RobotoTTF}) format('truetype');
        font-weight: 400px;
        font-style: normal;
    };

    body{
        font-family: 'Roboto-Regular';
        font-size: 18px;
  }
`;

export default GlobalStyle;