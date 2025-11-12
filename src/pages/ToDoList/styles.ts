import styled from "styled-components";

export const ListContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-height: 100vh;
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
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    option {
        white-space: nowrap;
    }

    @media (max-width: 950px) {
        padding: 0;
    }


    @media (max-width: 450px) {

        select {
            width: 100%;
            
        }

    }

    
`;

export const ListTasksContainer = styled.div`
    width: 100%;
    padding: 0 3rem;
    max-height: 400px;
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

