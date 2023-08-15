import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import Icons from '../components/Icons';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="">
      {/* Render SideBar component */}
      <SideBar />
      {/* Render Main component */}
      <Main />
      {/* Render Icons component */}
      <Icons />
      {/* Render Projects component */}
      <Projects />
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;
