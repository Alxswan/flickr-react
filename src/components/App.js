import React from "react";
import useApi from "../hooks/";
import Search from "./Search";
import Error from "./Error";
import Loading from "./Loading";
import Results from "./Results";

import "./App.css";

function App() {
  const [{ searchTerm, data, isLoading, isError }, setSearchTerm] = useApi();

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {isError && <Error />}

      {isLoading ? (
        <Loading />
      ) : (
        <Results data={data}/>
      )}

      {!isLoading && data && !data.length && searchTerm && (
        <div>No results</div>
      )}
    </>
  );
}

export default App;
