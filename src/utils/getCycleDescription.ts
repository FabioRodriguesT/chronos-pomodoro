import type { TaskStateModel } from "../models/TaskStateModel";
import getNextCycle from "./getNextCycle";
import getNextCycleType from "./getNextCycleType";

const getCycleDescription = (state: TaskStateModel) => {
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const descriptionWithActiveTask = {
    workTime: `Foque por ${state.config.workTime} ${state.config.workTime > 1 ? " minutos" : " minuto"}.`,
    shortBreakTime: `Descanse por ${state.config.shortBreakTime} ${state.config.shortBreakTime > 1 ? " minutos" : " minuto"}.`,
    longBreakTime: `Descanse por ${state.config.longBreakTime} ${state.config.longBreakTime > 1 ? " minutos" : " minuto"}.`,
  };

  const descriptionWithoutActiveTask = {
    workTime: `Próximo ciclo é de ${state.config.workTime} ${state.config.workTime > 1 ? " minutos" : " minuto"}.`,
    shortBreakTime: `Próximo descanso é curto, de ${state.config.shortBreakTime}${state.config.shortBreakTime > 1 ? " minutos" : " minuto"}.`,
    longBreakTime: `Próximo descanso é longo, de ${state.config.longBreakTime} ${state.config.longBreakTime > 1 ? " minutos" : " minuto"}.`,
  };

  if (state.activeTask) return descriptionWithActiveTask[state.activeTask.type];

  return descriptionWithoutActiveTask[nextCycleType];
};

export default getCycleDescription;
