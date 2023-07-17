import { NavLink } from "react-router-dom";
import classes from "./Dropdown.module.css";
import { collection } from "../constants";

const Dropdown = () => {
  return (
    <>
      {collection.map(({ title, id }) => (
        <ul key={id} className={classes.dropdown}>
          <li>
            <NavLink to={`collection/${title}`}>{title}</NavLink>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Dropdown;
