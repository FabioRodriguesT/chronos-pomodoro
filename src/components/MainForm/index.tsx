import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

const MainForm = () => {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput
          type="text"
          id="meuinput"
          labelText="task"
          placeholder="Digite algo"
          disabled
        />
      </div>
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
