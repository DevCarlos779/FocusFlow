import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ToDoList } from "./pages/ToDoList";
import { Timer } from "./pages/Timer";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<ToDoList />} />
                <Route path="/timer" element={<Timer />} />
            </Route>
        </Routes>
    )
}