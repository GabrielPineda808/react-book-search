import React from 'react';

function Search () {
  return (
    <div class="container">
        <h3>Search a Book</h3>
        <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button class="btn btn-outline-secondary mt-3" type="button" id="button-addon2">Search</button>
    </div>
  )
}

export default Search;