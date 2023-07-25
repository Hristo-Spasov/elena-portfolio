import { useState } from "react";
import { NavLink } from "react-router-dom";
import { collection } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={classes.burger_nav}>
      {isOpen ? (
        <span onClick={toggleHandler}>
          <CloseIcon />
        </span>
      ) : (
        <span onClick={toggleHandler}>
          <MenuIcon />
        </span>
      )}
      <div
        className={
          isOpen ? classes.burger_dropdown : classes.burger_dropdown_hidden
        }
      >
        {collection.map(({ title, id }) => (
          <ul key={id}>
            <li>
              <NavLink to={`collection/${title}`}>{title}</NavLink>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default BurgerMenu;
