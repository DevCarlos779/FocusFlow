import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 30rem;
    padding: 2.5rem 1.5rem;
    background-color: ${props => props.theme["black-500"]};
    color: ${props => props.theme["purple-500"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 1rem;

        input {
            width: 100%;
            padding: 0.5rem;
            border: 0;
            border-radius: 6px;
        }

        button[type="submit"] {
            width: 100%;
            background-color: ${props => props.theme["purple-500"]};
            color: ${props => props.theme["white-500"]};
            font-weight: bold;
            padding: 1rem;
            border: 0;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.4s, color 0.4s;

            &:hover {
                background-color: ${props => props.theme["white-500"]};
                color: ${props => props.theme["purple-500"]};
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;