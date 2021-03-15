export const toggleModal = ({ modal, isOpen, type }) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal, isOpen, type },
    });
  };
};
