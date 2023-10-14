import React, { useEffect, useState } from "react";
import LandingPageLogo from "../assets/logo.png";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-11 ">
        <Navbar
          expand="xl"
          // variant="dark"
          className={isScrolled ? "scrolled" : ""}
        >
          <Navbar.Brand>
            <img
              className="fluid-img"
              src={LandingPageLogo}
              alt="hiking concept logo"
              width={120}
            />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                onClick={() => setActiveLink("home")}
                className={
                  activeLink === "home" ? "active border-bottom border-3" : ""
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#stores"
                onClick={() => setActiveLink("store")}
                className={
                  activeLink === "store"
                    ? "active active border-bottom border-3"
                    : ""
                }
              >
                Upcoming Treks
              </Nav.Link>
              <Nav.Link
                href="#products"
                onClick={() => setActiveLink("products")}
                className={
                  activeLink === "products"
                    ? "active active border-bottom border-3"
                    : ""
                }
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => setActiveLink("contact")}
                className={
                  activeLink === "contact"
                    ? "active active border-bottom border-3"
                    : ""
                }
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="call-now">
            <span>Call Now</span>
            <h1>1800 888 555</h1>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
