import styles from "./header.module.css";
import { ReactComponent as Moon } from "../../assets/moon.svg";

const Header = () => {
  return (
    <header className={styles.headerLight}>
      <div className={styles.container}>
        <strong className={styles.title}>Where in the world?</strong>
        <button>
          <Moon />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
