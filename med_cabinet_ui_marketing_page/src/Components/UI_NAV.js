import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../res/img/mcLogo.png";

const UI_NAV = ({ primary }) => {
  return (
    <Navbar style={{ backgroundColor: primary }} dark className="UI_NAV">
      <Link to="/">
        <NavbarBrand>
          <img src={logo} alt="Med Cabinet Logo" style={{ height: "2em" }} />
        </NavbarBrand>
      </Link>
      <div className="UI_NAV_LINKS">
        <Collapse isOpen={true} navbar>
          <Nav navbar>
            <div className="UI_NAV_ITEMS">
              <NavItem>
                <NavLink href="https://med-cabinet-dusky.vercel.app/register">
                  Join Now
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://med-cabinet-dusky.vercel.app/">
                  Log In
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default UI_NAV;
