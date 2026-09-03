import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import initialTaskState from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  dispatch: () => {},
});

export default TaskContext;
