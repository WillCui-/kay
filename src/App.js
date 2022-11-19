import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  projects,
  experiences,
  vitamink,
  contact
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Experience from "./components/home/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/home/Projects";
import VitaminK from "./components/home/VitaminK";
import Contact from "./components/home/Contact";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter basename={"/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/about" element={
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            ref={titleRef}
          />
        } />
        <Route path="/experiences" element={
          <Experience
            experiences={experiences}
            ref={titleRef}
          />
        } />
        <Route path="/projects" element={
          <Projects
            projects={projects}
            ref={titleRef}
          />
        } />
        <Route path="/vitamink" element={
          <VitaminK
            vitamink={vitamink}
            ref={titleRef}
          />
        } />
        <Route path="/contact" element={
          <Contact
            contact={contact}
            ref={titleRef}
          />
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;
