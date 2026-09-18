import type { TaskStateModel } from "../models/TaskStateModel";

export const changeDuration = () => {};

const getNextCycleDuration = (
  cycleType: string,
  state: TaskStateModel,
): number => {
  if (cycleType === "longBreakTime") return state.config["longBreakTime"];
  if (cycleType === "shortBreakTime") return state.config["shortBreakTime"];
  return state.config["workTime"];
};

export default getNextCycleDuration;
