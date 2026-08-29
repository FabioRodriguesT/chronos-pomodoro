import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import useTaskContext from "../../contexts/TaskContext/useTaskContext";
import { nanoid } from "nanoid";
import type { TaskModel } from "../../models/TaskModel";

const MainForm = () => {
  const { setState } = useTaskContext();

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
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
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
        />
      </div>

      <div className="formRow">Próximo intervalo é de 25min.</div>
      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};

export default MainForm;
