const initstate = [
  { password: "somehting" },
  { password: "somehting" },
  { password: "somehting" },
];

const Reducer = (state = [initstate], action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Reducer;
