import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./input.module.css";

const Input = () => {
  const { search, setSearch, darkTheme } = useContext(GlobalContext);

  return (
    <input
      type="text"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      className={`${styles.input} ${
        darkTheme ? styles.inputDark : styles.inputLight
      }`}
      placeholder="Search for a country..."
    />
  );
};

export default Input;
