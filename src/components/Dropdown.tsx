import { NavLink } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <>
      <ul className={classes.dropdown}>
        <li>
          <NavLink to="/">Non Finito</NavLink>
        </li>
        <li>
          <NavLink to="/">30x24</NavLink>
        </li>
        <li>
          <NavLink to="/">Other</NavLink>
        </li>
        <li>
          <NavLink to="/">Portfolio</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
