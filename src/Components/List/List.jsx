// ModalWithImages.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../List/List.css';

const images = [
  'https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg?w=1060&t=st=1702472204~exp=1702472804~hmac=8ad0fb0199804fb1871c276d5d09afa498e2746d16b563b438f1ff0ebb12b8e0',
  'https://img.freepik.com/free-photo/mountain-with-snow_1112-564.jpg?w=1060&t=st=1702472556~exp=1702473156~hmac=643a1fd378710cd1c0fcd28826ea3cbd0152821a8e304b727dd86edfdb57e955',
  'https://img.freepik.com/free-photo/hiker-hiking-people-sport-outdoor_1253-669.jpg?w=1060&t=st=1702473035~exp=1702473635~hmac=ead1877bd7f5e4b56405685e9954a2caa9ee894b72f75325bfe2a2fe497a5323',
  'https://img.freepik.com/free-photo/3-men-walk-along-hill-with-backpacks-with-white-clouds-peak-volcano-background_501050-2.jpg?w=1060&t=st=1702473173~exp=1702473773~hmac=81d1b172a36d85a2f0182e039477670352c564186ef48253b37e91ac1ee06428'
];

const List = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="image-modal"
        overlayClassName="modal-overlay"
        contentLabel="Image Modal"
      >
        <img src={selectedImage} alt="Selected" />
        <button className='btn' onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default List;
