import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import SearchResult from '../components/SearchResult';

const SearchPage = () => {
  return <div>
    <Header/>
    <SearchBar/>
    <SearchResult/>
    <Footer/>
  </div>;
};

export default SearchPage;
