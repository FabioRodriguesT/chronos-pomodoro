import type { TaskModel } from "../models/TaskModel";

const getTaskStatus = (task: TaskModel, activeTask: TaskModel | null) => {
  if (task.completeDate) return "Completa";
  if (task.interruptDate) return "Interrompida";
  if (task.id === activeTask?.id) return "Em progesso";

  return "Abandonada";
};

export default getTaskStatus;
