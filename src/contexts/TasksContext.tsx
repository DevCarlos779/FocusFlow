import { useState, type ReactNode } from "react";
 import { createContext } from 'react';

interface Task {
    name: string;
    state: 'complete' | 'incomplete';
}

interface TasksContextProps {
    tasks: Task[];
    filteredTasks: Task[];
    updateTasks: (task: Task) => void;
    updateTaskState: (taskForModify: Task) => void;
    filterTaskForState: (state: 'complete' | 'incomplete') => void;
    filterTaskForName: (name: string) => void;
    deleteTask: (name: string) => void;
    
}

interface TasksContextProviderProps {
    children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksContextProvider({children}: TasksContextProviderProps) {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [actualFilteredTasksState, setActualFilteredTasksState] = useState<"all" |"complete" | "incomplete">("all");

    function updateTasks(NewTask: Task) {
        const taskWithSameName = tasks.filter(task => task.name == NewTask.name);

        if(taskWithSameName.length != 0) {
            alert("Você já tem uma task com esse nome!");
        } else if(actualFilteredTasksState == "incomplete") {
            setTasks(state => [NewTask, ...state]);
            setFilteredTasks(state => [NewTask, ...state]);
        } else {
            setTasks(state => [NewTask, ...state]);
        }
        
    }

    function deleteTask(name: string) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.name !== name));
        setFilteredTasks((prevTasks) => prevTasks.filter((task) => task.name !== name));
    }

    function updateTaskState(taskForModify: Task) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
            if (task.name === taskForModify.name) {
                return { ...task, state: taskForModify.state };
            }

            return task;
            
            })
        );

        setFilteredTasks((prevTasks) => prevTasks.filter((task) => task.name !== taskForModify.name));


    }

    function filterTaskForState(state: 'complete' | 'incomplete') {
        console.log(state);
        const filtered = tasks.filter(task => task.state == state);

        setActualFilteredTasksState(state);
        setFilteredTasks(filtered);

    }

    function filterTaskForName(name: string) {
        let filtered; 
        if(filteredTasks.length != 0) {
            filtered = filteredTasks.filter(task => task.name.toLowerCase().startsWith(name.toLocaleLowerCase()));
        } else {
            filtered = tasks.filter(task => task.name.toLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        

        setFilteredTasks(filtered);

    }

    return (
        <TasksContext.Provider value={{tasks, filteredTasks, updateTasks, updateTaskState, filterTaskForState, filterTaskForName, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )
}