// const initstate = [
//   { password: "somehting" },
//   { password: "somehting" },
//   { password: "somehting" },
// ];

const Reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      console.log(action);
      const { products } = state;
      return { ...state, products: [...products, payload] };
    default:
      return state;
  }
};

export default Reducer;
