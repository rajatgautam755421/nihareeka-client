import React, { useState, useEffect } from "react";
import Modal1 from "react-modal";
import ClearIcon from "@mui/icons-material/Clear";
import "./Modal.css";

const customStyles = {
  content: {
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    marginTop: "20px",
    zIndex: "1",
  },
};

const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <>
      <div>
        <Modal1
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="container modal__close__main__div">
            <ClearIcon onClick={closeModal} className="modal__close__main" />
          </div>

          <img
            src="https://i.pinimg.com/736x/d3/e7/dd/d3e7dd2f2d02525ed29ab5ea8f425362.jpg"
            style={{ width: "100%", height: "300px" }}
          />
        </Modal1>
      </div>
    </>
  );
};

export default Modal;
