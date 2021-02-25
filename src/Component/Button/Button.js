import React, {Component} from 'react';
import style from './Button.module.css';

class ButtonLoadMore extends Component {

  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  
  }
 

 
  render() {
    return (
      <button
        type="button"
        className={style.Button}
        onClick={this.props.apiRequest}>
        Load more
      </button>
    );
  }
}

export default ButtonLoadMore;
