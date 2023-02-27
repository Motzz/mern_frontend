const initialStateGlobal = {
  name: "wahyudi",
};

const Globalreducer = (state = initialStateGlobal, action) => {
  if (action.type == "UPDATE_NAME") {
    return {
      ...state,
      name: "timothy",
    };
  }
  return state;
};

export default Globalreducer;
