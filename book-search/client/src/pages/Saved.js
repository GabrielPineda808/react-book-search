import React, { Component } from 'react';
import API from '../utils/API';

class Saved extends Component {
  state = {
    title: '',
    authors: [''],
    description: '',
    image: '',
    link: ''
  };

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1>Saved Books</h1>
          <div className='row'>
            <div className='col'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;