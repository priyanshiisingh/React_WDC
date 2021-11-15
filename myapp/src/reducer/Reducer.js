const Reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_ITEM":
      console.log(action);
      return state.filter((item) => item.id !== payload);

    case "ADD_ITEM":
      console.log(action);
      return [...state, payload];
    default:
      return state;
  }
};

export default Reducer;
