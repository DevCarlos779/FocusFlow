import styled from "styled-components";

export const ListContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 3rem;
    width: 100%;
    height: 100%;
    padding-top: 2rem;

    @media (max-width: 950px) {
        padding: 0;
    }
`;

export const SearchTaskContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 1rem;
    padding: 2rem 3rem;

    input {
        background-color: ${(props) => props.theme["body-background-color"]};
        padding: 1rem;
        flex: 1;
        height: 2.5rem;
        border-radius: 6px;
        border: 2px solid ${props => props.theme["purple-700"]};
    }

    select {
        width: auto;
        height: 2.5rem;
        border-radius: 6px;
        background-color: ${props => props.theme["purple-700"]};
        border: 0;
        color: ${(props) => props.theme["buttons-text-color"]};
        cursor: pointer;

    }

    button {
        width: 2.5rem;
        height: 2.5rem;
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

    @media (max-width: 950px) {
        padding: 0;
    }

    @media (max-width: 800px) {
        input {
            flex: none;
            width: 100%;
        }

        select, button {
            width: 48%;
        }

    }

    @media (max-width: 600px) {

        select, button {
            width: 100%;
            
        }

    }

    
`;

export const ListTasksContainer = styled.div`
    width: 100%;
    padding: 0 3rem;
    height: 400px;
    max-height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (max-width: 950px) {
        padding: 0;
    }
`;

