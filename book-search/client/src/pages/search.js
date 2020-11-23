import React from 'react';
import Jumbo from '../components/Jumbotron';
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