import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

const initialSearchState = {
  searchField: ""
};

export const searchRobotsReducer = (
  state = initialSearchState,
  action = {}
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    //or return { ...state, searchField: action.payload}
    default:
      return state;
  }
};

const initialRobotsState = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobotsReducer = (
  state = initialRobotsState,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case REQUEST_ROBOTS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
