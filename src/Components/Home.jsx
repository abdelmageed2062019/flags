import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Header from "./Header/Index";
import styles from "./home.module.css";
import Input from "./Input/Index";
import Filter from "./Filter/Index";
import Item from "./Item/Index";

const Home = () => {
  const { data, loading, darkTheme } = useContext(GlobalContext);

  return (
    <>
      <main
        className={`${styles.main} ${
          darkTheme ? styles.mainDark : styles.mainLight
        }`}
      >
        <Header />
        <div className={styles.container}>
          <div className={styles.search}>
            <Input />
            <Filter />
          </div>

          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <div className={styles.items}>
              {data.map((item) => {
                return (
                  <Item
                    key={item.name}
                    name={item.name}
                    alpha={item.alpha2Code}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    flag={item.flags.svg}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
