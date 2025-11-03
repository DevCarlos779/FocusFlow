import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2rem;

    margin-bottom: 1rem;

    color: ${props => props.theme["purple-700"]};

    .LinkToDoList {
        color: ${props => props.theme["purple-700"]};
    }

    @media (max-width: 600px) {
        gap: 1rem;
        height: 8rem;
        justify-content: center;

    }

    @media (max-width: 360px) {

        height: 10rem;

    }

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 1rem;

    h1 {
        font-size: 2rem;
    }

    img {
        height: 3rem;
        width: 3rem;
    }

    @media (max-width: 600px) {

        width: 100%;

    }

    @media (max-width: 360px) {

        justify-content: center;

    }
    
`;