import { Alarm, ClipboardText, Moon, Sun } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, LogoContainer, NavIconsConteiner } from "./styles";
import Logo from "../../assets/Logo_FocusFlow.png"
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


export function Header() {

    const {toggleTheme} = useContext(ThemeContext);

    const [themeDark, setThemeDark] = useState(true)

    function handleModifyTheme() {
        setThemeDark((prev) => !prev);
        toggleTheme();
    }

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

                <button onClick={handleModifyTheme}>
                    {themeDark == true ? 
                        <Moon size={32} />
                        :
                        <Sun size={32} />
                    }
                </button>
            </NavIconsConteiner>
            
            
        </HeaderContainer>
    )
}