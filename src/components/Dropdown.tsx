import { NavLink } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <>
      <ul className={classes.dropdown}>
        <li>
          <NavLink to="collection/:Non Finito">Non Finito</NavLink>
        </li>
        <li>
          <NavLink to="collection/:30x24">30x24</NavLink>
        </li>
        <li>
          <NavLink to="collection/:Other">Other</NavLink>
        </li>
        <li>
          <NavLink to="collection/:Portfolio">Portfolio</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
