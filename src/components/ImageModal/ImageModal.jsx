import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({ srcValue, isOpen, onToggle }) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onToggle} style={customStyles}>
        <img src={srcValue} />
      </Modal>
    </>
  );
}
