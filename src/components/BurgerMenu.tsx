import { useState } from "react";
import { NavLink } from "react-router-dom";
import { collection } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./BurgerMenu.module.css";
import { ClickAwayListener } from "@mui/material";

const BurgerMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const clickAwayHandler = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
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
                <NavLink to={`collection/${title}`} onClick={clickAwayHandler}>
                  {title}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default BurgerMenu;
