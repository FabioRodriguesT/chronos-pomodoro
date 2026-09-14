import { Link } from "react-router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.hyperLink} to="/about-pomodoro">
        Entenda como funciona a técnica pomodoro
      </Link>
      <Link className={styles.hyperLink} to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </Link>
    </footer>
  );
};

export default Footer;
