import React from "react";
import { StyledTechs } from "./style";
import { useState } from "react";
import Modal from "react-modal";
import { AddModal } from "../../AddModal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const AddTechs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledTechs>
      <h4>Tecnologias</h4>
      <button onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AddModal closeModal={closeModal} />
      </Modal>
    </StyledTechs>
  );
};
