import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = dispatch => {
    //redux-think looks for functions as opposed to object being returned in 'setSearchField'
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error }));
};

// dispatch(requestRobots())-----
//now we have a higher order function, requestRobots returns a function which uses dispatch to reducer

// export const requestRobots = () => dispatch => {
//     dispatch({ type: REQUEST_ROBOTS_PENDING });
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//       .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error }));
//   };
