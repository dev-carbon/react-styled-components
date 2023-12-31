import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    :root {
        font-size: 16px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.lightBlue};
    }
`

export default GlobalStyles