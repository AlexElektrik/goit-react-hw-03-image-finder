import React, { Component } from 'react';
import { Loader } from './Loader/Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { GlobalStyle } from './GlobalStyled';

const KEY = '30951910-62deaf9663a2ad8fd5a993571';
const PER_PAGE = 12;

export class App extends Component {
  state = {
    fetchInfo: '',
    info: [],
    status: 'idle',
    page: 1,
    totalHits: 0,
    selectedImage: '',
    modelOpen: false,
  };

  getSearchText = text => {
    this.setState({ fetchInfo: text, page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.fetchInfo !== this.state.fetchInfo) {
      this.setState({ info: [] });
    }

    if (
      prevState.fetchInfo !== this.state.fetchInfo ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      await fetch(
        `https://pixabay.com/api/?key=${KEY}&q=${this.state.fetchInfo}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(this.setState({ status: 'rejected' }));
        })
        .then(data => {
          console.log('data:', data);
          if (data.hits.length > 0) {
            return this.setState(prevState => ({
              info: [...prevState.info, ...data.hits],
              totalHits: data.totalHits,
              status: 'resolved',
            }));
          }
          return this.setState({ status: 'rejected' });
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
  }

  incrementPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  selectImage = imageUrl => {
    this.setState({
      selectedImage: imageUrl,
      modelOpen: true,
    });
  };

  modalClose = () => {
    this.setState({
      selectedImage: '',
      modelOpen: false,
    });
  };

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.modalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { info, status } = this.state;

    if (status === 'idle') {
      return (
        <>
          <Searchbar onSubmit={this.getSearchText}></Searchbar>
          <GlobalStyle />
        </>
      );
    }
    if (status === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.getSearchText}></Searchbar>
          <Loader />
          <GlobalStyle />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Searchbar onSubmit={this.getSearchText}></Searchbar>
          <div>нічого не знайдено</div>
          <GlobalStyle />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.getSearchText}></Searchbar>
          <ImageGallery info={info} onSelect={this.selectImage} />
          {this.state.totalHits > this.state.page * PER_PAGE && (
            <Button onClick={this.incrementPage} />
          )}
          {this.state.modelOpen && (
            <Modal src={this.state.selectedImage} onClose={this.modalClose} />
          )}
          <GlobalStyle />
        </>
      );
    }
  }
}
