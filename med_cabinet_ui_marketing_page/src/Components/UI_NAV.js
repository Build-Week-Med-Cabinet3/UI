import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavLink,
} from "reactstrap";
import "../style.css";

const UI_NAV = ({ primary }) => {
  return (
    <Navbar style={{ backgroundColor: primary }} dark className="UI_NAV">
      <NavbarBrand>Med Cabinet Logo</NavbarBrand>
      <div className="UI_NAV_LINKS">
        <Collapse isOpen={true} navbar>
          <Nav navbar>
            <div className="UI_NAV_ITEMS">
              <NavItem>
                <NavLink href="/">Join Now</NavLink>
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
