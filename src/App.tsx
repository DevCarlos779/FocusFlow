import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { TasksContextProvider } from "./contexts/TasksContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";



export function App() {

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <TasksContextProvider>
          <Router />
        </TasksContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeContextProvider>
    
  )
}

