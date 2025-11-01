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
    
}

interface TasksContextProviderProps {
    children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksContextProvider({children}: TasksContextProviderProps) {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

    function updateTasks(task: Task) {
        setTasks(state => [task, ...state]);
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
    }

    function filterTaskForState(state: 'complete' | 'incomplete') {
        const filtered = tasks.filter(task => task.state == state);

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
        <TasksContext.Provider value={{tasks, filteredTasks, updateTasks, updateTaskState, filterTaskForState, filterTaskForName}}>
            {children}
        </TasksContext.Provider>
    )
}