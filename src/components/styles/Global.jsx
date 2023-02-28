import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    @font-face {
    font-family: Montserrat;
    src: url('../../assets/fonts/Montserrat-Regular.ttf'), format('truetype');
    font-weight: normal;
    }

    body {
        font-size: 100%;
        
        font-family: "Montserrat", sans-serif;
    }

    img {
        object-fit: cover;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    section,
    footer {
        padding: 4.32875rem 5rem 7.6125rem 5rem;

        @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
            padding: 7.6125rem 2.5rem 7.6125rem 2.5rem;
        }
    }
`;

export default GlobalStyles;
