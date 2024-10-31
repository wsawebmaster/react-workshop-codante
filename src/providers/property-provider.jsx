import { createContext, useEffect, useState, useContext } from "react";

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }

    setProperties(
      properties.filter(
        (property) => 
          property.name.toLowerCase().includes(searchText.toLocaleLowerCase()) || 
        property.description.toLowerCase().includes(searchText.toLocaleLowerCase()) || 
        property.location.toLowerCase().includes(searchText.toLocaleLowerCase())
    ),
    );
  }, [searchText]);

  return (
    <PropertiesContext.Provider
      value={{ properties, searchText, setSearchText }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export function useProperties() {
  const { properties } = useContext(PropertiesContext);

  return properties;
}
