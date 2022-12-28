import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, InputText, SubmitButton } from './Searcdar.styled';
import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  state = {
    searchText: '',
  };

  search = event => {
    event.preventDefault();

    if (this.state.searchText.trim() === '') {
      return alert('введіть текст пошуку');
    }

    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
    return;
  };

  handelChange = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <>
        <header>
          <Form onSubmit={this.search}>
            <InputText
              value={this.state.searchText}
              class="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handelChange}
            />
            <SubmitButton type="submit" class="button">
              <span>
                <FcSearch size={40} />
              </span>
            </SubmitButton>
          </Form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
