import React from "react";
import { InteractiveButton } from "../common/InteractiveButton";

export const FollowButton = () => {
  const name = {
    active: "Unfollow",
    nonactive: "Follow",
  };

  return <InteractiveButton name={name} />;
};
