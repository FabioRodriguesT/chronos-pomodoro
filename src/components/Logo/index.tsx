import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

type LogoProps = {};

const Logo = ({}: LogoProps) => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
};

export default Logo;
