import React from "react";
import useApi from "./hooks/";
import Search from "./components/Search";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Results from "./components/Results";

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
