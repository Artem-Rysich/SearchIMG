import React, {Component} from 'react';
import style from './Searchbar.module.css';
const INITIAL_STATE = {
  searchQuery: '',
};
class Seacrhbar extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.apiRequest(this.state)
    this.resetInput();
  };
  handleChangeinput = (event) => {
    const {value} = event.target;
    this.setState({
      searchQuery: value,
    });
  };
  resetInput = () => {
    this.setState({...INITIAL_STATE});
  };
  render() {
    const {searchQuery} = this.state;
    return (
      <header className={style.Searchbar} onSubmit={this.handleSubmit}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeinput}
            value={searchQuery}
          />
        </form>
      </header>
    );
  }
}

export default Seacrhbar;
