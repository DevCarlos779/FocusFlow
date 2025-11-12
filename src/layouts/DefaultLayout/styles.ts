import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    max-width: 74rem;
    max-height: 100dvh;
    height: calc(100dvh - 10rem);
    margin: 5rem auto;
    padding: 3rem 4rem;
    
    background-color: ${props => props.theme["layout-background-color"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;


    @media (max-width: 600px) {
        height: 100%;
        margin: 0;
        border-radius: 0;
        padding: 3rem 2rem;
    }

`;