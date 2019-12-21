export default (state = {}, action) => {
  switch (action.type) {
    case "QUERIES":
      return [...action.payload];
    default:
      return state;
  }
};
