import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 1rem;
    width: 100%;
    padding: 2rem 3rem;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    
    @media (max-width: 950px) {
        padding: 1rem 0 2rem;
    }

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