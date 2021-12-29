import * as ACTION_TYPES from "../actions/action_type";

export const listInitialState = {
  list: [],
  isLoading: false,
  error: null,
  filteredList: [],
  isActive: false,
  text: "",
};

export const listReducer = (state = listInitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PROJECTS:
      return {
        ...state,
        list: action.payload,
        isLoading: true,
      };
    case ACTION_TYPES.SHOW_RESULTS:
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
    case ACTION_TYPES.ON_CHANGE: {
      const nextText = action.payload;
      return {
        ...state,
        text: nextText,
        isActive: false,
      };
    }
    case ACTION_TYPES.SORT: {
      const arrCopy = action.payload;
      return {
        ...state,
        filteredList: arrCopy,
      };
    }
    case ACTION_TYPES.BLANK_RESULTS:
      return {
        ...state,
        filteredList: [],
        isActive: true,
      };

    default:
      return state;
  }
};
