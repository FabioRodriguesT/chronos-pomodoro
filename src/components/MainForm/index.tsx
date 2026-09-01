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
import formatSecondsToMinutes from "../../utils/formatSecondsToMinutes";

const MainForm = () => {
  const { state, setState } = useTaskContext();

  console.log(state);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const nextCycleDuration = getNextCycleDuration(nextCycleType);

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

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
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

      <div className="formRow">Próximo intervalo é de 25min.</div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
          />
        ) : (
          <DefaultButton type="button" icon={<StopCircleIcon />} color="red" />
        )}
      </div>
    </form>
  );
};

export default MainForm;
