import propTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Image, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    console.log('клік в таргет ', event.target);
    console.log('клік в кврент таргет', event.currentTarget);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Image src={this.props.src} alt="" />
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default Modal;
