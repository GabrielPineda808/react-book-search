import React, {Component, useState} from 'react';
import API from '../utils/API'
import Items from '../components/List/SavedItems'

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  };

  componentsDidMount() {
    this.loadBooks()
  };

  loadBooks() {
    API.getBooks()
    .then(res => {
      this.setState({ 
        books: res.data, 
        title: res.data.title,
        authors: res.data.author,
        description: res.data.description,
        image: res.data.image,
        link: res.data.link
      })
    .catch(err => console.log(err))
    })
  }

  delete = (id) => {
    API.deleteBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.books.map(book => 
          <Items 
            title={book.volumeInfo.title} 
            author={book.volumeInfo.authors} 
            description={book.volumeInfo.description} 
            link={book.volumeInfo.infoLink} 
            image={book.volumeInfo.imageLinks.smallThumbnail} 
        />  
        )}      
      </div>
    )
  }

}

export default Saved;