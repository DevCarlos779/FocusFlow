import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 7px;
    right: 7px;
    z-index: 10;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme["purple-700"]};
    color: ${(props) => props.theme["buttons-text-color"]};
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    


`;

export const CreateNewTaskButton = styled.button`
        padding: 0.5rem;
        border-radius: 50%;
        border: 0;
        background-color: ${props => props.theme["purple-700"]};
        color: ${(props) => props.theme["buttons-text-color"]};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme["purple-500"]};
        }
`;