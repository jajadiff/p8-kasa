import React, { useState } from "react";
import arrow from "../assets/arrow.svg";

function Toggle({ title, dropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <h2 onClick={toggleOpen} className="toggle__title">
        {title}
        <img src={arrow} />
      </h2>
      {isOpen && dropdown}
    </div>
  );
}

export default Toggle;
