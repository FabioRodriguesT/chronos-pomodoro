import RouterLink from "../RouterLink";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink className={styles.hyperLink} href="/about-pomodoro">
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink className={styles.hyperLink} href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
};

export default Footer;
