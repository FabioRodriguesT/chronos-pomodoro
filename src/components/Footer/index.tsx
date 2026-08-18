import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.hyperLink} href="">
        Entenda como funciona a técnica pomodoro
      </a>
      <a className={styles.hyperLink} href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
