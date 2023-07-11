import React from 'react';
import SearchBar from './HomeComponent/SearchBar';
import Navigation from './HomeComponent/Navigation';
import MainContent from './HomeComponent/MainContent';
import LeftSide from './HomeComponent/LeftSide';
import LatestPosts from './HomeComponent/LatestPosts';

const HomePage = () => {
  return (
    <>
      <div>
        Hello world
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Navigation/>
      </div>
      <div>
        <MainContent/>
      </div>
      <div>
        <LeftSide/>
      </div>
      <div>
        <LatestPosts/>
      </div>

    </>

  );
};

export default HomePage;
