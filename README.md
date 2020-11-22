# React Google Book Search
In this project i was able to create book searching website using the google books api. On the search page the user is able to easily search a book and then be met with multiple diffrent books with similar titles along with the authors, a small description of the book, an image of the cover, and a view link to the google site. The call for the books was made using axios which took the users search input by setting the state to whatever value the user typed in. The user also has the ability to sae a book which they can access any time in their saved books page.

## Gif of the Book Search
![Home](booksearch.gif)

## Code Snippet
The code below is actually how after receiving the input in the search bar from the user it gets sent to a function which calls upon the api to bring back and object of data which contains the book info then  it is mapped into the list items component which will create a <li></li> for each book that the object contains.

<div className="container">
    <h3>Search a Book</h3>
    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
    <button className="btn btn-outline-secondary mt-3 mb-3" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
    {this.state.books.map(items => 
        <Items title={items.volumeInfo.title} author={items.volumeInfo.authors} description={items.volumeInfo.description} link={items.volumeInfo.infoLink} image={items.volumeInfo.imageLinks.smallThumbnail} />  
                )}           
</div>

## Built With

* [React](https://www.react.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Axios](https://www.npmjs.com/package/axios/)


## Github Repository
- [Repo](https://github.com/GabrielPineda808/react-book-search)

## Authors

* **Gabriel Pineda** 

- [Link to Github](https://github.com/GabrielPineda808)
- [Link to LinkedIn](https://www.linkedin.com/in/gabriel-pineda-a94535195/)