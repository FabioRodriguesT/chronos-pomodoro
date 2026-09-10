import Home from "./pages/Home";
import AboutPomodoro from "./pages/AboutPomodoro";
import NotFound from "./pages/NotFound";

import { Bounce, ToastContainer } from "react-toastify";
import TaskContextProvider from "./contexts/TaskContext/TaskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import MessagesContainer from "./components/MessagesContainer";

function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}

export default App;
