import useTaskContext from "../contexts/TaskContext/useTaskContext";
import getNextCycle from "./getNextCycle";
import getNextCycleType from "./getNextCycleType";

const getCycleDescription = () => {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const descriptionWithActiveTask = {
    workTime: `Foque por ${state.config.workTime} minutos.`,
    shortBreakTime: `Descanse por ${state.config.shortBreakTime} minutos.`,
    longBreakTime: `Descanse por ${state.config.longBreakTime} minutos.`,
  };

  const descriptionWithoutActiveTask = {
    workTime: `Próximo ciclo é de ${state.config.workTime} minutos.`,
    shortBreakTime: `Próximo descanso é de ${state.config.shortBreakTime} minutos.`,
    longBreakTime: `Próximo descanso é de ${state.config.longBreakTime} minutos.`,
  };

  if (state.activeTask) return descriptionWithActiveTask[state.activeTask.type];

  return descriptionWithoutActiveTask[nextCycleType];
};

export default getCycleDescription;
