import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    /* body {
        background-color: ${({theme}) => theme.bg_page1};
        color: ${({theme}) => theme.text1};
    } */
`;

export default GlobalStyle;