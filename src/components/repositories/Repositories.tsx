import React, { useState } from "react";
import { useQuery } from "react-query";
import { Repository } from "./Repository";
import { Header } from "../Header";
import { Navigation } from "../common/Navigation";
import { Selector } from "../common/Selector";
import { IRepository } from "../../../types/IRepository";
import { programmingLanguageOptions } from "../../utils/selectorsOptions";
import "./Repositories.scss";

export const Repositories = () => {
  const [languageFilter, setLanguageFilter] = useState<string>("");

  const handleLanguageChange = (language: string) => {
    setLanguageFilter(language);
  };

  const { isLoading, data: repositories } = useQuery<Array<IRepository>, Error>(
    ["repoData", languageFilter],
    () => {
      if (languageFilter !== "") {
        return fetch(
          `https://gh-trending-api.herokuapp.com/repositories/${languageFilter}`
        ).then((res) => res.json());
      } else {
        return fetch("https://gh-trending-api.herokuapp.com/repositories").then(
          (res) => res.json()
        );
      }
    }
  );

  const renderRepositories = () => {
    if (isLoading || repositories === undefined) {
      return <div className="no-repo-data">Loading data...</div>;
    } else if (repositories.length === 0) {
      return (
        <div className="no-repo-data">
          It looks like we don’t have any trending repositories for{" "}
          {languageFilter}.
        </div>
      );
    } else {
      return repositories.map((repository, index) => (
        <Repository key={`repository-${index}`} repository={repository} />
      ));
    }
  };

  return (
    <div className="flex-container">
      <Header subtitle="See what the GitHub community is most excited about today." />
      <div className="repositories-container">
        <div className="repositories-header">
          <Navigation activeLink="repo" />
          <Selector
            name="Language"
            options={programmingLanguageOptions}
            onChange={handleLanguageChange}
          />
        </div>
        {renderRepositories()}
      </div>
    </div>
  );
};
