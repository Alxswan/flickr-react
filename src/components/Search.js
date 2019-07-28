import React from 'react';

function Search({searchTerm, setSearchTerm}) {
  return (
    <form
      className="search-form"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <input
        className="search"
        type="search"
        placeholder="Enter tags to search"
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
    </form>
  );
}

export default Search;