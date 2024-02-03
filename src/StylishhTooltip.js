import React, { useEffect } from "react";
import "./index.css";

export const StylishhTooltip = ({ id, mode, type, children, styledClass }) => {
  useEffect(() => {
    let stylishTooltipElem = document
      .getElementById(id)
      .getBoundingClientRect();
    let dropItem = document.getElementById("--stylish-tooltip-referral");

    const listener = (event) => {
      dropItem.style.display = "block";
      dropItem.style.x = stylishTooltipElem.x + "px";
      dropItem.style.y = stylishTooltipElem.y + "px";
      dropItem.style.zIndex = "9999999 !important";
    };

    const listenerRemove = () => {
      setTimeout(() => {
        dropItem.style.display = "none";
      }, [600]);
    };

    const element = document.getElementById(id);
    element.addEventListener("mouseover", listener);
    element.addEventListener("mouseleave", listenerRemove);

    return () => {
      element.removeEventListener("mouseover", listener);
      element.removeEventListener("mouseleave", listenerRemove);
    };
  }, []);

  return (
    <div
      id="--stylish-tooltip-referral"
      className={`--stylish-custom-tooltip ${mode} ${type} ${
        styledClass ? styledClass : ""
      }`}
    >
      {children}
    </div>
  );
};
