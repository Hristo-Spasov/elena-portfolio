import React from "react";
import classes from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...otherProps }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className={classes.base_button} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
