import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = ({ activeLink }: { activeLink: "repo" | "dev" }) => {
  return (
    <div className="navigation">
      <Link
        className={"link link-left" + (activeLink === "repo" ? " active" : "")}
        to="/trending"
      >
        Repositories
      </Link>
      <Link
        className={"link link-right" + (activeLink === "dev" ? " active" : "")}
        to="/trending/developers"
      >
        Developers
      </Link>
    </div>
  );
};
