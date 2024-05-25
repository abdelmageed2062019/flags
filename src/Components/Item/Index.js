import styles from "./item.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const Item = ({ name, alpha, population, region, capital, flag }) => {
  const navigate = useNavigate();
  const { darkTheme } = useContext(GlobalContext);

  return (
    <div
      aria-label={`Details about ${name}`}
      role="button"
      tabIndex="0"
      className={`${styles.item} ${
        darkTheme ? styles.itemDark : styles.itemLight
      }`}
      onClick={() => navigate(`/${alpha}`)}
    >
      <div className={styles.image}>
        <img src={`${flag}`} alt={name} />
      </div>

      <div className={styles.content}>
        <strong>{name}</strong>
        <span>
          <strong>Population:</strong> {population.toLocaleString()}
        </span>
        <span>
          <strong>Region:</strong> {region}
        </span>
        <span>
          <strong>Capital:</strong> {capital}
        </span>
      </div>
    </div>
  );
};

export default Item;
