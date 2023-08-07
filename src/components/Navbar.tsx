import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  // Closing the dropdown menu when we click anywhere on the page
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        toggle &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [toggle]);

  return (
    <div className={classes.nav__container}>
      <nav
        ref={navRef}
        className={pathname !== "/" ? classes.nav__teal : classes.nav}
      >
        <ul className={classes.nav_list}>
          {/* Logo */}
          <div className={classes.logo_container}>
            {pathname === "/" ? (
              <Link
                to="home"
                smooth={true}
                duration={300}
                offset={0}
                spy={true}
              >
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
              <span onClick={() => setToggle((prev) => !prev)}>
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
                onClick={() => setToggle((prev) => !prev)}
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

          {/* Burger menu for mobile view */}
          <div className={classes.burder_menu}>
            <BurgerMenu />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
