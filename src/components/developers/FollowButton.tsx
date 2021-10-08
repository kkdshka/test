import React from "react";
import "./FollowButton.scss";
import { InteractiveButton } from "../common/InteractiveButton";

export const FollowButton = () => {
  const name = {
    active: "Unfollow",
    nonactive: "Follow",
  };
  return (
    <div className="follow-button-container">
      <InteractiveButton name={name} />
    </div>
  );
};
