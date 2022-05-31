import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

const Header = () => {
    return (
        <div>
           <Navbar color="light" light expand="md">
          <NavbarBrand ><Link to="/">reactstrap</Link></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
    
                <Link to="/user">User</Link>
              </NavItem>
              <NavItem>
                <Link to="/task">Task</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
        </div>
    );
}

export default Header;
