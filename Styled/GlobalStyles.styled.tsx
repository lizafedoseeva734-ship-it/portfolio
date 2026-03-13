import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
    ::before,
    ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #041f31;
    color: #ffffff;
    min-height: 100vh;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    button {
    border: none;
    cursor: pointer;
    }




`;
