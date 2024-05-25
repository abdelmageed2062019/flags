import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./details.module.css";
import Header from "../Header/Index";
import { ReactComponent as Back } from "../../assets/back.svg";

const Details = () => {
  const [dataItem, setDataItem] = useState(null);
  const { name } = useParams();
  const { data, darkTheme, loading } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const country = data.find((item) => name === item.alpha2Code);
    setDataItem(country);
  }, [data, name]);

  return (
    <>
      <Header />
      {dataItem && (
        <main
          className={`${styles.main} ${
            darkTheme ? styles.mainDark : styles.mainLight
          }`}
        >
          <div
            className={`${styles.container} ${
              darkTheme ? styles.containerDark : styles.containerLight
            }`}
          >
            <button aria-label="Back to Home" onClick={() => navigate("/")}>
              <Back />
              <span>Back</span>
            </button>
            {loading ? (
              <div className={styles.loader}></div>
            ) : (
              <div className={styles.content}>
                <img src={dataItem.flags.svg} alt={`${dataItem.name} flag`} />
                <div>
                  <div
                    className={`${styles.infos} ${
                      darkTheme ? styles.infosDark : styles.infosLight
                    }`}
                  >
                    <h2>{dataItem.name}</h2>
                    <div className={styles.columns}>
                      <div className={styles.column}>
                        <span>
                          <strong>Native Name:</strong> {dataItem.nativeName}
                        </span>
                        <span>
                          <strong>Population:</strong>{" "}
                          {dataItem.population.toLocaleString()}
                        </span>
                        <span>
                          <strong>Region:</strong> {dataItem.region}
                        </span>
                        <span>
                          <strong>Sub Region:</strong> {dataItem.subregion}
                        </span>
                        <span>
                          <strong>Capital:</strong> {dataItem.capital}
                        </span>
                      </div>
                      <div className={styles.column}>
                        <span>
                          <strong>Top Level Domain:</strong>{" "}
                          {dataItem.topLevelDomain}
                        </span>
                        <span>
                          <strong>Currencies:</strong>{" "}
                          {dataItem.currencies
                            .map((currency) => currency.name)
                            .join(", ")}
                        </span>
                        <span>
                          <strong>Languages:</strong>{" "}
                          {dataItem.languages
                            .map((language) => language.name)
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                  {dataItem.borders && dataItem.borders.length > 0 && (
                    <div className={styles.borders}>
                      <strong
                        className={darkTheme ? styles.dark : styles.light}
                      >
                        Border Countries:
                      </strong>
                      <div
                        className={`${styles.list} ${
                          darkTheme ? styles.listDark : styles.listWhite
                        }`}
                      >
                        {dataItem.borders.map((borderCode) => {
                          const borderCountry = data.find(
                            (country) => country.alpha3Code === borderCode
                          );
                          return (
                            <button
                              aria-label={`Details about ${borderCountry?.name}`}
                              key={borderCode}
                              onClick={() =>
                                navigate(`/${borderCountry.alpha2Code}`)
                              }
                            >
                              {borderCountry?.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Details;
