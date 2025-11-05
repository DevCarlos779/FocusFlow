import styled from "styled-components";

interface TaskContainerProps {
    statetask: "complete" | "incomplete"
}

export const TaskContainer = styled.div<TaskContainerProps>`
    width: 100%;
    padding: 1rem 0.5rem;
    font-size: 1.25rem;
    color: ${props => props.theme["purple-700"]};
    border-bottom: 1px solid ${props => props.theme["purple-700"]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .trash {
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
            color: ${props => props.theme["purple-500"]};
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
    }
    

    input {
        cursor: pointer;
    }

    strong {
        opacity: ${props => props.statetask == "complete" ? 1 : 0.75};
        text-decoration: ${props => props.statetask == "complete" ? "line-through" : "none"};
    }

    
`;