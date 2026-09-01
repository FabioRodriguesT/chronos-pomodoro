import useTaskContext from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

const Cycles = () => {
  const { state } = useTaskContext();

  const tasksList = state.tasks.slice(-(state.tasks.length % 8 || 8));

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {tasksList.map((task) => {
          return (
            <span
              key={task.id}
              className={`${styles.cycleDot} ${styles[task.type]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[task.type]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[task.type]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Cycles;
