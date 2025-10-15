import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 1rem;
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

export const CreateNewTaskButton = styled.button`
        padding: 0.5rem;
        border-radius: 50%;
        border: 0;
        background-color: ${(props) => props.theme["purple-500"]};
        color: ${(props) => props.theme["white-500"]};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
`;