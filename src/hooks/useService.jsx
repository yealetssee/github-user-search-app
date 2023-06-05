import axios from "axios";
import { useState } from "react";

const useService = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [error, setError] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchInput}`,
      );
      setSearchResult(response.data);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const searchClickHandler = () => {
    if (searchInput !== "") {
      fetchUserData();
    } else {
      console.log("you must enter username");
    }
  };

  const searchEnterHandler = (event) => {
    if (event.key === "Enter") {
      if (searchInput !== "") {
        fetchUserData();
      } else {
        console.log("you must enter username");
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return {
    searchInput,
    searchResult,
    error,
    searchClickHandler,
    handleInputChange,
    searchEnterHandler,
  };
};

export default useService;
