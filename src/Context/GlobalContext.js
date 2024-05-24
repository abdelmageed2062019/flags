import { createContext, useState, useEffect } from "react";

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalStorage = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  //fetch all location data and render on home
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};
