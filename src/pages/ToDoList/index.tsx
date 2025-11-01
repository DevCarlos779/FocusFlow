import { Moon, Sun } from "phosphor-react";
import { ListContainer, ListTasksContainer, SearchTaskContainer } from "./styles";
import { useContext, useState } from "react";
import { Task } from "./components/Task";
import { Footer } from "../../components/Footer";
import { TasksContext } from "../../contexts/TasksContext";

interface Task {
    name: string;
    state: boolean;
}

export function ToDoList() {

    const {tasks, filteredTasks, filterTaskForState, filterTaskForName} = useContext(TasksContext);

    const [themeDark, setThemeDark] = useState(true)
    const [isFiltered, setIsFiltered] = useState(false)

    const changeTheme = () => {
        setThemeDark((state) => !state);
        console.log(filteredTasks);
    }

    function filterTasksName(e: React.ChangeEvent<HTMLInputElement>) {
        
        if(e.target.value != "") {
            filterTaskForName(e.target.value);
            setIsFiltered(true);

        } else {
            setIsFiltered(false);
        }
        
    }

    function filterTasksState(e: React.ChangeEvent<HTMLSelectElement>) {
        if(e.target.value != "all") {
            filterTaskForState(e.target.value as 'complete' | 'incomplete');
            setIsFiltered(true);
        } else {
            setIsFiltered(false);
        }

    }

    return (
        <ListContainer>
            <SearchTaskContainer>
                <input type="text" placeholder="Search Task" onChange={filterTasksName}/>
                <select name="tasks-selection" id="tasks-selection" onChange={filterTasksState}>
                    <option value="all">All</option>
                    <option value="complete">Completes</option>
                    <option value="incomplete">Incompletes</option>
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
                {
                    (filteredTasks.length == 0 || !isFiltered) ? 
                    
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