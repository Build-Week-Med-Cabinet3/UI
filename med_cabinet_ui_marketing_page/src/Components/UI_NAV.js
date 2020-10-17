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

const UI_NAV = ({ primary }) => {
  return (
    <Navbar style={{ backgroundColor: primary }} dark className="UI_NAV">
      <Link to="/">
        <NavbarBrand>Med Cabinet Logo</NavbarBrand>
      </Link>
      <div className="UI_NAV_LINKS">
        <Collapse isOpen={true} navbar>
          <Nav navbar>
            <div className="UI_NAV_ITEMS">
              <NavItem>
                <Link to="/">
                  <NavLink href="#">Join Now</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/">Log In</NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default UI_NAV;
