import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalImage, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ src, onClose }) =>
  createPortal(
    <Overlay onClick={onClose}>
      <ModalImage>
        picture
        <img src={src} alt="" />
      </ModalImage>
    </Overlay>,
    modalRoot
  );

Modal.propTypes = {
  src: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default Modal;
