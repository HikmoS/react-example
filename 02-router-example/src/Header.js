import React , { Component }from "react";
import PropTypes from 'prop-types';
import {Nav,Navbar, NavLink,NavItem} from 'reactstrap'


// Buraya header adında bir component oluşturdum ve bu component nav menu için bu componenti yaptık.

class Header extends Component{
	render(){
		return(
		<Navbar light color="" expand="md">
			<Nav navbar>
			    <NavItem>
			      <NavLink href="/">Home</NavLink>
			    </NavItem>
			    <NavItem>
			      <NavLink href="/create">Add Book</NavLink>
			    </NavItem>
		    </Nav>
		  </Navbar>
		);
	}
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};


export default Header;

