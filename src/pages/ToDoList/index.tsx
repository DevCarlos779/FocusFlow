import { Moon, Sun } from "phosphor-react";
import { ListContainer, ListTasksContainer, SearchTaskContainer } from "./styles";
import { useState } from "react";
import { Task } from "./components/Task";
import { Footer } from "../../components/Footer";

export function ToDoList() {

    const [themeDark, setThemeDark] = useState(true)

    const changeTheme = () => {
        setThemeDark((state) => !state);
    }


    return (
        <ListContainer>
            <SearchTaskContainer>
                <input type="text" placeholder="Search Task"/>
                <select name="tasks-selection" id="tasks-selection">
                    <option value="all">All</option>
                    <option value="completes">Completes</option>
                    <option value="incompletes">Incompletes</option>
                </select>
                <button onClick={changeTheme}>
                    {themeDark == true ? 
                        <Moon size={32} />
                        :
                        <Sun size={32} />
                    }
                </button>
            </SearchTaskContainer>

            <ListTasksContainer>
                <Task />
                
            </ListTasksContainer>
           
           <Footer />
            
        </ListContainer>
        
    )
}