import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 3rem 4rem;
    
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["purple-500"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;


    @media (max-width: 550px) {
        height: 100%;
        margin: 0;
        border-radius: 0;
    }


    

`;