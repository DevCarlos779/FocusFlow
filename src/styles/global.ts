import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${props => props.theme["body-background-color"]};
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["purple-700"]};
  }

  body, input, textarea, button, select {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["inputs-color"]};
  }

  @media (max-width: 600px) {
    body {
      max-height: 100vh;
      padding: 0;
    }
  }
`;