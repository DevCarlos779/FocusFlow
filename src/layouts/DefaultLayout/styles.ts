import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    
    background-color: ${props => props.theme["black-500"]};
    color: ${props => props.theme["purple-500"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

`;