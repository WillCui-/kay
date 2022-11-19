import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, about, experiences, projects, vitamink, contact } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clearNavColor, setClearNavColor] = useState(true);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      collapseOnSelect
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${isTop && clearNavColor ? "navbar-transparent" : "navbar-white"}`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#/"}
        onClick={() => setClearNavColor(true)}>
        {`${mainBody.firstName} ${mainBody.lastName}`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#/about"}
              onClick={() => setClearNavColor(false)}
            >
              About
            </NavLink>
          )}
          {experiences.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#/experiences"}
              onClick={() => setClearNavColor(false)}
            >
              Experiences
            </NavLink>
          )}
          {projects.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#/projects"}
              onClick={() => setClearNavColor(false)}
            >
              Projects
            </NavLink>
          )}
          {vitamink.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#/vitamink"}
              onClick={() => setClearNavColor(false)}
            >
              Vitamin K
            </NavLink>
          )}
          {contact.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#/contact"}
              onClick={() => setClearNavColor(false)}
            >
              Contact
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
});

export default Navigation;
