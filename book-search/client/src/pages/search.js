import React from 'react';
import Jumbo from '../components/Jumbotron';
import List from '../components/List/Items';
import Navbar from '../components/Navbar/Navbar';
import Search from "../components/search"

function Searchpage () {
  return (
    <div>
        <Navbar />
        <Jumbo />
        <Search />
    </div>
  )
}

export default Searchpage;