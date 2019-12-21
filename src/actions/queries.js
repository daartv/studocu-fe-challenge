export const queries = queries => dispatch => {
  dispatch({
    type: "QUERIES",
    payload: { queries }
  });
};
