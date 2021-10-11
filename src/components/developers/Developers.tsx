import React, { useState } from "react";
import { useQuery } from "react-query";
import { Developer } from "./Developer";
import { Header } from "../Header";
import { Navigation } from "../common/Navigation";
import { Selector } from "../common/Selector";
import { IDeveloper } from "../../../types/IDeveloper";
import { programmingLanguageOptions } from "../../utils/selectorsOptions";
import "./Developers.scss";

export const Developers = () => {
  const [languageFilter, setLanguageFilter] = useState<string>("");

  const handleLanguageChange = (language: string) => {
    setLanguageFilter(language);
  };

  const { isLoading, data: developers } = useQuery<Array<IDeveloper>, Error>(
    ["devData", languageFilter],
    () => {
      if (languageFilter !== "") {
        return fetch(
          `https://gh-trending-api.herokuapp.com/developers/${languageFilter}`
        ).then((res) => res.json());
      } else {
        return fetch("https://gh-trending-api.herokuapp.com/developers").then(
          (res) => res.json()
        );
      }
    }
  );

  const renderDevelopers = () => {
    if (isLoading || developers === undefined) {
      return <div className="no-dev-data">Loading data...</div>;
    } else if (developers.length === 0) {
      return (
        <div className="no-dev-data">
          It looks like we don’t have any trending developers for{" "}
          {languageFilter}.
        </div>
      );
    } else {
      return developers.map((developer, index) => (
        <Developer key={`developer-${index}`} developer={developer} />
      ));
    }
  };

  return (
    <div className="flex-container">
      <Header subtitle="These are the developers building the hot tools today." />
      <div className="developers-container">
        <div className="developers-header">
          <Navigation activeLink="dev" />
          <Selector
            name="Language"
            options={programmingLanguageOptions}
            onChange={handleLanguageChange}
          />
        </div>
        {renderDevelopers()}
      </div>
    </div>
  );
};
