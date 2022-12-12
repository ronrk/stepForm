const stepFormReducer = (state, action) => {
  if (action.type === "NEXT_PAGE") {
    const newPage = state.page + 1;
    return { ...state, page: newPage };
  }

  if (action.type === "PREV_PAGE") {
    console.log("prev page");
    return state;
  }
  if (action.type === "ADD_VALUES") {
    console.log(action.payload);
    return { ...state, values: { ...state.values, ...action.payload } };
  }
  return state;
};

export default stepFormReducer;
