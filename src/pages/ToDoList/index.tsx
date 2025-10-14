import { Moon, Plus, Sun } from "phosphor-react";
import { FooterContainer, ListContainer, ListTasksContainer, SearchTaskContainer } from "./styles";
import { useState } from "react";
import { Task } from "./components/Task";

export function ToDoList() {

    const [themeDark, setThemeDark] = useState(true)

    const changeTheme = () => {
        setThemeDark((state) => !state);
    }


    return (
        <ListContainer>
            <h1>To do list</h1>
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
           
            <FooterContainer>
                <button>
                    <Plus size={32} />
                </button>
            </FooterContainer>
        </ListContainer>
        
    )
}