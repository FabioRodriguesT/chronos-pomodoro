import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import styles from "./styles.module.css";
import type { ToastContentProps } from "react-toastify";

const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label="Confirmar ação de fechar."
            title="Confirmar ação de fechar."
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color="red"
            aria-label="Cancelar ação e fechar."
            title="Cancelar ação e fechar."
          />
        </div>
      </div>
    </>
  );
};

export default Dialog;
