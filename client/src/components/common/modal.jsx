import React from "react";
import { Button, Modal } from "react-bootstrap";

const PopUpModal = (props) => {
  const { show, header, body, onClose, onDelete, deleteBtn } = props;
  return (
    <Modal show={show}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {deleteBtn ? <Button onClick={() => onDelete()}>Delete</Button> : ""}
        <Button onClick={() => onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUpModal;
