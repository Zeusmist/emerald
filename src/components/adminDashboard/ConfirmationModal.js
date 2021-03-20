import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";
import Spinner from "../Spinner";

class ConfirmationModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { name: "Yes", onClick: this.handleConfirm },
        { name: "No", onClick: props.closeModal },
      ],
    };
  }

  setStateValue = (state, value) => this.setState({ [state]: value });

  handleConfirm = () => {
    this.setState({ isConfirming: true }, async () => {
      await this.props.handleConfirm();
      this.setState({ isConfirming: false });
    });
  };

  render() {
    const { isOpen, closeModal, message } = this.props;
    const { isConfirming, buttons } = this.state;
    return (
      <>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Body className="modalBody confirmation">
            <div>
              <h6 style={{ textAlign: "center" }}>{message}</h6>

              <div
                className="modalForm p-2 d-flex justify-content-around"
                style={{ width: "100%" }}
              >
                {buttons.map((button, i) => (
                  <Button
                    key={i}
                    onClick={button.onClick}
                    className="confirmButton"
                    disabled={isConfirming}
                  >
                    {i == 0 && isConfirming ? (
                      <Spinner size="sm" />
                    ) : (
                      button.name
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ConfirmationModal;
