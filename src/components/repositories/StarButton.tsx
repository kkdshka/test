import React, { useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import "./StarButton.scss";

export const StarButton = () => {
  const [type, setType] = useState<"starred" | "unstarred">("unstarred");

  const Button = () => {
    if (type === "unstarred") {
      return (
        <button className="button" onClick={() => setType("starred")}>
          <HiOutlineStar className="icon" />
          Star
        </button>
      );
    } else {
      return (
        <button className="button" onClick={() => setType("unstarred")}>
          <HiStar className="icon" />
          Unstar
        </button>
      );
    }
  };

  return (
    <div className="button-container">
      <Button />
    </div>
  );
};
