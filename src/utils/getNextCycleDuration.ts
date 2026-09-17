import useTaskContext from "../contexts/TaskContext/useTaskContext";

export const changeDuration = () => {};

const getNextCycleDuration = (cycleType: string): number => {
  const { state } = useTaskContext();

  if (cycleType === "longBreakTime") return state.config["longBreakTime"];
  if (cycleType === "shortBreakTime") return state.config["shortBreakTime"];
  return state.config["workTime"];
};

export default getNextCycleDuration;
