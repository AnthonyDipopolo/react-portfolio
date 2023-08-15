import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import Icons from '../components/Icons';
import Projects from '../components/Projects';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className="">
      <SideBar />
      <Main />
      <Icons />
      <div className="custom-projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
