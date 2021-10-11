import React, { Fragment } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { InteractiveButton } from "../common/InteractiveButton";
import "./StarButton.scss";

export const StarButton = () => {
  const name = {
    active: (
      <Fragment>
        <HiStar className="star-button-icon" />
        Unstar
      </Fragment>
    ),
    nonactive: (
      <Fragment>
        <HiOutlineStar className="star-button-icon" />
        Star
      </Fragment>
    ),
  };

  return (
    <div className="star-button-container">
      <InteractiveButton name={name} />
    </div>
  );
};
