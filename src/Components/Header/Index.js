import styles from "./header.module.css";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(GlobalContext);

  return (
    <header className={darkTheme ? styles.headerDark : styles.headerLight}>
      <div className={styles.container}>
        <strong className={styles.title}>Where in the world?</strong>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          <Moon />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
