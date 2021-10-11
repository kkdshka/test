import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import axios from "axios";
import "./Repositories.scss";
import { IRepository } from "../../../types/IRepository";
import { Repository } from "./Repository";
import { Navigation } from "../common/Navigation";
import { Selector } from "../common/Selector";
import { programmingLanguageOptions } from "../../utils/selectorsOptions";

export const Repositories = () => {
  const [repositories, setRepositories] = useState<Array<IRepository>>([]);
  const [languageFilter, setLanguageFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (languageFilter !== "") {
      setLoading(true);
      axios
        .get(
          `https://gh-trending-api.herokuapp.com/repositories/${languageFilter}`
        )
        .then((result) => {
          setRepositories(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoading(true);
      axios
        .get("https://gh-trending-api.herokuapp.com/repositories")
        .then((result) => {
          setRepositories(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [languageFilter, setLanguageFilter]);

  const handleLanguageChange = (language: string) => {
    setLanguageFilter(language);
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
        {repositories.length > 0 || loading ? (
          repositories.map((repository, index) => (
            <Repository key={`repository-${index}`} repository={repository} />
          ))
        ) : (
          <div className="no-repo-data">
            It looks like we don’t have any trending repositories for{" "}
            {languageFilter}.
          </div>
        )}
      </div>
    </div>
  );
};
