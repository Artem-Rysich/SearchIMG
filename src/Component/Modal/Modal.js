import React, {Component} from 'react';
import style from './Modal.module.css';
class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
    window.addEventListener('click', this.handleCloseModalOverlay);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
    window.removeEventListener('click', this.handleCloseModalOverlay);
  }
  handleCloseModalOverlay = (event) => {
    if (event.target.nodeName !== 'IMG') {
      this.props.closeModalWIndow();
    }
  };
  handleCloseModal = (event) => {
    if (event.code === 'Escape') {
      this.props.closeModalWIndow();
    }
  };

  render() {
    return (
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src={this.props.largeSrc} alt="img" />
        </div>
      </div>
    );
  }
}
export default ModalWindow;
