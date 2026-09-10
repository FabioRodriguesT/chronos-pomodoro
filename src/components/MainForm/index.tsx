import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import useTaskContext from "../../contexts/TaskContext/useTaskContext";
import { nanoid } from "nanoid";
import type { TaskModel } from "../../models/TaskModel";
import getNextCycle from "../../utils/getNextCycle";
import getNextCycleType from "../../utils/getNextCycleType";
import getNextCycleDuration from "../../utils/getNextCycleDuration";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import getCycleDescription from "../../utils/getCycleDescription";

const MainForm = () => {
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const nextCycleDuration = getNextCycleDuration(nextCycleType);
  const cycleDescription = getCycleDescription();

  const handleCreateNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskName = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ).taskName;

    if (taskName == undefined) return;

    if (!taskName) {
      alert("Digite o nome da tarefa!!!");
      return;
    }

    const newTask: TaskModel = {
      id: nanoid(),
      name: taskName.toString().trim(),
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: nextCycleDuration,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  const handleInterruptTask = () => {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  };

  return (
    <form onSubmit={handleCreateNewTask} action="" className="form">
      <div className="formRow">
        <DefaultInput
          type="text"
          id="meuinput"
          labelText="task"
          placeholder="Digite algo"
          name="taskName"
          disabled={!!state.activeTask}
        />
      </div>

      {<div className="formRow">{cycleDescription}</div>}

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key={"submit_button"}
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
            key={"interrupt_button"}
          />
        )}
      </div>
    </form>
  );
};

export default MainForm;
