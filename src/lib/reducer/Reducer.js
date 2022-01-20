const initialState = 5;

const actionCombined = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state < 100 ? state + 1 : state;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    case "CLEAR_ALL":
      return (state = 0);
    default:
      return state;
  }
};

export default actionCombined;
