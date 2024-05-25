import { createContext, useState, useEffect } from "react";

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalStorage = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch all location data and render on home
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkTheme(theme);
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search term
  useEffect(() => {
    if (search && search.length > 3) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [search, data]);

  //set theme to localstorage on render
  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        filteredData,
        data,
        loading,
        setLoading,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
