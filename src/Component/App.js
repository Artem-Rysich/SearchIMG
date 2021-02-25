import React, {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import ButtonLoadMore from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ImgApi from './ImgApi/ImgApi';
import ModalWindow from './Modal/Modal';
class App extends Component {
  state = {
    img: [],
    search: '',
    spinner: false,
    page: 1,
    largeSrc: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.search;
    const nextQuery = this.state.search;
    if (nextQuery !== prevQuery) {
      this.apiRequest();
    }
  }

  apiRequest = () => {
    this.setState({spinner: true});
    const {search, page} = this.state;
    ImgApi(search, page)
      .then((img) =>
        this.setState((prevState) => ({
          img: [...prevState.img, ...img],
          page: prevState.page + 1,
        }))
      )
      .finally(() => this.setState({spinner: false}));
  };
  handleSearchFormSubmit = ({searchQuery}) => {
    this.setState({search: searchQuery, img: [], page: 1});
  };
  handlerOpenModalWindow = (event) => {
    this.setState({largeSrc: event.target.alt});
  };
  closeModalWIndow = () => {
    this.setState({largeSrc: null});
  };

  render() {
    const {img, spinner, largeSrc} = this.state;
    const ShowButton = img.length > 0;
    return (
      <>
        <Searchbar apiRequest={this.handleSearchFormSubmit} />
        <ImageGallery
          img={img}
          handlerOpenModalWindow={this.handlerOpenModalWindow}
        />
        {largeSrc && (
          <ModalWindow
            largeSrc={largeSrc}
            closeModalWIndow={this.closeModalWIndow}
          />
        )}
        {ShowButton && !spinner ? (
          <ButtonLoadMore apiRequest={this.apiRequest} />
        ) : (
          <Loader spinner={spinner} />
        )}
      </>
    );
  }
}

export default App;
