import { useState, useEffect, useReducer } from "react";
import useDebounce from "./debounce";
import reducer from "./reducer";
import fetchImages from "../api/";

const useApi = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    searchTerm,
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  }, [searchTerm]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      return;
    }
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      fetchImages(debouncedSearchTerm)
        .done(result => {
          dispatch({ type: "FETCH_SUCCESS", payload: result.items });
        })
        .fail(error => {
          console.error(error);
          dispatch({ type: "FETCH_FAILURE" });
        });
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return [state, setSearchTerm];
};

export default useApi;
