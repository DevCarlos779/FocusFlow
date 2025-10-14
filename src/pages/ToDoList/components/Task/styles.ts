import styled from "styled-components";

export const TaskContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme["purple-500"]};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`;