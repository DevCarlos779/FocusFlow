import { Alarm, ClipboardText } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, LogoContainer, NavIconsConteiner } from "./styles";
import Logo from "../../assets/Logo_FocusFlow.png"


export function Header() {
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="" />
                <h1>Focus Flow</h1>
            </LogoContainer>

            <NavIconsConteiner>
                <NavLink to="/" title="To Do List">
                    <ClipboardText size={32} className="LinkToDoList" />
                </NavLink>

                <NavLink to="/timer" title="To Do List">
                    <Alarm size={32} className="LinkToDoList" />
                </NavLink>
            </NavIconsConteiner>
            
            
        </HeaderContainer>
    )
}