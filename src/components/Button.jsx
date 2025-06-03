import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = ({
  text,
  variant = "primary",
  disabled = false,
  size = "md",
  path,
  children,
  spacing,
  onClick,
  type = "button",
  preventDefaultStyle = false,
  className = "",
  ...rest
}) => {
  const VARIANTS = {
    primary: "primary-btn",
    outlined: "outlined-btn",
    danger: "bg-red-600 text-white hover:bg-red-700",
    link: "text-[#141414] underline hover:text-black inline-block",
    disabled: "opacity-50 cursor-not-allowed",
  };

  const btnSize = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const baseBtn = "px-6 py-2 rounded-full";
  const computedClass = preventDefaultStyle
    ? className 
    : clsx(
        baseBtn,
        btnSize[size],
        spacing ? `mx-[${spacing}]` : "",
        disabled ? VARIANTS.disabled : VARIANTS[variant],
        className 
      );

  const content = text || children;

  return path ? (
    <Link to={path} className={computedClass} {...rest}>
      {content}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={computedClass}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
