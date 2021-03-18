import { createGlobalStyle } from "styled-components";
import RobotoTTF from './typography/fonts/Roboto-Regular.ttf';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto-Regular'), url(${RobotoTTF}) format('truetype');
        font-weight: 400px;
        font-style: normal;
    };

    html, body{
        font-family: 'Roboto-Regular';
        margin: 0;
    }
`;

export default GlobalStyle;