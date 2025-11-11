import { Moon, Sun } from "phosphor-react";
import { ListContainer, ListTasksContainer, SearchTaskContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { Task } from "./components/Task";
import { Footer } from "../../components/Footer";
import { TasksContext } from "../../contexts/TasksContext";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Task {
    name: string;
    state: boolean;
}

export function ToDoList() {

    const {toggleTheme} = useContext(ThemeContext);
    const {tasks, filteredTasks, filterTaskForState, filterTaskForName} = useContext(TasksContext);

    const [themeDark, setThemeDark] = useState(true)
    const [isFiltered, setIsFiltered] = useState(false)
    const [valueInputSearch, setValueInputSearch] = useState("")
    const [stateTasksFiltered, setStateTasksFiltered] = useState<"all" | "complete" | "incomplete">("all");

    function filterTasksName(e: React.ChangeEvent<HTMLInputElement>) {
        setValueInputSearch(e.target.value)
        
        if(e.target.value != "") {
            filterTaskForName(e.target.value);
            setIsFiltered(true);

        } else {
            filterTasksState(stateTasksFiltered);
        }
        
    }

    useEffect(() => {
        setValueInputSearch("")
        if(stateTasksFiltered != "all") {
            filterTaskForState(stateTasksFiltered);
            setIsFiltered(true);
        } else {
            setIsFiltered(false);
            
        }
    }, [stateTasksFiltered])

    function filterTasksState(state: "incomplete" | "complete" | "all") {

        if(state != "all") {
            filterTaskForState(state);
            setIsFiltered(true);
        } else {
            setIsFiltered(false);
            
        }

    }

    function handleModifyTheme() {
        setThemeDark((prev) => !prev);
        toggleTheme();
    }

    return (
        <ListContainer>
            <SearchTaskContainer>
                <input type="text" placeholder="Search Task" value={valueInputSearch} onChange={filterTasksName}/>
                <select name="tasks-selection" id="tasks-selection" onChange={(e) => setStateTasksFiltered(e.target.value as "incomplete" | "complete" | "all")}>
                    <option value="all">All</option>
                    <option value="complete">Completes</option>
                    <option value="incomplete">Incompletes</option>
                </select>
                <button onClick={handleModifyTheme}>
                    {themeDark == true ? 
                        <Moon size={32} />
                        :
                        <Sun size={32} />
                    }
                </button>
            </SearchTaskContainer>

            <ListTasksContainer>
                {
                    (!isFiltered) ? 
                    
                        tasks.map(task => {
                            return (
                                <Task 
                                    key={task.name}
                                    name={task.name}
                                    state={task.state}
                                />
                            )
                        })
                    :
                        filteredTasks.map(task => {
                            return (
                                <Task 
                                    key={task.name}
                                    name={task.name}
                                    state={task.state}
                                />
                            )
                        })
                        
                                  
                }
                
                
            </ListTasksContainer>
           
           <Footer />
            
        </ListContainer>
        
    )
}