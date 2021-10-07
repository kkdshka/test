import React from "react";
import "./Header.scss";

type Props = {
  subtitle: string;
};

export const Header = ({ subtitle }: Props) => {
  return (
    <div className="header-container">
      <div className="title">Trending</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};
