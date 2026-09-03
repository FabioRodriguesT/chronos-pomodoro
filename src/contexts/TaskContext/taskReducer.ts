import type { TaskStateModel } from "../../models/TaskStateModel";
import formatSecondsToMinutes from "../../utils/formatSecondsToMinutes";
import getNextCycle from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

const TaskReducer = (
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel => {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      const newMapTasks = state.tasks.map((task) => {
        if (state.activeTask && task.id === state.activeTask.id) {
          return {
            ...task,
            interruptDate: Date.now(),
          };
        }
        return task;
      });

      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: newMapTasks,
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
};

export default TaskReducer;
