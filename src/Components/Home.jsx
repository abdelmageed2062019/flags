import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Header from "./Header/Index";
import styles from "./home.module.css";
import Input from "./Input/Index";
import Filter from "./Filter/Index";
import Item from "./Item/Index";

const Home = () => {
  const { data } = useContext(GlobalContext);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.container}>
          <div className={styles.search}>
            <Input />
            <Filter />
          </div>

          <div className={styles.items}>
            <Item />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
