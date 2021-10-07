import React from "react";
import { Header } from "../Header";
import { TrendingHeader } from "../common/TrendingHeader";
import "./Developers.scss";

export const Developers = () => {
  return (
    <div className="flex-container">
      <Header subtitle="These are the developers building the hot tools today." />
      <div className="developers-container">
        <TrendingHeader activeLink="dev" />
      </div>
    </div>
  );
};
