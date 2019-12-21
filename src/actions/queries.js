export const setQueries = queries => dispatch => {
  dispatch({
    type: "QUERIES",
    payload: queries
  });
};
