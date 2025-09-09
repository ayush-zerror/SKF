import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Button = ({ title, color }) => {
  return (
    <button className={`common_btn ${color}`}>
      {title}
      <div>
        <GoArrowUpRight />
        <GoArrowUpRight />
      </div>
    </button>
  );
};

export default Button;
