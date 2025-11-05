import styled from "styled-components";

export const TimerContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 3rem;
    width: 100%;
    height: 100%;

    button {
        width: 70%;
        background-color: ${props => props.theme["purple-700"]};
        color: ${props => props.theme["buttons-text-color"]};
        font-weight: bold;
        padding: 1rem;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.4s;

        &:hover {
            background-color: ${props => props.theme["purple-500"]};
        }
    }

    @media (max-width: 950px) {
        padding: 0;
    }
`;

export const InputConteiner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 1rem;

    input {
        background-color: ${(props) => props.theme["body-background-color"]};
        padding: 1rem;
        height: 1rem;
        max-width: 5rem;
        border-radius: 6px;
        border: 2px solid ${props => props.theme["purple-700"]};

    }

    @media (max-width: 520px) {
        label {
            width: 100%;
            text-align: center;
        }
        
    }

    

    
`;

export const CountdownConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;

    span {
        width: 7rem;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 10rem;
        font-weight: bold;

        @media (max-width: 720px) {
            width: 5rem;
            font-size: 8rem;

        }

        @media (max-width: 450px) {
            width: 4rem;
            font-size: 6rem;

        }

        @media (max-width: 350px) {
            width: 3rem;
            font-size: 5rem;

        }

    }

`;

export const SeparetorConteiner = styled.div`
    width: 6rem;
    height: 100%;
    color: ${(props) => props.theme['purple-700']};

    display: flex;
    align-items: center;
    justify-content: center;
        
    font-size: 8rem;
    font-weight: bold;

    @media (max-width: 720px) {

        width: 5rem;
        font-size: 8rem;

    }

    @media (max-width: 450px) {
        width: 4rem;
        font-size: 6rem;

    }

    @media (max-width: 350px) {
        width: 2rem;
        font-size: 4rem;

    }
`;

export const Button = styled.button`
    width: 70%;
    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme["buttons-text-color"]};
    font-weight: bold;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background-color: ${props => props.theme["purple-500"]};
    }

    @media (max-width: 400px) {
        width: 100%;

    }
`;

export const ButtonsStopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 400px) {
        flex-direction: column;

    }
`;
