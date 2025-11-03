import { ClipboardText } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, LogoContainer } from "./styles";
import Logo from "../../assets/Logo_FocusFlow.png"


export function Header() {
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="" />
                <h1>Focus Flow</h1>
            </LogoContainer>

            <NavLink to="/" title="To Do List">
                <ClipboardText size={32} className="LinkToDoList" />
            </NavLink>
        </HeaderContainer>
    )
}