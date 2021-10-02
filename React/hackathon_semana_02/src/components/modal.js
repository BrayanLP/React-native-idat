import React from "react";
import buttom from "../assets/play-button.svg";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // minWidth: '800px',
    width: "100%",
    maxWidth: "800px",
  },
};
Modal.setAppElement("#root");

const ModalApp = ( ) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="floating">
        <button onClick={openModal}>
          <img src={buttom} alt="" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/NVb5GV6lntU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
};

export default ModalApp;
