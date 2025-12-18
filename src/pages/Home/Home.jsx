import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>Jason Jashari</div>
      <div className={styles.title}>Software Engineer.</div>

      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/jason-jashari-bb8ba4293"
          className={styles.button}
        >
          LinkedIn
        </a>
        <a href="https://github.com/jasonjashari" className={styles.button}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
