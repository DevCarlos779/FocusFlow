import styled from "styled-components";

export const ListContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const SearchTaskContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        padding: 1rem;
        flex: 1;
        height: 2.5rem;
        border-radius: 6px;
        border: 2px solid ${(props) => props.theme["purple-500"]};
    }

    select {
        width: auto;
        height: 2.5rem;
        border-radius: 6px;
        background-color: ${(props) => props.theme["purple-500"]};
        border: 0;
        color: ${(props) => props.theme["white-500"]};
    }

    button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 6px;
        border: 0;
        background-color: ${(props) => props.theme["purple-500"]};
        color: ${(props) => props.theme["white-500"]};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

export const ListTasksContainer = styled.div`
    width: 100%;
    max-width: 800px;
    height: 400px;
    max-height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const FooterContainer = styled.footer`
    margin-top: 1rem;
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    button {
        padding: 0.5rem;
        border-radius: 50%;
        border: 0;
        background-color: ${(props) => props.theme["purple-500"]};
        color: ${(props) => props.theme["white-500"]};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;