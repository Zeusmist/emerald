const initialState = {
  userboard: { isOpen: false, type: "" },
};

const ModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      const { modal, isOpen, type } = action.payload;
      return { ...state, [modal]: { isOpen, type } };
    default:
      return state;
  }
};

export default ModalsReducer;
