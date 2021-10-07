import React from "react";
import { Navigation } from "./Navigation";
import "./TrendingHeader.scss";

export const TrendingHeader = ({
  activeLink,
}: {
  activeLink: "repo" | "dev";
}) => {
  return (
    <div className="repositories-header">
      <Navigation activeLink={activeLink} />
    </div>
  );
};
