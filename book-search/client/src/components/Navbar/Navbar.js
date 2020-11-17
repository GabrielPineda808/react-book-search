import React from 'react';

function Navbar () {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#home">Google Books</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Search<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;