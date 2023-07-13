import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import arrowdown from "../assets/arrow-down.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className={classes.nav__container}>
      <nav className={pathname !== "/" ? classes.nav__teal : classes.nav}>
        <ul className={classes.nav_list}>
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img className={classes.logo} src={logo} />
            </NavLink>
          </div>
          {/* Main nav */}
          <div className={classes.main_nav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <span onClick={() => setToggle(!toggle)}>
                Collections{" "}
                <img
                  className={classes.arrowdown}
                  src={arrowdown}
                  width={12}
                  height={12}
                />
              </span>
              {/* Dropdown */}
              <div
                className={
                  toggle
                    ? classes.dropdown_container
                    : classes.dropdown_container_hidden
                }
              >
                <Dropdown />
              </div>
            </li>
            <li>
              <Link to="contacts" smooth={true} duration={300}>
                Contacts
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
