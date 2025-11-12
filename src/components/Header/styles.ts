import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;


    color: ${props => props.theme["purple-700"]};

    @media (max-width: 950px) {
        margin-bottom: 3rem;

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

export const NavIconsConteiner = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .LinkToDoList {
        color: ${props => props.theme["purple-700"]};
        cursor: pointer;

        &:hover {
            color: ${props => props.theme["purple-500"]};
        }
    }

    button {
        padding: 0.2rem;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme["purple-700"]};
        color: ${(props) => props.theme["buttons-text-color"]};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: ${(props) => props.theme["purple-500"]};
    }


`;