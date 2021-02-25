import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';
export default class Spinner extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Loader
          type="ThreeDots"
          color="red"
          height={100}
          width={100}
          visible={this.props.spinner}
        />
      </div>
    );
  }
}
