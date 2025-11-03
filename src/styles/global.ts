import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        background-color: ${props => props.theme["gray-800"]};
        padding: 0 2rem;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${props => props.theme["purple-700"]};
    }

    body, input, textarea, button, select {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme["gray-300"]};
    }

    @media (max-width: 550px) {
        body {
            height: 100%;
            padding: 0;
        }
        
    }

    
`;