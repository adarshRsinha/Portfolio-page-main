import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MainImg2 from '../Components/MainImg2';
import MyProjects from '../Components/MyProjects';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="PROJECTS" text="Some abilities to perform tasks" />
      <MyProjects/>
      <Footer/>
    </div>
  )
}

export default Projects
