import { useEffect, createContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cms.samespace.com/items/songs")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <APIContext.Provider value={{ data }}>{children}</APIContext.Provider>;
};

APIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
