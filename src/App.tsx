import Home from "./pages/Home";
import AboutPomodoro from "./pages/AboutPomodoro";
import NotFound from "./pages/NotFound";

import TaskContextProvider from "./contexts/TaskContext/TaskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import MessagesContainer from "./components/MessagesContainer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}

export default App;
