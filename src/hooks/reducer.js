const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export default reducer;