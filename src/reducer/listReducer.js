export const listInitialState = {
  list: [],
  isLoading: false,
  error: null,
  filteredList: [],
  isActive: false,
  text: "",
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return {
        ...state,
        list: action.payload,
        isLoading: true,
      };
    case "SHOW_RESULTS":
      return {
        ...state,
        filteredList: state.list.filter((item) =>
          item[0]
            .toString()
            .toLowerCase()
            .includes(state.text.toString().toLowerCase())
        ),
        isActive: true,
      };
    case "ON_CHANGE": {
      const nextText = action.payload;
      return {
        ...state,
        text: nextText,
        isActive: false,
      };
    }
    case "SORT": {
      const arrCopy = action.payload;
      return {
        ...state,
        filteredList: arrCopy,
      };
    }
    case "BLANK_RESULTS":
      return {
        ...state,
        filteredList: [],
        isActive: true,
      };

    default:
      return state;
  }
};
