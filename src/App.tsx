import React from 'react';

import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';

import Footer from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/NavbarAndFooter/HomePage/HomePage';
import SearchBooksPage from './searchbookspage/SearchBooksPage';

export const App =()=> {
  return (
    <div>
  <Navbar/>
{/*  <HomePage/> */}
<SearchBooksPage/>
  <Footer/>
  </div>
  );
}
