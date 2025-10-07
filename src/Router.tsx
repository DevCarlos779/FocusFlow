import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ToDoList } from "./pages/ToDoList";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<ToDoList />} />
            </Route>
        </Routes>
    )
}