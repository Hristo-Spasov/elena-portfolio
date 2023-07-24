import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className={classes.nav__container}>
      <nav className={pathname !== "/" ? classes.nav__teal : classes.nav}>
        <ul className={classes.nav_list}>
          {/* Logo */}
          <div>
            {pathname === "/" ? (
              <Link to="/" smooth={true} duration={300} offset={0} spy={true}>
                <img className={classes.logo} src={logo} />
              </Link>
            ) : (
              <NavLink to="/">
                <img className={classes.logo} src={logo} />
              </NavLink>
            )}
          </div>

          {/* Main nav */}
          <div
            className={
              pathname !== "/" ? classes.main_nav_alt : classes.main_nav
            }
          >
            <li>
              {pathname === "/" ? (
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                >
                  Home
                </Link>
              ) : (
                <NavLink to="/">Home</NavLink>
              )}
            </li>
            <li>
              <span onClick={() => setToggle(!toggle)}>
                Collections{" "}
                <ArrowDown
                  width={12}
                  height={12}
                  className={classes.arrow_down}
                />
              </span>

              {/* Dropdown */}
              <div
                className={
                  toggle
                    ? classes.dropdown_container
                    : classes.dropdown_container_hidden
                }
                onClick={() => setToggle(!toggle)}
              >
                <Dropdown />
              </div>
            </li>
            <li>
              <Link to="contacts" smooth={true} duration={500} spy={true}>
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
